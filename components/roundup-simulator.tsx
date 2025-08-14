"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  ShoppingBag,
  Car,
  Utensils,
  Coins,
  CheckCircle,
  ArrowRight,
  Smartphone,
  CreditCard,
  Zap,
} from "lucide-react"

interface Transaction {
  id: string
  amount: number
  merchant: string
  icon: React.ReactNode
  roundUp: number
  category: string
  time: string
}

const sampleTransactions: Transaction[] = [
  {
    id: "1",
    amount: 47,
    merchant: "Chai Point",
    icon: <Coffee className="h-4 w-4" />,
    roundUp: 3,
    category: "Food & Drinks",
    time: "2:30 PM",
  },
  {
    id: "2",
    amount: 234,
    merchant: "Myntra",
    icon: <ShoppingBag className="h-4 w-4" />,
    roundUp: 16,
    category: "Shopping",
    time: "1:15 PM",
  },
  {
    id: "3",
    amount: 89,
    merchant: "Swiggy",
    icon: <Utensils className="h-4 w-4" />,
    roundUp: 11,
    category: "Food Delivery",
    time: "12:45 PM",
  },
  {
    id: "4",
    amount: 156,
    merchant: "Ola",
    icon: <Car className="h-4 w-4" />,
    roundUp: 44,
    category: "Transportation",
    time: "11:20 AM",
  },
  {
    id: "5",
    amount: 73,
    merchant: "BookMyShow",
    icon: <Smartphone className="h-4 w-4" />,
    roundUp: 27,
    category: "Entertainment",
    time: "10:30 AM",
  },
  {
    id: "6",
    amount: 125,
    merchant: "Big Bazaar",
    icon: <ShoppingBag className="h-4 w-4" />,
    roundUp: 25,
    category: "Groceries",
    time: "9:45 AM",
  },
]

