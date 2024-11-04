import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //enter data
  await prisma.user.create({
    data: {
      email: "user99@example.com",
      name: "user9",
    },
  });
}

main()
  .then(async () => {
    console.log("All  Done");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
