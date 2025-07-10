/*
  Warnings:

  - Made the column `warehousesId` on table `Sale` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "selectedCustomerId" TEXT NOT NULL,
    "taxRate" REAL NOT NULL,
    "subTotal" REAL NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "notes" TEXT,
    "amountPaid" REAL,
    "grandTotal" REAL NOT NULL,
    "paidAmount" REAL NOT NULL,
    "balance" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehousesId" TEXT NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    CONSTRAINT "Sale_selectedCustomerId_fkey" FOREIGN KEY ("selectedCustomerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Sale" ("amountPaid", "balance", "createdAt", "grandTotal", "id", "invoiceNo", "notes", "paidAmount", "paymentMethod", "selectedCustomerId", "subTotal", "taxRate", "warehousesId") SELECT "amountPaid", "balance", "createdAt", "grandTotal", "id", "invoiceNo", "notes", "paidAmount", "paymentMethod", "selectedCustomerId", "subTotal", "taxRate", "warehousesId" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
