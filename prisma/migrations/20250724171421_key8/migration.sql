/*
  Warnings:

  - You are about to drop the column `warehousesId` on the `ReceiptSettings_online` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[warehouses_onlineId]` on the table `ReceiptSettings_online` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `warehouses_onlineId` to the `ReceiptSettings_online` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ReceiptSettings_online" DROP CONSTRAINT "ReceiptSettings_online_warehousesId_fkey";

-- DropIndex
DROP INDEX "ReceiptSettings_online_warehousesId_key";

-- AlterTable
ALTER TABLE "ReceiptSettings_online" DROP COLUMN "warehousesId",
ADD COLUMN     "warehouses_onlineId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ReceiptSettings_online_warehouses_onlineId_key" ON "ReceiptSettings_online"("warehouses_onlineId");

-- AddForeignKey
ALTER TABLE "ReceiptSettings_online" ADD CONSTRAINT "ReceiptSettings_online_warehouses_onlineId_fkey" FOREIGN KEY ("warehouses_onlineId") REFERENCES "Warehouses_online"("warehouseCode") ON DELETE RESTRICT ON UPDATE CASCADE;
