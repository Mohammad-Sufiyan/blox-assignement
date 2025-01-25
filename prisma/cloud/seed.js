const { PrismaClient: PrismaCloudClient } = require('../generated/cloud');

// Initialize Prisma clients
const prismaCloud = new PrismaCloudClient();

async function main() {
  
  // Seed Database 2
  console.log("Seeding Database 2...");
  await prismaCloud.sampletable.createMany({
    data: [
      { name: "user", value: "pass", address: {
        city: "Thane",
        adress2: "sjd djsdf",
        country: "India",
        pincode: "400612",
        address1: "sdhbds jsdjk"
      }},
      { name: "user", value: "pass", address: {
        city: "Thane",
        adress2: "sjd djsdf",
        country: "India",
        pincode: "400612",
        address1: "sdhbds jsdjk"
      } },
    ],
  });
  await prismaCloud.user.createMany({
    data: [
      { username: "user1", password: "password1", email: "user1@example.com" },
      { username: "user2", password: "password2", email: "user2@example.com" },
    ],
  });
  await prismaCloud.bank.createMany({
    data: [
      { name: "Bank C" },
      { name: "Bank D" },
    ],
  });

  await prismaCloud.account.createMany({
    data: [
      { balance: 500, userId: 1, bankId: 1 },
      { balance: 1500, userId: 2, bankId: 2 },
    ],
  });

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaCloud.$disconnect();
  });
