const { PrismaClient: PrismaLocalClient } = require('../generated/local');

// Initialize Prisma clients
const prismaLocal = new PrismaLocalClient();

async function main() {
  // Seed Database 1
  console.log("Seeding Database 1...");
  await prismaLocal.sampletable.createMany({
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
  await prismaLocal.user.createMany({
    data: [
      { username: "user1", password: "password1", email: "user1@example.com" },
      { username: "user2", password: "password2", email: "user2@example.com" },
    ],
  });

  await prismaLocal.bank.createMany({
    data: [
      { name: "Bank A" },
      { name: "Bank B" },
    ],
  });

  await prismaLocal.account.createMany({
    data: [
      { balance: 1000, userId: 1, bankId: 1 },
      { balance: 2000, userId: 2, bankId: 2 },
    ],
  });

  
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prismaLocal.$disconnect();
  });