export function RoundUpSimulator() {
  const [customAmount, setCustomAmount] = useState("")
  const [processedTransactions, setProcessedTransactions] = useState<string[]>([])
  const [totalSaved, setTotalSaved] = useState(0)
  const [isAnimating, setIsAnimating] = useState<string | null>(null)
  const [showUPIFlow, setShowUPIFlow] = useState<string | null>(null)

  const processRoundUp = (transaction: Transaction) => {
    setShowUPIFlow(transaction.id)

    // Simulate UPI flow steps
    setTimeout(() => {
      setIsAnimating(transaction.id)
      setShowUPIFlow(null)
    }, 1500)

    setTimeout(() => {
      setProcessedTransactions((prev) => [...prev, transaction.id])
      setTotalSaved((prev) => prev + transaction.roundUp)
      setIsAnimating(null)
    }, 3000)
  }

  const calculateRoundUp = (amount: number) => {
    const nextTen = Math.ceil(amount / 10) * 10
    return nextTen - amount
  }

  const customRoundUp = customAmount ? calculateRoundUp(Number.parseFloat(customAmount) || 0) : 0

  const resetDemo = () => {
    setProcessedTransactions([])
    setTotalSaved(0)
    setCustomAmount("")
    setIsAnimating(null)
    setShowUPIFlow(null)
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">The Round-Up Magic ✨</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience how VibeVault transforms everyday UPI transactions into micro-savings with delightful, one-tap
          round-ups that make saving feel effortless and rewarding.
        </p>
      </div>

      <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-green-100 p-3">
                  <Coins className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-green-900">₹{totalSaved}</h3>
              <p className="text-green-700">Total Saved</p>
            </div>

            <div>
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-blue-100 p-3">
                  <CreditCard className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-blue-900">{processedTransactions.length}</h3>
              <p className="text-blue-700">Transactions</p>
            </div>

            <div>
              <div className="mb-2 flex justify-center">
                <div className="rounded-full bg-purple-100 p-3">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mb-2 text-3xl font-bold text-purple-900">
                {processedTransactions.length > 0 ? Math.round(totalSaved / processedTransactions.length) : 0}
              </h3>
              <p className="text-purple-700">Avg. Save</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sampleTransactions.map((transaction) => {
          const isProcessed = processedTransactions.includes(transaction.id)
          const isCurrentlyAnimating = isAnimating === transaction.id
          const isShowingUPIFlow = showUPIFlow === transaction.id

          return (
            <Card
              key={transaction.id}
              className={`transition-all duration-500 ${
                isProcessed
                  ? "border-green-200 bg-green-50 scale-105"
                  : isCurrentlyAnimating
                    ? "border-orange-200 bg-orange-50 scale-105 shadow-lg"
                    : isShowingUPIFlow
                      ? "border-blue-200 bg-blue-50 scale-105"
                      : "border-gray-200 hover:border-orange-200 hover:shadow-md"
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-full bg-gray-100 p-2">{transaction.icon}</div>
                    <div>
                      <p className="font-medium text-gray-900">{transaction.merchant}</p>
                      <div className="flex items-center space-x-2">
                        <p className="text-sm text-gray-600">₹{transaction.amount}</p>
                        <Badge variant="outline" className="text-xs">
                          {transaction.category}
                        </Badge>
                      </div>
                      <p className="text-xs text-gray-500">{transaction.time}</p>
                    </div>
                  </div>
                  {isProcessed && <CheckCircle className="h-5 w-5 text-green-500" />}
                </div>

                {isShowingUPIFlow && (
                  <div className="mb-4 p-3 bg-blue-100 rounded-lg border border-blue-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-blue-900">UPI Transaction Complete</span>
                    </div>
                    <div className="text-xs text-blue-700 space-y-1">
                      <p>💳 Payment successful to {transaction.merchant}</p>
                      <p>🔄 Round-up suggestion: +₹{transaction.roundUp}</p>
                      <p>🎯 Add to Sunburn Fund?</p>
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Round up to:</span>
                    <span className="font-medium">₹{transaction.amount + transaction.roundUp}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Micro-save:</span>
                    <Badge className="bg-orange-100 text-orange-700">+₹{transaction.roundUp}</Badge>
                  </div>

                  {!isProcessed && !isShowingUPIFlow && (
                    <Button
                      onClick={() => processRoundUp(transaction)}
                      disabled={isCurrentlyAnimating}
                      className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                    >
                      Simulate UPI Round-up
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  )}

                  {isCurrentlyAnimating && (
                    <div className="text-center p-3 bg-orange-100 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-orange-600 border-t-transparent"></div>
                        <span className="text-sm font-medium text-orange-900">Processing...</span>
                      </div>
                      <div className="text-xs text-orange-700">💫 Coin flipping into Sunburn Fund...</div>
                    </div>
                  )}

                  {isProcessed && (
                    <div className="text-center p-3 bg-green-100 rounded-lg">
                      <div className="flex items-center justify-center space-x-2 text-green-600 mb-1">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">Saved to Sunburn Fund!</span>
                      </div>
                      <div className="text-xs text-green-700">🎉 Every rupee brings you closer to Goa!</div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-center flex items-center justify-center space-x-2">
            <Smartphone className="h-5 w-5" />
            <span>Try Your Own UPI Transaction</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Transaction Amount</label>
              <Input
                type="number"
                placeholder="Enter amount (e.g., 47)"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="text-center text-lg"
              />
            </div>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-8 w-8 text-gray-400" />
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Round-up Amount</p>
              <div className="p-4 bg-white rounded-lg border-2 border-dashed border-gray-300">
                <p className="font-bold text-2xl text-orange-600">₹{customRoundUp}</p>
                <p className="text-xs text-gray-500">toward your goals</p>
              </div>
            </div>
          </div>

          {customAmount && (
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <div className="mb-2">
                <span className="text-gray-600">₹{customAmount}</span>
                <ArrowRight className="inline mx-2 h-4 w-4 text-gray-400" />
                <span className="font-medium">₹{Math.ceil((Number.parseFloat(customAmount) || 0) / 10) * 10}</span>
              </div>
              <p className="text-lg font-bold text-orange-600 mt-2">Save ₹{customRoundUp} with one tap! 🎯</p>
              <p className="text-sm text-gray-600 mt-1">
                That's{" "}
                {customRoundUp > 0 ? Math.round((customRoundUp / (Number.parseFloat(customAmount) || 1)) * 100) : 0}%
                extra toward your dreams
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Reset Button */}
      <div className="text-center">
        <Button onClick={resetDemo} variant="outline" size="lg" className="px-8 bg-transparent">
          Reset All Transactions
        </Button>
      </div>

      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <h4 className="mb-4 font-semibold text-yellow-900 text-center">How VibeVault's UPI Integration Works</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h5 className="font-medium text-yellow-900">Transaction Flow:</h5>
              <div className="space-y-2 text-sm text-yellow-800">
                <p>• UPI payment completes normally</p>
                <p>• Gentle round-up suggestion appears</p>
                <p>• One-tap biometric approval</p>
                <p>• Instant visual feedback with animation</p>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="font-medium text-yellow-900">User Experience:</h5>
              <div className="space-y-2 text-sm text-yellow-800">
                <p>• Satisfying coin-flip sound effect</p>
                <p>• Haptic vibration confirmation</p>
                <p>• Real-time goal progress update</p>
                <p>• Encouraging milestone messages</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
