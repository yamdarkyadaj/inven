"use client"

import { formatCurrency } from "@/lib/utils"
import { useCallback, useEffect, useState } from "react"
import { getWareHouseId } from "./get-werehouseId"
import axios from "axios"

// Define interfaces from the original code
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
  paid?: number // Legacy support
  paymentMethod?: string // Legacy support
}

interface ReceiptSettings {
  companyName: string
  businessName: string
  address: string
  city: string
  state: string
  country: string
  phone: string
  email: string
  website: string
  receiptTitle?: string
  headerMessage?: string
  footerMessage?: string
  showLogo?: boolean
  logoUrl?: string
  showQrCode?: boolean
  qrCodeContent?: string
  customQrContent?: string
  showCustomerInfo?: boolean
  showCashierInfo?: boolean
  showBalance?: boolean
  showTimestamp?: boolean
  showItemNumbers?: boolean
  paperSize?: "57mm" | "80mm" | "A4"
  fontSize?: "small" | "normal" | "large"
  lineSpacing?: "compact" | "normal" | "wide"
  fontFamily?: "monospace" | "sans-serif" | "serif"
  autoPrint?: boolean
  language?: string
  currencySymbol?: string
}

// --- Default Settings (Moved outside the hook) ---
const DEFAULT_SETTINGS: ReceiptSettings = {
  companyName: "YOUR COMPANY NAME",
  businessName: "",
  address: "123 Business Street",
  city: "City",
  state: "State",
  country: "Country",
  phone: "(555) 123-4567",
  email: "contact@yourcompany.com",
  website: "www.yourcompany.com",
  receiptTitle: "SALES INVOICE",
  headerMessage: "",
  footerMessage: "Thank you for your business!",
  showLogo: false,
  logoUrl: "",
  showQrCode: false,
  qrCodeContent: "website",
  customQrContent: "",
  showCustomerInfo: true,
  showCashierInfo: true,
  showBalance: true,
  showTimestamp: true,
  showItemNumbers: true,
  paperSize: "80mm",
  fontSize: "normal",
  lineSpacing: "normal",
  fontFamily: "monospace",
  autoPrint: false,
  language: "en",
  currencySymbol: `${formatCurrency(0)[0]}`,
}

// --- Style Maps for Readability ---
const FONT_SIZES = {
  "57mm": { small: "9px", normal: "10px", large: "11px" },
  "80mm": { small: "10px", normal: "12px", large: "14px" },
  A4: { small: "12px", normal: "14px", large: "16px" },
}

const LINE_HEIGHTS = {
  "57mm": { small: "11px", normal: "12px", large: "13px" },
  "80mm": { small: "12px", normal: "14px", large: "16px" },
  A4: { small: "14px", normal: "18px", large: "22px" },
}

export function usePrintReceipt() {
  const warehousesId = getWareHouseId()
  const [settings, setSettings] = useState<ReceiptSettings>(DEFAULT_SETTINGS)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // --- Fetches settings once on mount ---
  useEffect(() => {
    if (!warehousesId) {
      setIsLoading(false)
      return
    }

    const fetchSettings = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await axios.get(`/api/receipt?warehousesId=${warehousesId}`)
        if (response.data) {
          setSettings(prevSettings => ({ ...prevSettings, ...response.data }))
        }
      } catch (err) {
        console.error("Error fetching receipt settings:", err)
        setError("Could not load receipt settings. Using defaults.")
      } finally {
        setIsLoading(false)
      }
    }

    fetchSettings()
  }, [warehousesId])

  const printReceipt = useCallback(
    async (data: ReceiptData, paperWidth?: "57mm" | "80mm" | "A4") => {
      if (isLoading) {
        alert("Receipt settings are still loading. Please wait a moment.")
        return
      }
      if (error) {
        alert(error)
      }

      const printWindow = window.open("", "_blank")
      if (!printWindow) {
        alert("Could not open print window. Please disable your pop-up blocker.")
        return
      }

      try {
        const effectivePaperWidth = paperWidth || settings.paperSize || "80mm"
        
        // --- HTML Generation ---
        const html = generateReceiptHtml(data, settings, effectivePaperWidth)

        printWindow.document.write(html)
        printWindow.document.close()

        printWindow.onload = () => {
          setTimeout(() => {
            printWindow.print()
            if (settings.autoPrint) {
              setTimeout(() => printWindow.close(), 500)
            }
          }, 250)
        }
      } catch (e) {
        console.error("Error generating or printing receipt:", e)
        alert("An unexpected error occurred while printing.")
        printWindow.close()
      }
    },
    [settings, isLoading, error]
  )

  return { printReceipt, isLoading, error }
}


