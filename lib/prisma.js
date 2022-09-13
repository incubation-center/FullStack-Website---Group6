import { PrismaClient } from '@prisma/client';


export let prisma;

if (typeof window === 'undefined') {
  if (process.env['NODE_ENV'] === 'production') {
    prisma = new PrismaClient({log: ['query']});
  } else {
    if (!global.prisma) {
      global.prisma = new PrismaClient({log: ['query']});
    }
    prisma = global.prisma;
  }
}

/*
export const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['error'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
 */
