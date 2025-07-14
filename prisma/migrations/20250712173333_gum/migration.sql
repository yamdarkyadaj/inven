/*
  Warnings:

  - You are about to drop the column `notes` on the `PaymentMethod` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PaymentMethod" (
    "is" TEXT NOT NULL PRIMARY KEY,
    "method" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "warehousesId" TEXT,
    "saleId" TEXT,
    CONSTRAINT "PaymentMethod_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PaymentMethod_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("invoiceNo") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PaymentMethod" ("amount", "is", "method", "saleId", "warehousesId") SELECT "amount", "is", "method", "saleId", "warehousesId" FROM "PaymentMethod";
DROP TABLE "PaymentMethod";
ALTER TABLE "new_PaymentMethod" RENAME TO "PaymentMethod";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
