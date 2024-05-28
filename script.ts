import { PrismaClient } from "@prisma/client/extension";
const prisma = new PrismaClient();

async function main() {
  await prisma.employees.deleteMany();
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
