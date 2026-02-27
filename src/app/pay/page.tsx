// frontend/aurum/src/app/pay/page.tsx
'use client'

export const dynamic = 'force-dynamic';
// Purpose: Aurum invoice payment entry page - allows users to enter invoice number for payment

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CreditCard, Search, ArrowRight } from 'lucide-react'
import { PrimaryButton } from '@msaber/shared'

export default function PayPage() {
  const router = useRouter()
  const [invoiceNumber, setInvoiceNumber] = useState('')
  const [clientIdentifier, setClientIdentifier] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  // Process invoice number - extract just the numeric part (e.g., "INV-7-4" → "7-4")
  const processInvoiceNumber = (input: string): string => {
    // Remove any prefix like "INV-" and keep only the numeric part
    return input.trim().replace(/^INV[-\s]*/, '').replace(/^[A-Z]+[-\s]*/, '')
  }

  // Process client identifier - extract just the numeric part (e.g., "AUR-123" → "123")
  const processClientIdentifier = (input: string): string => {
    // If it's an email, return as-is
    if (input.includes('@')) {
      return input.trim()
    }
    // Otherwise, extract just the numeric part
    const match = input.trim().match(/(\d+)$/)
    return match ? match[1] : input.trim()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!invoiceNumber.trim()) {
      setError('Please enter an invoice number')
      return
    }

    if (!clientIdentifier.trim()) {
      setError('Please enter your client ID or email address')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      // Process the inputs
      const processedInvoiceNumber = processInvoiceNumber(invoiceNumber)
      const processedClientIdentifier = processClientIdentifier(clientIdentifier)

      // Call API to verify invoice access and get invoice data
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'
      const response = await fetch(`${backendUrl}/api/public/invoices/verify-invoice-access`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          invoiceNumber: processedInvoiceNumber,
          clientIdentifier: processedClientIdentifier,
          brandCode: 'AURUM', // Specify the brand for validation
        }),
      })

      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error('Failed to parse response as JSON:', parseError)
        throw new Error('Server returned an invalid response. Please try again.')
      }

      if (!response.ok) {
        throw new Error(data.message || 'Failed to verify invoice access')
      }

      // Redirect to the local invoice view page
      router.push(`/invoice/${data.invoice.id}?client=${processedClientIdentifier}`)
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Unable to access invoice. Please check your details and try again.';
      setError(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fae070] rounded-full mb-6">
              <CreditCard className="w-8 h-8 text-black" />
            </div>
            <h1 className="text-3xl font-bold text-[#fae070] mb-2">View Your Invoice</h1>
            <p className="text-neutral-300">
              Enter your invoice number and client details to access your invoice
            </p>
          </div>

          {/* Form */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-[#fae070]/20 p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="invoiceNumber" className="block text-sm font-medium text-[#fae070] mb-2">
                  Invoice Number
                </label>
                <div className="relative">
                  <input
                    id="invoiceNumber"
                    type="text"
                    value={invoiceNumber}
                    onChange={(e) => setInvoiceNumber(e.target.value)}
                    placeholder="e.g., INV-00123"
                    className="w-full px-4 py-3 bg-black/50 border border-[#fae070]/30 rounded-lg text-white placeholder-[#fae070]/50 focus:outline-none focus:ring-2 focus:ring-[#fae070] focus:border-[#fae070] transition-colors"
                    required
                  />
                  <Search className="absolute right-3 top-3.5 w-5 h-5 text-[#fae070]/50" />
                </div>
              </div>

              <div>
                <label htmlFor="clientIdentifier" className="block text-sm font-medium text-[#fae070] mb-2">
                  Client ID or Email Address
                </label>
                <div className="relative">
                  <input
                    id="clientIdentifier"
                    type="text"
                    value={clientIdentifier}
                    onChange={(e) => setClientIdentifier(e.target.value)}
                    placeholder="Enter your client ID or email"
                    className="w-full px-4 py-3 bg-black/50 border border-[#fae070]/30 rounded-lg text-white placeholder-[#fae070]/50 focus:outline-none focus:ring-2 focus:ring-[#fae070] focus:border-[#fae070] transition-colors"
                    required
                  />
                </div>
                <p className="text-xs text-[#fae070]/70 mt-1">
                  This helps us verify your access to the invoice
                </p>
              </div>

              {error && (
                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 text-sm">{error}</p>
                </div>
              )}

              <PrimaryButton
                type="submit"
                loading={isLoading}
                disabled={!invoiceNumber.trim() || !clientIdentifier.trim()}
                fullWidth
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                {isLoading ? 'Processing...' : 'View Invoice'}
              </PrimaryButton>
            </form>

            {/* Help Text */}
            <div className="mt-6 text-center">
              <p className="text-neutral-400 text-sm">
                Need help? Contact our support team for assistance with your invoice.
              </p>
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}
