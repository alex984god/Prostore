import { PrismaClient } from './prisma-client/index.js';
import sampleData from "../db/sample-data.js";

const prisma = new PrismaClient();

async function main() {
    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });
    
    console.log("Database seeded successfully");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());