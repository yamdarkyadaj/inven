-- CreateTable
CREATE TABLE "superAdmin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "lastLogin" DATETIME,
    "warehousesId" TEXT
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "warehousesId" TEXT,
    "lastLogin" DATETIME,
    CONSTRAINT "users_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Settings" (
    "setting_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "companyName" TEXT NOT NULL,
    "companyEmail" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "websiteURL" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "logoUrl" TEXT NOT NULL,
    "defaultCurrency" TEXT NOT NULL,
    "taxRate" INTEGER NOT NULL,
    "mode" TEXT NOT NULL,
    "itermsPerPage" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Warehouses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "warehouseCode" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "description" TEXT,
    "address" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "barcode" TEXT NOT NULL,
    "wholeSalePrice" REAL NOT NULL,
    "retailPrice" REAL NOT NULL,
    "cost" REAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "taxRate" INTEGER NOT NULL,
    "unit" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "warehousesId" TEXT,
    CONSTRAINT "Product_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "superAdmin_email_key" ON "superAdmin"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_userName_key" ON "users"("userName");

-- CreateIndex
CREATE UNIQUE INDEX "Warehouses_warehouseCode_key" ON "Warehouses"("warehouseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
