import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => new PrismaClient();

// @ts-ignore
export const prisma = globalThis.prisma || prismaClientSingleton();

declare global {
  let prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  globalThis.prisma = prisma;
}
