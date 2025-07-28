/*
  Warnings:

  - Added the required column `taxRate` to the `Sale_online` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sale_online" ADD COLUMN     "taxRate" DOUBLE PRECISION NOT NULL;
