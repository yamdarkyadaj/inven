import { NextResponse } from "next/server";
import pMap from "p-map";

import onlinePrisma from "@/lib/onlinePrisma";
import offlinePrisma from "@/lib/oflinePrisma";

export async function POST() {
  try {
    // Warehouses
    const warehouses = await onlinePrisma.warehouses_online.findMany();
    await pMap(warehouses, async (data) => {
      await offlinePrisma.warehouses.upsert({
        where: { warehouseCode: data.warehouseCode },
        update: { ...data, syncedAt: new Date() },
        create: { ...data, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // Users
    const users = await onlinePrisma.users_online.findMany();
    await pMap(users, async (data) => {
      const { warehouses_onlineId: warehousesId, ...rest } = data;
      await offlinePrisma.users.upsert({
        where: { userName: data.userName },
        update: { ...rest, warehousesId, syncedAt: new Date() },
        create: { ...rest, warehousesId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // ReceiptSettings
    const receiptSettings = await offlinePrisma.receiptSettings.findMany();
    await pMap(receiptSettings, async (data) => {
      const { warehousesId: warehouses_onlineId, ...rest } = data;
      await onlinePrisma.receiptSettings_online.upsert({
        where: { warehouses_onlineId: data.warehousesId },
        update: { ...rest, warehouses_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // Products
    const products = await offlinePrisma.product.findMany({ where: { sync: false } });
    await pMap(
      products,
      async (data) => {
        const { warehousesId: warehouses_onlineId, ...rest } = data;
        await onlinePrisma.product_online.upsert({
          where: { id: data.id },
          update: { ...rest, warehouses_onlineId, syncedAt: new Date() },
          create: { ...rest, warehouses_onlineId, syncedAt: new Date() },
        });
      },
      { concurrency: 3 } // 👈 only 3 upserts at once to avoid pool exhaustion
    );

    // Customers
    const customers = await offlinePrisma.customer.findMany({ where: { sync: false } });
    await pMap(customers, async (data) => {
      const { warehousesId: warehouses_onlineId, ...rest } = data;
      await onlinePrisma.customer_online.upsert({
        where: { id: data.id },
        update: { ...rest, warehouses_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // Suppliers
    const suppliers = await offlinePrisma.supplier.findMany({ where: { sync: false } });
    await pMap(suppliers, async (data) => {
      const { warehousesId: warehouses_onlineId, ...rest } = data;
      await onlinePrisma.supplier_online.upsert({
        where: { id: data.id },
        update: { ...rest, warehouses_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // Sales
    const sales = await offlinePrisma.sale.findMany({ where: { sync: false } });
    await pMap(sales, async (data) => {
      const { warehousesId: warehouses_onlineId, selectedCustomerId: customer_onlineId, ...rest } = data;
      await onlinePrisma.sale_online.upsert({
        where: { invoiceNo: data.invoiceNo },
        update: { ...rest, warehouses_onlineId, customer_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, customer_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // Purchases
    const purchases = await offlinePrisma.purchase.findMany({ where: { sync: false } });
    await pMap(purchases, async (data) => {
      const { warehousesId: warehouses_onlineId, supplierId: supplier_onlineId, ...rest } = data;
      await onlinePrisma.purchase_online.upsert({
        where: { referenceNo: data.referenceNo },
        update: { ...rest, warehouses_onlineId, supplier_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, supplier_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // SaleItems
    const saleItems = await offlinePrisma.saleItem.findMany({ where: { sync: false } });
    await pMap(saleItems, async (data) => {
      const { warehousesId: warehouses_onlineId, saleId: sale_onlineId, customerId: customer_onlineId, productId: product_onlineId, ...rest } = data;
      await onlinePrisma.saleItem_online.upsert({
        where: { id: data.id },
        update: { ...rest, warehouses_onlineId, sale_onlineId, product_onlineId, customer_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, sale_onlineId, product_onlineId, customer_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // PurchaseItems
    const purchaseItems = await offlinePrisma.purchaseItem.findMany({ where: { sync: false } });
    await pMap(purchaseItems, async (data) => {
      const { warehousesId: warehouses_onlineId, purchaseId: purchase_onlineId, productId: product_onlineId, ...rest } = data;
      await onlinePrisma.purchaseItem_online.upsert({
        where: { id: data.id },
        update: { ...rest, warehouses_onlineId, product_onlineId, purchase_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, product_onlineId, purchase_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    // PaymentMethods
    const paymentMethods = await offlinePrisma.paymentMethod.findMany({ where: { sync: false } });
    await pMap(paymentMethods, async (data) => {
      const { warehousesId: warehouses_onlineId, saleId: sale_onlineId, ...rest } = data;
      await onlinePrisma.paymentMethod_online.upsert({
        where: { id: data.id },
        update: { ...rest, warehouses_onlineId, sale_onlineId, syncedAt: new Date() },
        create: { ...rest, warehouses_onlineId, sale_onlineId, syncedAt: new Date() },
      });
    }, { concurrency: 3 });

    return NextResponse.json({ status: 200, message: "Sync completed successfully." });
  } catch (error) {
    console.error("Sync error:", error);
    return NextResponse.json({ status: 500, message: "Sync failed", error });
  }
}