// --- HTML Generation Logic ---
function generateReceiptHtml(data: ReceiptData, settings: ReceiptSettings, paperSize: "57mm" | "80mm" | "A4") {
    if (paperSize === 'A4') {
        return generateA4Invoice(data, settings);
    }
    return generateThermalReceipt(data, settings, paperSize);
}

// --- A4 INVOICE HTML (UPDATED) ---
function generateA4Invoice(data: ReceiptData, settings: ReceiptSettings) {
    const primaryColor = "#0d47a1"; // A deep blue
    const secondaryColor = "#e3f2fd"; // A light blue for backgrounds
    const fontColor = "#333";
    const dangerColor = "#d32f2f"; // For balance due

    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Invoice - ${data.invoiceNo}</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
        <style>
          @page { size: 200mm 287mm; margin: 0; }
          body {
            font-family: 'Roboto', sans-serif;
            font-size: 12px;
            line-height: 1.6;
            color: ${fontColor};
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
          .invoice-container {
            width: 210mm;
            min-height: 297mm;
            margin: auto;
            background: white;
            padding: 20mm;
            box-sizing: border-box;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
          }
          .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            border-bottom: 4px solid ${primaryColor};
            padding-bottom: 20px;
            margin-bottom: 20px;
          }
          .header .company-details { max-width: 50%; }
          .header .company-name { font-size: 28px; font-weight: 700; color: ${primaryColor}; margin: 0; }
          .header .company-address { font-size: 12px; line-height: 1.5; }
          .header .invoice-title-section { text-align: right; }
          .header .invoice-title { font-size: 48px; font-weight: 700; color: ${primaryColor}; margin: 0; }
          .header .invoice-meta { font-size: 12px; }
          .billing-info { display: flex; justify-content: space-between; margin-bottom: 30px; }
          .billing-box { width: 48%; }
          .billing-box .title { background-color: ${primaryColor}; color: white; padding: 5px 10px; font-weight: 700; font-size: 14px; }
          .billing-box .content { padding: 10px; border: 1px solid #ddd; border-top: none; }
          .items-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
          .items-table thead { background-color: ${primaryColor}; color: white; }
          .items-table th { padding: 12px; text-align: left; font-weight: 700; }
          .items-table td { padding: 12px; border-bottom: 1px solid #ddd; }
          .items-table tbody tr:last-child td { border-bottom: 2px solid ${primaryColor}; }
          .items-table .align-right { text-align: right; }
          
          /* --- MODIFIED & NEW STYLES --- */
          .summary-and-payment-section {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-top: 30px;
          }
          .notes {
            width: 50%;
          }
          .financial-summary {
            width: 45%;
          }
          .totals {
            width: 100%;
            background-color: ${secondaryColor};
            padding: 20px;
            box-sizing: border-box;
          }
          .totals .total-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            font-size: 14px;
          }
          .totals .grand-total {
            font-weight: 700;
            font-size: 18px;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 2px solid ${primaryColor};
          }
          .payment-details {
            width: 100%;
            background-color: #f9f9f9;
            padding: 20px;
            margin-top: 20px;
            box-sizing: border-box;
            border: 1px solid #eee;
          }
          .payment-details h3 {
            margin-top: 0;
            padding-bottom: 10px;
            border-bottom: 1px solid #ddd;
            font-size: 16px;
            color: ${primaryColor};
            font-weight: 700;
          }
          .payment-details .total-line {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 14px;
          }
          .payment-details .total-paid {
            font-weight: bold;
            border-top: 1px solid #ccc;
            padding-top: 8px;
            margin-top: 8px;
          }
          .payment-details .balance-due {
            font-weight: 700;
            font-size: 18px;
            color: ${dangerColor};
          }
          .footer {
            text-align: center;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
            font-size: 11px;
            color: #777;
          }
        </style>
      </head>
      <body>
        <div class="invoice-container">
          <!-- Header -->
          <div class="header">
            <div class="company-details">
              ${settings.showLogo && settings.logoUrl ? `<img src="${settings.logoUrl}" alt="Logo" style="max-width: 150px; margin-bottom: 15px;" />` : ''}
              <h1 class="company-name">${settings.companyName}</h1>
              <div class="company-address">
                ${settings.address}<br>
                ${settings.city}, ${settings.state} ${settings.country}<br>
                Phone No: ${settings.phone}<br>
                Email: ${settings.email}
              </div>
            </div>
            <div class="invoice-title-section">
              <h2 class="invoice-title">INVOICE</h2>
              <div class="invoice-meta">
                <div><strong>Invoice :</strong> ${data.invoiceNo}</div>
                <div><strong>Date:</strong> ${data.date}</div>
              </div>
            </div>
          </div>

          <!-- Billing Info -->
          <div class="billing-info">
            <div class="billing-box">
              <div class="title">BILL TO</div>
              <div class="content">
                <strong>${data.customer}</strong><br>
              </div>
            </div>
          </div>

          <!-- Items Table -->
          <table class="items-table">
            <thead>
              <tr>
                <th>ITEM NAME</th>
                <th class="align-right">QTY</th>
                <th class="align-right">UNIT PRICE</th>
                <th class="align-right">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              ${data.items.map(item => `
                <tr>
                  <td>${item.name}</td>
                  <td class="align-right">${item.quantity}</td>
                  <td class="align-right">${formatCurrency(item.price)}</td>
                  <td class="align-right">${formatCurrency(item.total)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>

          <!-- MODIFIED SUMMARY & PAYMENT SECTION -->
          <div class="summary-and-payment-section">
            <div class="notes">
              <strong>Notes:</strong>
              <p>${settings.footerMessage}</p>
            </div>
            <div class="financial-summary">
              <div class="totals">
                <div class="total-line">
                  <span>Subtotal</span>
                  <span>${formatCurrency(data.subtotal)}</span>
                </div>
                <div class="total-line">
                  <span>Tax</span>
                  <span>${formatCurrency(data.tax)}</span>
                </div>
                ${data.discount > 0 ? `
                  <div class="total-line">
                    <span>Discount</span>
                    <span>-${formatCurrency(data.discount)}</span>
                  </div>
                ` : ''}
                <div class="total-line grand-total">
                  <span>TOTAL</span>
                  <span>${formatCurrency(data.total)}</span>
                </div>
              </div>

              <!-- NEW PAYMENT DETAILS SECTION -->
              <div class="payment-details">
                <h3>Payment Details</h3>
                ${(data.paymentMethods && data.paymentMethods.length > 0)
                  ? data.paymentMethods.map(pm => `
                      <div class="total-line">
                        <span>${pm.method.replace(/_/g, ' ')}:</span>
                        <span>${formatCurrency(pm.amount)}</span>
                      </div>`
                    ).join("")
                  : ''
                }
                <div class="total-line total-paid">
                  <span>Total Paid:</span>
                  <span>${formatCurrency(data.totalPaid || data.paid || 0)}</span>
                </div>
                ${settings.showBalance && typeof data.balance === 'number' && data.balance > 0 ? `
                  <div class="total-line balance-due">
                    <span>Balance Due:</span>
                    <span>${formatCurrency(data.balance)}</span>
                  </div>
                ` : ''}
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="footer">
            <p>If you have any questions about this invoice, please contact us.</p>
            <p>${settings.companyName} | ${settings.website}</p>
          </div>
        </div>
      </body>
    </html>
    `;
}


// --- THERMAL RECEIPT HTML (for 57mm and 80mm) ---
function generateThermalReceipt(data: ReceiptData, settings: ReceiptSettings, paperSize: "57mm" | "80mm") {
    const styles = getReceiptStyles(paperSize, settings);
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Receipt - ${data.invoiceNo}</title>
        <style>
          @page { size: ${styles.width} auto; margin: 0; }
          body { 
            font-family: ${styles.fontFamily}; 
            font-size: ${styles.fontSize}; 
            line-height: ${styles.adjustedLineHeight};
            width: ${styles.width}; 
            margin: auto; 
            padding: 8px; 
            box-sizing: border-box; 
          }
          .header, .totals, .payment-section, .footer { text-align: center; border-top: 1px dashed #666; padding-top: 8px; margin-top: 8px; }
          .header { border-top: none; padding-top: 0; margin-top: 0; }
          .company-name { font-weight: bold; font-size: 1.4em; }
          .total-line { display: flex; justify-content: space-between; margin: 2px 0; }
          .grand-total { font-weight: bold; border-top: 1px solid #000; padding-top: 4px; margin-top: 4px; }
          .item-header { font-weight: bold; }
          .item-details { display: flex; justify-content: space-between; }
          .footer { font-size: 0.8em; color: #666; }
        </style>
      </head>
      <body>
        <div class="header">
          ${settings.showLogo && settings.logoUrl ? `<img src="${settings.logoUrl}" alt="Logo" style="max-height: 40px; margin-bottom: 8px;" />` : ""}
          <div class="company-name">${settings.companyName}</div>
          ${settings.businessName ? `<div>${settings.businessName}</div>` : ""}
          <div style="font-size: 0.8em; margin-top: 4px;">
            <div>${settings.address}, ${settings.city}, ${settings.state}</div>
            ${settings.phone ? `<div>Phone: ${settings.phone}</div>` : ""}
          </div>
        </div>

        <div class="receipt-title" style="text-align: center; font-weight: bold; margin: 8px 0; border-bottom: 1px dashed #666; padding-bottom: 8px;">
          ${settings.receiptTitle || "SALES INVOICE"}
        </div>
        
        <div class="invoice-info" style="margin-bottom: 8px;">
          <div><strong>Invoice:</strong> ${data.invoiceNo}</div>
          <div><strong>Date:</strong> ${data.date} ${data.time}</div>
          ${settings.showCustomerInfo ? `<div><strong>Customer:</strong> ${data.customer}</div>` : ""}
          ${settings.showCashierInfo ? `<div><strong>Cashier:</strong> ${data.cashier}</div>` : ""}
        </div>

        <div class="items">
          <div style="border-top: 1px dashed #666; border-bottom: 1px dashed #666; padding: 4px 0; margin-bottom: 8px; font-weight: bold;">ITEMS</div>
          ${data.items.map((item, index) => `
            <div class="item" style="margin-bottom: 4px;">
              <div class="item-header">${settings.showItemNumbers ? `${index + 1}. ` : ""}${item.name}</div>
              <div class="item-details">
                <span>${item.quantity} x ${formatCurrency(item.price)}</span>
                <span>${formatCurrency(item.total)}</span>
              </div>
            </div>
          `).join("")}
        </div>

        <div class="totals">
          <div class="total-line"><span>Subtotal:</span><span>${formatCurrency(data.subtotal)}</span></div>
          ${data.discount > 0 ? `<div class="total-line"><span>Discount:</span><span>-${formatCurrency(data.discount)}</span></div>` : ""}
          <div class="total-line"><span>Tax:</span><span>${formatCurrency(data.tax)}</span></div>
          <div class="total-line grand-total"><span>TOTAL:</span><span>${formatCurrency(data.total)}</span></div>
        </div>
        
        <div class="payment-section">
          <div style="font-weight: bold; margin-bottom: 4px;">PAYMENT</div>
          ${(data.paymentMethods && data.paymentMethods.length > 0)
            ? data.paymentMethods.map(pm => `
                <div class="total-line">
                  <span>${pm.method.replace("_", " ")}:</span>
                  <span>${formatCurrency(pm.amount)}</span>
                </div>`
              ).join("")
            : `<div class="total-line">
                  <span>${data.paymentMethod || "Cash"}:</span>
                  <span>${formatCurrency(data.paid || data.totalPaid || 0)}</span>
                </div>`
          }
          <div class="total-line" style="font-weight: bold; margin-top: 8px;">
            <span>Total Paid:</span>
            <span>${formatCurrency(data.paid || data.totalPaid || 0)}</span>
          </div>
          ${settings.showBalance && data.balance && data.balance !== 0 ? `
            <div class="total-line"><span>Balance:</span><span>${formatCurrency(Math.abs(data.balance))}</span></div>
          ` : ""}
        </div>
        
        <div class="footer">
          ${settings.footerMessage ? `<div style="font-weight: bold; margin-top: 4px;">${settings.footerMessage}</div>` : ""}
          ${settings.showTimestamp ? `<div style="margin-top: 8px;">Generated: ${new Date().toLocaleString()}</div>` : ""}
        </div>
      </body>
    </html>
    `;
}

// Helper function to calculate styles for thermal receipts
function getReceiptStyles(paperSize: "57mm" | "80mm", settings: ReceiptSettings) {
  const width = paperSize;
  const fontSize = FONT_SIZES[paperSize][settings.fontSize || "normal"];
  const lineHeight = LINE_HEIGHTS[paperSize][settings.fontSize || "normal"];
  
  let spacingMultiplier = 1.0;
  if (settings.lineSpacing === "compact") spacingMultiplier = 0.8;
  if (settings.lineSpacing === "wide") spacingMultiplier = 1.2;
  const adjustedLineHeight = `${parseFloat(lineHeight) * spacingMultiplier}px`;

  const fontFamily = 
    settings.fontFamily === "sans-serif" ? "Arial, sans-serif" :
    settings.fontFamily === "serif" ? "Times, serif" :
    "'Courier New', monospace";
  
  return { width, fontSize, adjustedLineHeight, fontFamily, paperSize };
}
