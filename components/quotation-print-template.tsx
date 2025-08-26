"use client"

import { formatCurrency } from "@/lib/utils"

interface QuotationPrintProps {
  quotation: {
    quotationNo: string
    selectedCustomer: {
      name: string
      email: string
      phone: string
      address: string
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
        barcode: string
        unit: string
      }
    }>
    subTotal: number
    taxRate: number
    grandTotal: number
    validUntil: string | null
    notes: string
    createdAt: string
    warehouses: {
      name: string
      address: string
      phone: string
      email: string
    }
  }
}

export function QuotationPrintTemplate({ quotation }: QuotationPrintProps) {
  const calculateTaxAmount = () => {
    return (quotation.subTotal * quotation.taxRate) / 100
  }

  return (
    <div className="hidden print:block bg-white text-black p-8 max-w-4xl mx-auto">
      {/* Company Header */}
      <div className="text-center border-b-2 border-gray-300 pb-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{quotation.warehouses.name}</h1>
        <p className="text-sm text-gray-600">{quotation.warehouses.address}</p>
        <p className="text-sm text-gray-600">
          Phone: {quotation.warehouses.phone} | Email: {quotation.warehouses.email}
        </p>
      </div>

      {/* Document Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">QUOTATION</h2>
        <p className="text-lg font-semibold">#{quotation.quotationNo}</p>
      </div>

      {/* Quotation Details and Customer Info */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Bill To:</h3>
          <div className="bg-gray-50 p-4 rounded">
            <p className="font-semibold text-gray-800">{quotation.selectedCustomer.name}</p>
            <p className="text-sm text-gray-600 capitalize">{quotation.selectedCustomer.type}</p>
            <p className="text-sm text-gray-600">{quotation.selectedCustomer.phone}</p>
            {quotation.selectedCustomer.email && (
              <p className="text-sm text-gray-600">{quotation.selectedCustomer.email}</p>
            )}
            {quotation.selectedCustomer.address && (
              <p className="text-sm text-gray-600">{quotation.selectedCustomer.address}</p>
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Quotation Details:</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Date:</span>
              <span className="text-sm text-gray-800">{new Date(quotation.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Valid Until:</span>
              <span className="text-sm text-gray-800">
                {quotation.validUntil 
                  ? new Date(quotation.validUntil).toLocaleDateString()
                  : "No expiry"
                }
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm font-medium text-gray-600">Terms:</span>
              <span className="text-sm text-gray-800">Net 30</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-3 text-left text-sm font-semibold text-gray-800">Item Description</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-800">Type</th>
              <th className="border border-gray-300 px-4 py-3 text-right text-sm font-semibold text-gray-800">Unit Price</th>
              <th className="border border-gray-300 px-4 py-3 text-center text-sm font-semibold text-gray-800">Qty</th>
              <th className="border border-gray-300 px-4 py-3 text-right text-sm font-semibold text-gray-800">Discount</th>
              <th className="border border-gray-300 px-4 py-3 text-right text-sm font-semibold text-gray-800">Total</th>
            </tr>
          </thead>
          <tbody>
            {quotation.quotationItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="border border-gray-300 px-4 py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-800">{item.productName}</p>
                    {item.product?.barcode && (
                      <p className="text-xs text-gray-500">Code: {item.product.barcode}</p>
                    )}
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-3 text-center text-sm text-gray-600 capitalize">
                  {item.priceType}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-gray-800">
                  {formatCurrency(item.selectedPrice)}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-center text-sm text-gray-800">
                  {item.quantity} {item.product?.unit || 'pcs'}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm text-gray-800">
                  {formatCurrency(item.discount)}
                </td>
                <td className="border border-gray-300 px-4 py-3 text-right text-sm font-medium text-gray-800">
                  {formatCurrency(item.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        {quotation.notes && (
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Notes:</h3>
            <div className="bg-gray-50 p-4 rounded">
              <p className="text-sm text-gray-700 whitespace-pre-wrap">{quotation.notes}</p>
            </div>
          </div>
        )}

        <div>
          <div className="bg-gray-50 p-4 rounded">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Subtotal:</span>
                <span className="text-sm text-gray-800">{formatCurrency(quotation.subTotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm font-medium text-gray-600">Tax ({quotation.taxRate}%):</span>
                <span className="text-sm text-gray-800">{formatCurrency(calculateTaxAmount())}</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between">
                  <span className="text-lg font-bold text-gray-800">Grand Total:</span>
                  <span className="text-lg font-bold text-gray-800">{formatCurrency(quotation.grandTotal)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t-2 border-gray-300 pt-6 mt-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Terms & Conditions:</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• This quotation is valid until the specified date</li>
              <li>• Prices are subject to change without notice</li>
              <li>• All payments are due within 30 days</li>
              <li>• Please contact us for any questions</li>
            </ul>
          </div>
          <div className="text-right">
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Thank you for your business!</p>
              <div className="border-t border-gray-300 pt-2 mt-4">
                <p className="text-xs text-gray-500">Authorized Signature</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Date Footer */}
      <div className="text-center mt-8 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          Printed on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}