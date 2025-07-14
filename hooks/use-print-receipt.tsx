"use client"

import { useCallback } from "react"

interface ReceiptItem {
  name: string
  quantity: number
  price: number
  total: number
}

interface PaymentMethod {
  id: string
  method: string
  amount: number
  reference?: string
  notes?: string
}

interface ReceiptData {
  invoiceNo: string
  date: string
  time: string
  customer: string
  cashier: string
  items: ReceiptItem[]
  subtotal: number
  discount: number
  tax: number
  total: number
  paymentMethods?: PaymentMethod[]
  totalPaid?: number
  balance?: number
  paid?: number
  paymentMethod?: string
}

export function usePrintReceipt() {
  const printReceipt = useCallback((data: ReceiptData, paperWidth: "57mm" | "80mm" = "80mm") => {
    const printWindow = window.open("", "_blank")
    if (!printWindow) return

    const width = paperWidth === "57mm" ? "57mm" : "80mm"
    const fontSize = paperWidth === "57mm" ? "10px" : "12px"
    const lineHeight = paperWidth === "57mm" ? "12px" : "14px"

    const formatPaymentMethods = () => {
      if (data.paymentMethods && data.paymentMethods.length > 0) {
        return data.paymentMethods
          .map(
            (pm) => `
          <div style="display: flex; justify-content: space-between; margin: 2px 0;">
            <span>${pm.method.charAt(0).toUpperCase() + pm.method.slice(1).replace("_", " ")}:</span>
            <span>$${pm.amount.toFixed(2)}</span>
          </div>
          ${pm.reference ? `<div style="font-size: 9px; color: #666; margin-left: 10px;">Ref: ${pm.reference}</div>` : ""}
        `,
          )
          .join("")
      }
      return `
        <div style="display: flex; justify-content: space-between;">
          <span>${data.paymentMethod || "Cash"}:</span>
          <span>$${(data.paid || data.totalPaid || 0).toFixed(2)}</span>
        </div>
      `
    }

    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Receipt - ${data.invoiceNo}</title>
          <style>
            @page {
              size: ${width} auto;
              margin: 0;
            }
            body {
              font-family: 'Courier New', monospace;
              font-size: ${fontSize};
              line-height: ${lineHeight};
              margin: auto;
              padding: 8px;
              width: ${width};
              box-sizing: border-box;
            }
            .header {
              text-align: center;
              border-bottom: 1px dashed #000;
              padding-bottom: 8px;
              margin-bottom: 8px;
            }
            .company-name {
              font-weight: bold;
              font-size: ${paperWidth === "57mm" ? "12px" : "14px"};
            }
            .invoice-info {
              margin-bottom: 8px;
              border-bottom: 1px dashed #000;
              padding-bottom: 8px;
            }
            .items {
              margin-bottom: 8px;
            }
            .item {
              margin-bottom: 4px;
            }
            .item-header {
              font-weight: bold;
            }
            .item-details {
              display: flex;
              justify-content: space-between;
              font-size: ${paperWidth === "57mm" ? "9px" : "10px"};
            }
            .totals {
              border-top: 1px dashed #000;
              padding-top: 8px;
              margin-top: 8px;
            }
            .total-line {
              display: flex;
              justify-content: space-between;
              margin: 2px 0;
            }
            .grand-total {
              font-weight: bold;
              border-top: 1px solid #000;
              padding-top: 4px;
              margin-top: 4px;
            }
            .payment-section {
              border-top: 1px dashed #000;
              padding-top: 8px;
              margin-top: 8px;
            }
            .footer {
              text-align: center;
              margin-top: 16px;
              padding-top: 8px;
              border-top: 1px dashed #000;
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
            }
            @media print {
              body { margin: auto; }
            }
          </style>
        </head>
        <body>
        
          <div class="header">
            <div class="company-name">YOUR COMPANY NAME</div>
            <div>123 Business Street</div>
            <div>City, State 12345</div>
            <div>Phone: (555) 123-4567</div>
          </div>

          <div class="invoice-info">
            <div><strong>Invoice:</strong> ${data.invoiceNo}</div>
            <div><strong>Date:</strong> ${data.date}</div>
            <div><strong>Time:</strong> ${data.time}</div>
            <div><strong>Customer:</strong> ${data.customer}</div>
            <div><strong>Cashier:</strong> ${data.cashier}</div>
          </div>

          <div class="items">
            <div style="border-bottom: 1px dashed #000; padding-bottom: 4px; margin-bottom: 8px;">
              <strong>ITEMS</strong>
            </div>
            ${data.items
              .map(
                (item) => `
              <div class="item">
                <div class="item-header">${item.name}</div>
                <div class="item-details">
                  <span>${item.quantity} x $${item.price.toFixed(2)}</span>
                  <span>$${item.total.toFixed(2)}</span>
                </div>
              </div>
            `,
              )
              .join("")}
          </div>

          <div class="totals">
            <div class="total-line">
              <span>Subtotal:</span>
              <span>$${data.subtotal.toFixed(2)}</span>
            </div>
            ${
              data.discount > 0
                ? `
            <div class="total-line">
              <span>Discount:</span>
              <span>-$${data.discount.toFixed(2)}</span>
            </div>
            `
                : ""
            }
            <div class="total-line">
              <span>Tax:</span>
              <span>$${data.tax.toFixed(2)}</span>
            </div>
            <div class="total-line grand-total">
              <span>TOTAL:</span>
              <span>$${data.total.toFixed(2)}</span>
            </div>
          </div>

          <div class="payment-section">
            <div style="font-weight: bold; margin-bottom: 4px;">PAYMENT</div>
            ${formatPaymentMethods()}
            <div class="total-line" style="font-weight: bold; margin-top: 8px;">
              <span>Total Paid:</span>
              <span>$${(data.totalPaid || data.paid || 0).toFixed(2)}</span>
            </div>
            ${
              (data.balance !== undefined ? data.balance : data.total - (data.totalPaid || data.paid || 0)) !== 0
                ? `
            <div class="total-line">
              <span>Balance:</span>
              <span>$${Math.abs(data.balance !== undefined ? data.balance : data.total - (data.totalPaid || data.paid || 0)).toFixed(2)}</span>
            </div>
            `
                : ""
            }
          </div>

          <div class="footer">
            <div>Thank you for your business!</div>
            <div>Please keep this receipt for your records</div>
            <div style="margin-top: 8px;">
              Generated on ${new Date().toLocaleString()}
            </div>
          </div>
        </body>
      </html>
    `

    printWindow.document.write(html)
    printWindow.document.close()

    // Wait for content to load then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }, [])

  return { printReceipt }
}
