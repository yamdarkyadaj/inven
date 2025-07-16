/*
  Warnings:

  - Changed the type of `priceType` on the `PurchaseItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `priceType` on the `SaleItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `type` on the `Supplier` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "PurchaseItem" DROP COLUMN "priceType",
ADD COLUMN     "priceType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SaleItem" DROP COLUMN "priceType",
ADD COLUMN     "priceType" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" DROP COLUMN "type",
ADD COLUMN     "type" TEXT NOT NULL;
