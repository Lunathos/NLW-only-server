import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log: ['query'] // A cada operação, log!
});