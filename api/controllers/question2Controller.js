const { PrismaClient: PrismaLocalClient } = require('../../prisma/generated/local');
const { PrismaClient: PrismaCloudClient } = require('../../prisma/generated/cloud');
const crypto = require('crypto');
const  CONSTANTS  = require('../../constants/constants');

// Initialize Prisma clients
const prismaLocal = new PrismaLocalClient();
const prismaCloud = new PrismaCloudClient();


async function calculateChecksum(prisma, table, chunkSize = CONSTANTS.CHUNK_SIZE) {
  let offset = 0;
  let globalChecksum = '';
  while (true) {
    const data = await prisma.$queryRawUnsafe(`
    SELECT MD5(STRING_AGG(CONCAT_WS('|', "id", "name", "value", "address"), '')) AS chunk_checksum
        FROM (SELECT "id", "name", "value", "address" FROM "${table}" ORDER BY "id" LIMIT ${chunkSize} OFFSET ${offset}) AS chunk
      `);
    if (!data.length || !data[0].chunk_checksum) break;

    globalChecksum += data[0].chunk_checksum;
    offset += chunkSize;
  }
  return crypto.createHash('md5').update(globalChecksum).digest('hex');
}


exports.compareRowsOfDB = async (req, res, next) => {
  const { tableName } = req.params;
  const chunkSize = CONSTANTS.CHUNK_SIZE;
  try {
    let offset = 0;
    while (true) {
      const localRows = await prismaLocal.$queryRawUnsafe(`
        SELECT  "id", "name", "value", "address" FROM "${tableName}" ORDER BY id LIMIT ${chunkSize} OFFSET ${offset}
      `);

      const cloudRows = await prismaCloud.$queryRawUnsafe(`
        SELECT "id", "name", "value", "address" FROM "${tableName}" ORDER BY id LIMIT ${chunkSize} OFFSET ${offset}
      `);

      if (!localRows.length && !cloudRows.length) break;

      for (let i = 0; i < localRows.length; i++) {
        if (JSON.stringify(localRows[i]) !== JSON.stringify(cloudRows[i])) {
          return res.json({
            message: `Data mismatch found in table "${tableName}."`,
            row: { local: localRows[i], cloud: cloudRows[i] },
          });
        }
      }

      offset += chunkSize;
    }
    res.json({ message: `All rows match for table "${tableName}."` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}



exports.compareCountOfDB = async (req, res, next) => {
  const { tableName } = req.params;
  try {
    const localCount = await prismaLocal[tableName].count();
    const cloudCount = await prismaCloud[tableName].count();

    const result =
      localCount === cloudCount
        ? `Record counts match: ${localCount}`
        : `Mismatch in record counts - Local: ${localCount}, Cloud: ${cloudCount}`;
    res.json({ tableName, result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}




exports.compareCheckSumOfDB = async (req, res, next) => {
  const { tableName } = req.params;
  try {
    const localChecksum = await calculateChecksum(prismaLocal, tableName);
    const cloudChecksum = await calculateChecksum(prismaCloud, tableName);

    if (localChecksum === cloudChecksum) {
      res.json({ message: `Data matches for table "${tableName}."` });
    } else {
      res.json({ message: `Data mismatch for table "${tableName}."` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}



exports.dataSampling = async (req, res, next) => {
  const { tableName } = req.params;
  const sampleSize = CONSTANTS.SAMPLE_SIZE; // Number of rows to sample
  try {
    const localSample = await prismaLocal.$queryRawUnsafe(`
        SELECT "id", "name", "value", "address" FROM "${tableName}" ORDER BY RANDOM() LIMIT ${sampleSize}
      `);

    const cloudSample = await prismaCloud.$queryRawUnsafe(`
        SELECT "id", "name", "value", "address" FROM "${tableName}" ORDER BY RANDOM() LIMIT ${sampleSize}
      `);

    const mismatches = [];
    for (let i = 0; i < localSample.length; i++) {
      if (JSON.stringify(localSample[i]) !== JSON.stringify(cloudSample[i])) {
        mismatches.push({ local: localSample[i], cloud: cloudSample[i] });
      }
    }

    if (mismatches.length === 0) {
      res.json({ message: `Sample data matches for table "${tableName}."` });
    } else {
      res.json({ message: `Mismatches found in sampled data for table "${tableName}."`, mismatches });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

exports.schemaVerification = async (req, res, next) => {
  const { tableName } = req.params;
  try {
    const localSchema = await prismaLocal.$queryRawUnsafe(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = '${tableName}'
      ORDER BY column_name
    `);

    const cloudSchema = await prismaCloud.$queryRawUnsafe(`
      SELECT column_name, data_type
      FROM information_schema.columns
      WHERE table_name = '${tableName}'
      ORDER BY column_name
    `);

    if (JSON.stringify(localSchema) === JSON.stringify(cloudSchema)) {
      res.json({ message: `Schema matches for table ${tableName}.` });
    } else {
      res.json({
        message: `Schema mismatch for table ${tableName}.`,
        localSchema,
        cloudSchema,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}