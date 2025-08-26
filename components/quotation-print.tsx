"use client"

import { formatCurrency } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Printer } from "lucide-react"

interface QuotationPrintProps {
  quotation: {
    quotationNo: string
    selectedCustomer: {
      name: string
      email?: string
      phone: string
      address?: string
      type: string
    }
    quotationItems: Array<{
      productName: string
      selectedPrice: number
      priceType: string
      quantity: number
      discount: number
      total: number
      product?: {
        barcode?: string
        unit?: string
      }
    }>
    subTotal: number
    taxRate: number
    grandTotal: number
    validUntil?: string
    notes?: string
    createdAt: string
    warehouses?: {
      name: string
      address: string
      phone: string
      email: string
    }
  }
  companyInfo?: {
    name: string
    address: string
    phone: string
    email: string
    website?: string
  }
}

export function QuotationPrint({ quotation, companyInfo }: QuotationPrintProps) {
  const handlePrint = () => {
    const printContent = document.getElementById('quotation-print-content')
    if (!printContent) return

    const printWindow = window.open('', '_blank')
    if (!printWindow) return

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Quotation ${quotation.quotationNo}</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 0;
              padding: 20px;
              line-height: 1.4;
            }
            .header {
              text-align: center;
              border-bottom: 2px solid #000;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            .company-name {
              font-size: 24px;
              font-weight: bold;
              margin-bottom: 5px;
            }
            .company-details {
              font-size: 12px;
              color: #666;
            }
            .quotation-title {
              font-size: 20px;
              font-weight: bold;
              margin: 20px 0 10px 0;
            }
            .quotation-info {
              display: flex;
              justify-content: space-between;
              margin-bottom: 30px;
            }
            .customer-info, .quotation-details {
              width: 48%;
            }
            .section-title {
              font-weight: bold;
              margin-bottom: 10px;
              padding-bottom: 5px;
              border-bottom: 1px solid #ddd;
            }
            .info-row {
              margin-bottom: 5px;
            }
            .label {
              font-weight: bold;
              display: inline-block;
              width: 100px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
              text-align: left;
            }
            th {
              background-color: #f5f5f5;
              font-weight: bold;
            }
            .number {
              text-align: right;
            }
            .summary {
              margin-left: auto;
              width: 300px;
              margin-top: 20px;
            }
            .summary-row {
              display: flex;
              justify-content: space-between;
              padding: 5px 0;
            }
            .summary-total {
              border-top: 2px solid #000;
              font-weight: bold;
              font-size: 16px;
              padding-top: 10px;
            }
            .notes {
              margin-top: 30px;
              padding: 15px;
              background-color: #f9f9f9;
              border-left: 4px solid #007bff;
            }
            .footer {
              margin-top: 40px;
              text-align: center;
              font-size: 12px;
              color: #666;
              border-top: 1px solid #ddd;
              padding-top: 20px;
            }
            @media print {
              body { margin: 0; }
              .no-print { display: none !important; }
            }
          </style>
        </head>
        <body>
          ${printContent.innerHTML}
        </body>
      </html>
    `)

    printWindow.document.close()
    printWindow.focus()
    
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 250)
  }

  const calculateTaxAmount = () => {
    return (quotation.subTotal * quotation.taxRate) / 100
  }

  const company = companyInfo || quotation.warehouses || {
    name: "Your Company Name",
    address: "Company Address",
    phone: "Company Phone",
    email: "company@email.com"
  }

  return (
    <div>
      <Button onClick={handlePrint} className="no-print mb-4">
        <Printer className="h-4 w-4 mr-2" />
        Print Quotation
      </Button>

      <div id="quotation-print-content">
        {/* Header */}
        <div className="header">
          <div className="company-name">{company.name}</div>
          <div className="company-details">
            {company.address}<br />
            Phone: {company.phone} | Email: {company.email}
            {company.website && <span> | Website: {company.website}</span>}
          </div>
          <div className="quotation-title">QUOTATION</div>
        </div>

        {/* Quotation Info */}
        <div className="quotation-info">
          <div className="customer-info">
            <div className="section-title">BILL TO:</div>
            <div className="info-row">
              <span className="label">Name:</span>
              {quotation.selectedCustomer.name}
            </div>
            <div className="info-row">
              <span className="label">Phone:</span>
              {quotation.selectedCustomer.phone}
            </div>
            {quotation.selectedCustomer.email && (
              <div className="info-row">
                <span className="label">Email:</span>
                {quotation.selectedCustomer.email}
              </div>
            )}
            {quotation.selectedCustomer.address && (
              <div className="info-row">
                <span className="label">Address:</span>
                {quotation.selectedCustomer.address}
              </div>
            )}
            <div className="info-row">
              <span className="label">Type:</span>
              {quotation.selectedCustomer.type}
            </div>
          </div>

          <div className="quotation-details">
            <div className="section-title">QUOTATION DETAILS:</div>
            <div className="info-row">
              <span className="label">Quote #:</span>
              {quotation.quotationNo}
            </div>
            <div className="info-row">
              <span className="label">Date:</span>
              {new Date(quotation.createdAt).toLocaleDateString()}
            </div>
            {quotation.validUntil && (
              <div className="info-row">
                <span className="label">Valid Until:</span>
                {new Date(quotation.validUntil).toLocaleDateString()}
              </div>
            )}
          </div>
        </div>

        {/* Items Table */}
        <table>
          <thead>
            <tr>
              <th style={{width: '40%'}}>Product</th>
              <th style={{width: '15%'}}>Price Type</th>
              <th style={{width: '15%'}}>Unit Price</th>
              <th style={{width: '10%'}}>Qty</th>
              <th style={{width: '10%'}}>Discount</th>
              <th style={{width: '10%'}}>Total</th>
            </tr>
          </thead>
          <tbody>
            {quotation.quotationItems.map((item, index) => (
              <tr key={index}>
                <td>
                  <div>
                    <div style={{fontWeight: 'bold'}}>{item.productName}</div>
                    {item.product?.barcode && (
                      <div style={{fontSize: '12px', color: '#666'}}>
                        Code: {item.product.barcode}
                      </div>
                    )}
                  </div>
                </td>
                <td style={{textTransform: 'capitalize'}}>{item.priceType}</td>
                <td className="number">{formatCurrency(item.selectedPrice)}</td>
                <td className="number">
                  {item.quantity} {item.product?.unit || 'pcs'}
                </td>
                <td className="number">{formatCurrency(item.discount)}</td>
                <td className="number">{formatCurrency(item.total)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Summary */}
        <div className="summary">
          <div className="summary-row">
            <span>Subtotal:</span>
            <span>{formatCurrency(quotation.subTotal)}</span>
          </div>
          <div className="summary-row">
            <span>Tax ({quotation.taxRate}%):</span>
            <span>{formatCurrency(calculateTaxAmount())}</span>
          </div>
          <div className="summary-row summary-total">
            <span>TOTAL:</span>
            <span>{formatCurrency(quotation.grandTotal)}</span>
          </div>
        </div>

        {/* Notes */}
        {quotation.notes && (
          <div className="notes">
            <div style={{fontWeight: 'bold', marginBottom: '10px'}}>Notes:</div>
            <div style={{whiteSpace: 'pre-wrap'}}>{quotation.notes}</div>
          </div>
        )}

        {/* Footer */}
        <div className="footer">
          <p>Thank you for your business!</p>
          <p>This quotation is valid until {quotation.validUntil ? new Date(quotation.validUntil).toLocaleDateString() : 'further notice'}.</p>
        </div>
      </div>
    </div>
  )
}