/*
  Warnings:

  - A unique constraint covering the columns `[invoiceNo]` on the table `Sale` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleId" TEXT NOT NULL,
    "productId" TEXT,
    "productName" TEXT NOT NULL,
    "invoiceNo" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "selectedPrice" REAL NOT NULL,
    "priceType" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "discount" REAL NOT NULL,
    "total" REAL NOT NULL,
    "warehousesId" TEXT,
    CONSTRAINT "SaleItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("invoiceNo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("barcode") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SaleItem" ("discount", "id", "invoiceNo", "price", "priceType", "productId", "productName", "quantity", "saleId", "selectedPrice", "total", "warehousesId") SELECT "discount", "id", "invoiceNo", "price", "priceType", "productId", "productName", "quantity", "saleId", "selectedPrice", "total", "warehousesId" FROM "SaleItem";
DROP TABLE "SaleItem";
ALTER TABLE "new_SaleItem" RENAME TO "SaleItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Sale_invoiceNo_key" ON "Sale"("invoiceNo");
