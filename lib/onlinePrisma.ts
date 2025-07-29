// lib/prisma.ts
import { PrismaClient } from "@/prisma/generated/online";

declare global {
  // This allows reuse of the PrismaClient instance in development
  var onlinePrisma: PrismaClient | undefined;
}

const onlinePrisma = globalThis.onlinePrisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.onlinePrisma = onlinePrisma;

export default onlinePrisma;
