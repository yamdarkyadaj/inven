/*
  Warnings:

  - Made the column `companyName` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "email" TEXT,
    "address" TEXT,
    "warehousesId" TEXT NOT NULL,
    CONSTRAINT "Customer_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Customer" ("address", "companyName", "email", "id", "name", "type", "warehousesId") SELECT "address", "companyName", "email", "id", "name", "type", "warehousesId" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
