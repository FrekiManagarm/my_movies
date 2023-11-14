// @ts-nocheck

import { PrismaClient } from '@prisma/client';

export const prisma: PrismaClient = new PrismaClient({
    log: process.env.NODE_ENV === "development"
    ? ['query', 'error', 'warn']
    : ['error'] 
});

if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma
}