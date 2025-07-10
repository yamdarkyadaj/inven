-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SaleItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "saleId" TEXT,
    "productId" TEXT,
    "productName" TEXT NOT NULL,
    "cost" REAL NOT NULL,
    "selectedPrice" REAL NOT NULL,
    "priceType" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "discount" REAL NOT NULL,
    "total" REAL NOT NULL,
    "profit" REAL NOT NULL,
    "warehousesId" TEXT,
    CONSTRAINT "SaleItem_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale" ("invoiceNo") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("barcode") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "SaleItem_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_SaleItem" ("cost", "discount", "id", "priceType", "productId", "productName", "profit", "quantity", "saleId", "selectedPrice", "total", "warehousesId") SELECT "cost", "discount", "id", "priceType", "productId", "productName", "profit", "quantity", "saleId", "selectedPrice", "total", "warehousesId" FROM "SaleItem";
DROP TABLE "SaleItem";
ALTER TABLE "new_SaleItem" RENAME TO "SaleItem";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
