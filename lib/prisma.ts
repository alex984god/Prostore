import { PrismaClient } from '../prisma/prisma-client'

declare global {
  // allow global `prisma` in dev to avoid multiple instances
  var prisma: PrismaClient | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ["query"], // optional, for debugging
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;