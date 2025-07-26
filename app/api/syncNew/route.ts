import { NextResponse } from "next/server";
import { PrismaClient as OfflinePrismaClient } from "@/prisma/generated/offline";
import { PrismaClient as OnlinePrismaClient } from "@/prisma/generated/online";

const offlineDb = new OfflinePrismaClient();
const onlineDb = new OnlinePrismaClient();

export async function POST() {
  try {
    // 1. superAdmin
    const superAdmins = await onlineDb.superAdmin_online.findMany({ where: { sync: false } });
    for (const data of superAdmins) {
      await offlineDb.superAdmin.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 2. Settings
    const settings = await offlineDb.settings.findMany({ where: { sync: false } });
    for (const data of settings) {
      await onlineDb.settings_online.upsert({
        where: { setting_id: data.setting_id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 3. Warehouses
    const warehouses = await onlineDb.warehouses_online.findMany({ where: { sync: false } });
    for (const data of warehouses) {
      await offlineDb.warehouses.upsert({
        where: { warehouseCode: data.warehouseCode },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 4. Users
    const users = await onlineDb.users_online.findMany({ where: { sync: false } });
    for (const data of users) {
      await offlineDb.users.upsert({
        where: { userName: data.userName },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 5. ReceiptSettings
    const receiptSettings = await offlineDb.receiptSettings.findMany({ where: { sync: false } });
    for (const data of receiptSettings) {
      await onlineDb.receiptSettings_online.upsert({
        where: { warehouses_onlineId: data.warehousesId },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 6. Products
    const products = await offlineDb.product.findMany({ where: { sync: false } });
    for (const data of products) {
      await onlineDb.product_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 7. Customers
    const customers = await offlineDb.customer.findMany({ where: { sync: false } });
    for (const data of customers) {
      await onlineDb.customer_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 8. Suppliers
    const suppliers = await offlineDb.supplier.findMany({ where: { sync: false } });
    for (const data of suppliers) {
      await onlineDb.supplier_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 9. Sales
    const sales = await offlineDb.sale.findMany({ where: { sync: false } });
    for (const data of sales) {
      await onlineDb.sale_online.upsert({
        where: { invoiceNo: data.invoiceNo },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 10. Purchases
    const purchases = await offlineDb.purchase.findMany({ where: { sync: false } });
    for (const data of purchases) {
      await onlineDb.purchase_online.upsert({
        where: { referenceNo: data.referenceNo },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 11. SaleItems
    const saleItems = await offlineDb.saleItem.findMany({ where: { sync: false } });
    for (const data of saleItems) {
      await onlineDb.saleItem_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 12. PurchaseItems
    const purchaseItems = await offlineDb.purchaseItem.findMany({ where: { sync: false } });
    for (const data of purchaseItems) {
      await onlineDb.purchaseItem_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    // 13. PaymentMethods
    const paymentMethods = await offlineDb.paymentMethod.findMany({ where: { sync: false } });
    for (const data of paymentMethods) {
      await onlineDb.paymentMethod_online.upsert({
        where: { id: data.id },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }

    return NextResponse.json({ status: "success", message: "Sync completed successfully." });
  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json({ status: "error", message: "Sync failed", error });
  }
}
