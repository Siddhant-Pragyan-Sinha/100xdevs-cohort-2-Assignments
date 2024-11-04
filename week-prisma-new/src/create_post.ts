import { PrismaClient } from "@prisma/client";
import { log } from "console";
const prisma = new PrismaClient();
async function main() {
  await prisma.post.create({
    data: {
      title: "for user 999999",
      content: "for user 99990",
      author: {
        connect: {
          id: 9,
        },
      },
    },
  });
}
main()
  .then(async () => {
    console.log("All done in post");

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
