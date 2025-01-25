const { PrismaClient: PrismaLocalClient } = require('../../prisma/generated/local');
const { PrismaClient: PrismaCloudClient } = require('../../prisma/generated/cloud');
const  CONSTANTS  = require('../../constants/constants');

// Initialize Prisma clients
const prismaLocal = new PrismaLocalClient();
const prismaCloud = new PrismaCloudClient();


async function transferMoney(fromAccountId, toAccountId, amount) {
  return await prismaLocal.$transaction(async () => {
    const senderAccount = await prismaLocal[CONSTANTS.dbTableName.Account].findUnique({ where: { id: fromAccountId } });
    const receiverAccount = await prismaCloud[CONSTANTS.dbTableName.Account].findUnique({ where: { id: toAccountId } });
    if (!senderAccount || senderAccount.balance < amount) {
      throw new Error(CONSTANTS.errorMessage.SENDER_INSUFFICIENT_BALANCE);
    }
    if (!receiverAccount) {
      throw new Error(CONSTANTS.errorMessage.RECEIVER_BANK_NOT_FOUND);
    }
    // Debit from sender's account in Bank A(db1)
    await prismaLocal[CONSTANTS.dbTableName.Account].update({
      where: { id: fromAccountId },
      data: { balance: senderAccount.balance - amount },
    });

    // Credit to receiver's account in Bank B(db2)
    await prismaCloud[CONSTANTS.dbTableName.Account].update({
      where: { id: toAccountId },
      data: { balance: receiverAccount.balance + amount },
    });

    // Record transaction in Bank A(db1)
    await prismaLocal[CONSTANTS.dbTableName.AccountTransaction].create({
      data: {
        type: CONSTANTS.TR_DEBIT,
        amount,
        balanceAfter: senderAccount.balance - amount,
        accountId: fromAccountId,
      },
    });

    // Record transaction in Bank B(db2)
    await prismaCloud[CONSTANTS.dbTableName.AccountTransaction].create({
      data: {
        type:CONSTANTS.TR_CREDIT,
        amount,
        balanceAfter: receiverAccount.balance + amount,
        accountId: toAccountId,
      },
    });

    return true;
  });
}


exports.transferMoneyLogic=async (req,res,next)=>{
    const { fromAccountId, toAccountId, amount,userId } = req.body;
    try {
      // Validate if the user owns the source account
      const senderAccount = await prismaLocal[CONSTANTS.dbTableName.Account].findUnique({ where: { id: fromAccountId } });
      if (!senderAccount || senderAccount.userId !== userId) {
        return res.status(403).json({ error: CONSTANTS.errorMessage.NOT_AUTHORIZED });
      }
  
      const success = await transferMoney(fromAccountId, toAccountId, amount);
      if (success) {
        res.status(200).json({ message: CONSTANTS.errorMessage.TRANSCTION_SUCCESS });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}