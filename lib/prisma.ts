import { PrismaClient } from "@prisma/client";

const globalsForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalsForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalsForPrisma.prisma = prisma;
}

export default prisma;
