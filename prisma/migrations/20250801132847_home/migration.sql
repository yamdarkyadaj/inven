-- CreateTable
CREATE TABLE "BalancePayment" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "saleId" TEXT,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentMethod" TEXT NOT NULL,
    "receiptNo" TEXT NOT NULL,
    "notes" TEXT,
    "warehousesId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "sync" BOOLEAN NOT NULL DEFAULT false,
    "syncedAt" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "BalancePayment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BalancePayment_receiptNo_key" ON "BalancePayment"("receiptNo");

-- AddForeignKey
ALTER TABLE "BalancePayment" ADD CONSTRAINT "BalancePayment_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BalancePayment" ADD CONSTRAINT "BalancePayment_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("invoiceNo") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BalancePayment" ADD CONSTRAINT "BalancePayment_warehousesId_fkey" FOREIGN KEY ("warehousesId") REFERENCES "Warehouses"("warehouseCode") ON DELETE SET NULL ON UPDATE CASCADE;
