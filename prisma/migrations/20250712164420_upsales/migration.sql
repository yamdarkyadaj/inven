/*
  Warnings:

  - You are about to drop the column `paymentMethod` on the `Sale` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "PaymentMethod" (
    "is" TEXT NOT NULL PRIMARY KEY,
    "method" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "notes" TEXT,
    "warehousesId" TEXT,
    "saleId" TEXT,
    CONSTRAINT "PaymentMethod_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PaymentMethod_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("invoiceNo") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "selectedCustomerId" TEXT,
    "taxRate" REAL NOT NULL,
    "subTotal" REAL NOT NULL,
    "notes" TEXT,
    "amountPaid" REAL,
    "grandTotal" REAL NOT NULL,
    "paidAmount" REAL NOT NULL,
    "balance" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehousesId" TEXT,
    "invoiceNo" TEXT NOT NULL,
    CONSTRAINT "Sale_selectedCustomerId_fkey" FOREIGN KEY ("selectedCustomerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Sale_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sale" ("amountPaid", "balance", "createdAt", "grandTotal", "id", "invoiceNo", "notes", "paidAmount", "selectedCustomerId", "subTotal", "taxRate", "warehousesId") SELECT "amountPaid", "balance", "createdAt", "grandTotal", "id", "invoiceNo", "notes", "paidAmount", "selectedCustomerId", "subTotal", "taxRate", "warehousesId" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
CREATE UNIQUE INDEX "Sale_invoiceNo_key" ON "Sale"("invoiceNo");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
