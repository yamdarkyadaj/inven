"use client"

interface ReceiptItem {
  name: string
  quantity: number
  price: number
  total: number
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
  paid: number
  balance: number
  paymentMethod: string
}

export function usePrintReceipt() {
  const printReceipt = (data: ReceiptData, paperWidth: "57mm" | "80mm" = "80mm") => {
    // Create a new window for printing
    const printWindow = window.open("", "_blank", "width=320,height=600")

    if (!printWindow) {
      alert("Please allow popups to print receipts")
      return
    }

    // Set dimensions based on paper width
    const dimensions = {
      "57mm": {
        width: "57mm",
        maxWidth: "216px", // 57mm = ~216px at 96dpi
        fontSize: "10px",
        lineHeight: "1.2",
        padding: "2mm",
      },
      "80mm": {
        width: "80mm",
        maxWidth: "302px", // 80mm = ~302px at 96dpi
        fontSize: "11px",
        lineHeight: "1.3",
        padding: "3mm",
      },
    }

    const dim = dimensions[paperWidth]

    // Create the HTML content for the receipt
    const receiptHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Receipt - ${data.invoiceNo}</title>
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
            
            @page {
              size: ${dim.width} auto;
              margin: 0;
            }
            
            body {
              font-family: 'Courier New', monospace;
              font-size: ${dim.fontSize};
              line-height: ${dim.lineHeight};
              color: #000;
              background: white;
              padding: ${dim.padding};
              width: ${dim.width};
              max-width: ${dim.maxWidth};
              margin: 0 auto;
            }
            
            .receipt-container {
              width: 100%;
            }
            
            .text-center {
              text-align: center;
            }
            
            .text-right {
              text-align: right;
            }
            
            .text-left {
              text-align: left;
            }
            
            .font-bold {
              font-weight: bold;
            }
            
            .mb-1 {
              margin-bottom: 2px;
            }
            
            .mb-2 {
              margin-bottom: 4px;
            }
            
            .mb-3 {
              margin-bottom: 6px;
            }
            
            .mb-4 {
              margin-bottom: 8px;
            }
            
            .space-y-1 > * + * {
              margin-top: 2px;
            }
            
            .border-dashed {
              border-style: dashed;
              border-color: #000;
              border-width: 1px;
            }
            
            .border-t {
              border-top: 1px dashed #000;
            }
            
            .border-b {
              border-bottom: 1px dashed #000;
            }
            
            .pt-1 {
              padding-top: 2px;
            }
            
            .pt-2 {
              padding-top: 4px;
            }
            
            .pb-1 {
              padding-bottom: 2px;
            }
            
            .pb-2 {
              padding-bottom: 4px;
            }
            
            .flex {
              display: flex;
            }
            
            .justify-between {
              justify-content: space-between;
            }
            
            .items-center {
              align-items: center;
            }
            
            .truncate {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            
            .flex-1 {
              flex: 1;
            }
            
            .company-header {
              font-size: ${paperWidth === "57mm" ? "12px" : "14px"};
              font-weight: bold;
              margin-bottom: 2px;
            }
            
            .company-subtitle {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
              margin-bottom: 1px;
            }
            
            .company-details {
              font-size: ${paperWidth === "57mm" ? "7px" : "8px"};
            }
            
            .section-title {
              font-size: ${paperWidth === "57mm" ? "10px" : "11px"};
              font-weight: bold;
              text-align: center;
              padding: 2px 0;
              border-top: 1px dashed #000;
              border-bottom: 1px dashed #000;
              margin: 4px 0;
            }
            
            .invoice-details {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
            }
            
            .items-header {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
              font-weight: bold;
              border-top: 1px dashed #000;
              padding-top: 2px;
              margin-bottom: 2px;
            }
            
            .item-row {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
              margin-bottom: 1px;
            }
            
            .totals-section {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
              border-top: 1px dashed #000;
              padding-top: 2px;
              margin-top: 4px;
            }
            
            .qr-placeholder {
              display: inline-block;
              border: 1px solid #000;
              padding: ${paperWidth === "57mm" ? "4px" : "6px"};
              margin: 4px 0;
            }
            
            .qr-code {
              width: ${paperWidth === "57mm" ? "30px" : "40px"};
              height: ${paperWidth === "57mm" ? "30px" : "40px"};
              background: #f0f0f0;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: ${paperWidth === "57mm" ? "6px" : "7px"};
            }
            
            .footer {
              font-size: ${paperWidth === "57mm" ? "7px" : "8px"};
              text-align: center;
              border-top: 1px dashed #000;
              padding-top: 2px;
              margin-top: 4px;
            }
            
            .thank-you {
              font-size: ${paperWidth === "57mm" ? "8px" : "9px"};
              font-weight: bold;
              text-align: center;
              margin-top: 4px;
            }
            
            /* Specific layout for narrow receipts */
            ${
              paperWidth === "57mm"
                ? `
              .item-line {
                display: block;
                margin-bottom: 1px;
              }
              
              .item-name {
                display: block;
                font-weight: bold;
              }
              
              .item-details {
                display: flex;
                justify-content: space-between;
                font-size: 7px;
              }
            `
                : `
              .item-line {
                display: flex;
                justify-content: space-between;
                align-items: center;
              }
              
              .item-name {
                flex: 1;
                margin-right: 4px;
              }
              
              .item-qty {
                width: 20px;
                text-align: center;
              }
              
              .item-amount {
                width: 50px;
                text-align: right;
              }
            `
            }
            
            @media print {
              body {
                padding: 0;
                width: ${dim.width};
                max-width: none;
              }
              
              .receipt-container {
                max-width: none;
              }
              
              @page {
                size: ${dim.width} auto;
                margin: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="receipt-container">
            <!-- Header -->
            <div class="text-center mb-3">
              <div class="company-header">INVENTORY PRO</div>
              <div class="company-subtitle">Management System</div>
              <div class="company-details space-y-1">
                <div>123 Business Street</div>
                <div>Tel: 01010101010</div>
                <div>info@inventorypro.com</div>
              </div>
            </div>

            <!-- Invoice Title -->
            <div class="section-title">SALES INVOICE</div>

            <!-- Invoice Details -->
            <div class="invoice-details mb-3 space-y-1">
              <div class="flex justify-between">
                <span>SALES POINT:</span>
                <span>Store One</span>
              </div>
              <div class="flex justify-between">
                <span>CASHIER:</span>
                <span>${data.cashier}</span>
              </div>
              <div class="flex justify-between">
                <span>INVOICE NO:</span>
                <span>${data.invoiceNo}</span>
              </div>
              <div class="flex justify-between">
                <span>CUSTOMER:</span>
                <span>${data.customer}</span>
              </div>
              <div class="flex justify-between">
                <span>DATE:</span>
                <span>${data.date}</span>
              </div>
              <div class="flex justify-between">
                <span>TIME:</span>
                <span>${data.time}</span>
              </div>
            </div>

            <!-- Items Header -->
            <div class="items-header">
              ${
                paperWidth === "80mm"
                  ? `
                <div class="flex justify-between">
                  <span>ITEM</span>
                  <span>QTY</span>
                  <span>AMOUNT</span>
                </div>
              `
                  : `
                <div>ITEMS</div>
              `
              }
            </div>

            <!-- Items List -->
            <div class="mb-3">
              ${data.items
                .map(
                  (item) => `
                <div class="item-row">
                  ${
                    paperWidth === "80mm"
                      ? `
                    <div class="item-line">
                      <span class="item-name truncate">${item.name}</span>
                      <span class="item-qty">${item.quantity}</span>
                      <span class="item-amount">₦${item.total.toFixed(2)}</span>
                    </div>
                  `
                      : `
                    <div class="item-line">
                      <div class="item-name">${item.name}</div>
                      <div class="item-details">
                        <span>${item.quantity} x ₦${item.price.toFixed(2)}</span>
                        <span>₦${item.total.toFixed(2)}</span>
                      </div>
                    </div>
                  `
                  }
                </div>
              `,
                )
                .join("")}
            </div>

            <!-- Totals -->
            <div class="totals-section space-y-1">
              <div class="flex justify-between">
                <span>TOTAL:</span>
                <span>₦${data.subtotal.toFixed(2)}</span>
              </div>
              ${
                data.discount > 0
                  ? `
                <div class="flex justify-between">
                  <span>DISCOUNT:</span>
                  <span>₦${data.discount.toFixed(2)}</span>
                </div>
              `
                  : ""
              }
              ${
                data.tax > 0
                  ? `
                <div class="flex justify-between">
                  <span>TAX:</span>
                  <span>₦${data.tax.toFixed(2)}</span>
                </div>
              `
                  : ""
              }
              <div class="flex justify-between font-bold">
                <span>PAYABLE:</span>
                <span>₦${data.total.toFixed(2)}</span>
              </div>
              <div class="flex justify-between">
                <span>PAID:</span>
                <span>₦${data.paid.toFixed(2)}</span>
              </div>
              <div class="flex justify-between">
                <span>BALANCE:</span>
                <span>₦${data.balance.toFixed(2)}</span>
              </div>
              <div class="flex justify-between">
                <span>PAID VIA:</span>
                <span>${data.paymentMethod.toUpperCase()}</span>
              </div>
            </div>

            <!-- QR Code Placeholder -->
            <div class="text-center mb-3">
              <div class="qr-placeholder">
                <div class="qr-code">QR</div>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <div>Copyright © 2024 INVENTORY PRO</div>
              <div>Management System</div>
            </div>

            <!-- Thank You Message -->
            <div class="thank-you">THANK YOU FOR YOUR BUSINESS!</div>
          </div>
        </body>
      </html>
    `

    // Write the HTML to the new window
    printWindow.document.write(receiptHTML)
    printWindow.document.close()

    // Wait for the content to load, then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print()
        printWindow.close()
      }, 250)
    }
  }

  return { printReceipt }
}
