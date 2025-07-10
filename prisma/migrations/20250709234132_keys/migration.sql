/*
  Warnings:

  - You are about to drop the column `discount` on the `Sale` table. All the data in the column will be lost.
  - Added the required column `invoiceNo` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subTotal` to the `Sale` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoiceNo` to the `SaleItem` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "selectedCustomerId" TEXT NOT NULL,
    "taxRate" REAL NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "notes" TEXT,
    "amountPaid" REAL,
    "grandTotal" REAL NOT NULL,
    "subTotal" REAL NOT NULL,
    "paidAmount" REAL NOT NULL,
    "balance" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "warehousesId" TEXT,
    "invoiceNo" TEXT NOT NULL,
    CONSTRAINT "Sale_selectedCustomerId_fkey" FOREIGN KEY ("selectedCustomerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Sale_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Sale" ("amountPaid", "balance", "createdAt", "grandTotal", "id", "notes", "paidAmount", "paymentMethod", "selectedCustomerId", "taxRate", "warehousesId") SELECT "amountPaid", "balance", "createdAt", "grandTotal", "id", "notes", "paidAmount", "paymentMethod", "selectedCustomerId", "taxRate", "warehousesId" FROM "Sale";
DROP TABLE "Sale";
ALTER TABLE "new_Sale" RENAME TO "Sale";
CREATE TABLE "new_SaleItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleId" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "selectedPrice" REAL NOT NULL,
    "priceType" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "discount" REAL NOT NULL,
    "total" REAL NOT NULL,
    "warehousesId" TEXT,
    CONSTRAINT "SaleItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("barcode") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SaleItem" ("discount", "id", "price", "priceType", "productId", "productName", "quantity", "saleId", "selectedPrice", "total", "warehousesId") SELECT "discount", "id", "price", "priceType", "productId", "productName", "quantity", "saleId", "selectedPrice", "total", "warehousesId" FROM "SaleItem";
DROP TABLE "SaleItem";
ALTER TABLE "new_SaleItem" RENAME TO "SaleItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
