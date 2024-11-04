import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: [`info`, `query`, `error`, `warn`] });

async function main() {
  const users = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
    const user1 = await prisma.user.findUnique({
      where: {
        id: 9,
      },
      include: {
        posts: true,
      },
    });
  console.log(users[0] , user1);
  
}

main()
  .then(async () => {
    console.log("got the thing");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
