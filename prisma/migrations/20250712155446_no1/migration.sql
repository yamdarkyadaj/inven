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
CREATE TABLE "Sale" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "selectedCustomerId" TEXT,
    "taxRate" REAL NOT NULL,
    "subTotal" REAL NOT NULL,
    "paymentMethod" TEXT NOT NULL,
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

-- CreateTable
CREATE TABLE "Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "warehousesId" TEXT,
    CONSTRAINT "Customer_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses" ("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SaleItem" (
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
CREATE UNIQUE INDEX "Sale_invoiceNo_key" ON "Sale"("invoiceNo");

-- CreateIndex
CREATE UNIQUE INDEX "Product_barcode_key" ON "Product"("barcode");
