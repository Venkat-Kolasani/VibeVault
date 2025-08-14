"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Music, Flame, Star, Trophy, Target, TrendingUp, Coins, Zap, Heart } from "lucide-react"

export function VibeVaultDemo() {
  const [progress, setProgress] = useState(68)
  const [streak, setStreak] = useState(12)
  const [savings, setSavings] = useState(17250)
  const [isAnimating, setIsAnimating] = useState(false)
  const [recentSaves, setRecentSaves] = useState([
    { id: 1, type: "Lunch round-up", amount: 3, time: "2 mins ago", color: "green" },
    { id: 2, type: "Coffee round-up", amount: 5, time: "1 hour ago", color: "blue" },
    { id: 3, type: "Auto round-up", amount: 7, time: "3 hours ago", color: "purple" },
  ])
  const [showCelebration, setShowCelebration] = useState(false)

  const targetAmount = 25000
  const remaining = targetAmount - savings

  const triggerAnimation = () => {
    setIsAnimating(true)

    // Add new save to recent activity
    const newSave = {
      id: Date.now(),
      type: "Demo round-up",
      amount: Math.floor(Math.random() * 10) + 1,
      time: "Just now",
      color: "orange",
    }
    setRecentSaves((prev) => [newSave, ...prev.slice(0, 2)])

    setTimeout(() => {
      setIsAnimating(false)
      if (progress >= 95) {
        setShowCelebration(true)
        setTimeout(() => setShowCelebration(false), 3000)
      }
    }, 1500)
  }

  const getMilestoneStatus = () => {
    if (progress >= 75) return { stage: "crowd", message: "The crowd is vibing! 🎉", color: "text-purple-600" }
    if (progress >= 50) return { stage: "lights", message: "Stage lights are on! ✨", color: "text-amber-600" }
    if (progress >= 25) return { stage: "frame", message: "Stage frame is up! 🎪", color: "text-orange-600" }
    return { stage: "foundation", message: "Building your dream! 🏗️", color: "text-stone-600" }
  }

  const milestoneStatus = getMilestoneStatus()

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="relative">
            {showCelebration && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 rounded-[3rem]">
                <div className="text-center text-white animate-bounce">
                  <div className="text-4xl mb-2">🎉</div>
                  <div className="text-lg font-bold">Almost there!</div>
                  <div className="text-sm">Sunburn is calling!</div>
                </div>
              </div>
            )}

            <div className="h-[600px] w-[300px] rounded-[3rem] bg-gray-900 p-2">
              <div className="h-full w-full rounded-[2.5rem] bg-white overflow-hidden">
                {/* Status Bar */}
                <div className="flex justify-between items-center px-6 py-2 bg-gray-50">
                  <span className="text-sm font-medium">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <div className="h-2 w-4 rounded-sm bg-gray-300"></div>
                    <span className="text-xs">100%</span>
                  </div>
                </div>

                {/* App Content */}
                <div className="p-4 space-y-4">
                  {/* Header */}
                  <div className="text-center">
                    <h2 className="text-xl font-bold text-gray-900">Hey Arjun! 👋</h2>
                    <p className="text-sm text-gray-600">Your dreams are getting closer</p>
                    <div className="flex items-center justify-center space-x-2 mt-1">
                      <Heart className="h-3 w-3 text-red-500" />
                      <span className="text-xs text-gray-500">Powered by micro-savings</span>
                    </div>
                  </div>

                  {/* Goal Card */}
                  <Card
                    className={`border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 transition-all duration-500 ${isAnimating ? "scale-105 shadow-lg" : ""}`}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Music className="h-5 w-5 text-orange-600" />
                          <span className="font-semibold text-orange-900">Sunburn Fund</span>
                        </div>
                        <Badge className="bg-orange-100 text-orange-700">{Math.round(progress)}%</Badge>
                      </div>

                      <div className="mb-4 h-28 rounded-lg bg-gradient-to-t from-stone-900 via-amber-800 to-orange-500 relative overflow-hidden">
                        {/* Stage Frame (25%) */}
                        {progress >= 25 && (
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-10 border-2 border-yellow-400 rounded-t-lg bg-yellow-100 bg-opacity-20"></div>
                        )}

                        {/* Lights (50%) */}
                        {progress >= 50 && (
                          <>
                            <div className="absolute top-2 left-1/4 w-3 h-3 rounded-full bg-yellow-300 animate-pulse"></div>
                            <div className="absolute top-2 right-1/4 w-3 h-3 rounded-full bg-yellow-300 animate-pulse"></div>
                            <div className="absolute top-2 left-1/3 w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                            <div className="absolute top-2 right-1/3 w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                            <div className="absolute top-3 left-2/5 w-1 h-1 rounded-full bg-green-400 animate-pulse"></div>
                            <div className="absolute top-3 right-2/5 w-1 h-1 rounded-full bg-purple-400 animate-pulse"></div>
                          </>
                        )}

                        {/* Crowd (75%) */}
                        {progress >= 75 && (
                          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent opacity-80">
                            <div className="flex justify-center space-x-1 pt-1">
                              <div className="w-1 h-4 bg-white rounded-full opacity-70 animate-pulse"></div>
                              <div className="w-1 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                              <div className="w-1 h-4 bg-white rounded-full opacity-80 animate-pulse"></div>
                              <div className="w-1 h-2 bg-white rounded-full opacity-50 animate-pulse"></div>
                              <div className="w-1 h-4 bg-white rounded-full opacity-70 animate-pulse"></div>
                              <div className="w-1 h-3 bg-white rounded-full opacity-60 animate-pulse"></div>
                            </div>
                          </div>
                        )}

                        {/* Festival Logo */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                          <div className="text-white font-bold text-sm drop-shadow-lg">SUNBURN</div>
                          <div className="text-white text-xs opacity-90">GOA 2024</div>
                        </div>

                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex space-x-1">
                          <div
                            className={`w-1 h-1 rounded-full ${progress >= 25 ? "bg-yellow-400" : "bg-gray-400"}`}
                          ></div>
                          <div
                            className={`w-1 h-1 rounded-full ${progress >= 50 ? "bg-yellow-400" : "bg-gray-400"}`}
                          ></div>
                          <div
                            className={`w-1 h-1 rounded-full ${progress >= 75 ? "bg-yellow-400" : "bg-gray-400"}`}
                          ></div>
                          <div
                            className={`w-1 h-1 rounded-full ${progress >= 100 ? "bg-yellow-400" : "bg-gray-400"}`}
                          ></div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Saved</span>
                          <span className="font-semibold">₹{savings.toLocaleString()}</span>
                        </div>
                        <Progress value={progress} className="h-3" />
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Target: ₹{targetAmount.toLocaleString()}</span>
                          <span className="text-orange-600 font-semibold">₹{remaining.toLocaleString()} to go!</span>
                        </div>
                        <div className="text-center">
                          <span className={`text-xs font-medium ${milestoneStatus.color}`}>
                            {milestoneStatus.message}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-stone-50">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Flame className="h-5 w-5 text-amber-500" />
                          <div>
                            <p className="font-semibold text-amber-900">{streak} Day Streak!</p>
                            <p className="text-xs text-amber-600">Chai-powered savings 🔥</p>
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl">☕</div>
                          <div className="text-xs text-amber-600">+₹{streak * 2} this week</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-gray-900">Recent Saves</h3>
                      <Zap className="h-4 w-4 text-yellow-500" />
                    </div>
                    <div className="space-y-2 max-h-24 overflow-y-auto">
                      {recentSaves.map((save) => (
                        <div
                          key={save.id}
                          className={`flex items-center justify-between p-2 bg-${save.color}-50 rounded-lg transition-all duration-300`}
                        >
                          <div className="flex items-center space-x-2">
                            <div className={`w-2 h-2 rounded-full bg-${save.color}-500`}></div>
                            <div>
                              <span className="text-sm">{save.type}</span>
                              <div className="text-xs text-gray-500">{save.time}</div>
                            </div>
                          </div>
                          <span className={`text-sm font-semibold text-${save.color}-600`}>+₹{save.amount}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Target className="h-5 w-5 text-orange-600" />
                <span>Interactive Demo</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                This is Arjun's VibeVault dashboard. Experience the gamified micro-savings that make every rupee count!
              </p>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  onClick={() => {
                    setProgress(Math.min(progress + 8, 100))
                    setSavings(Math.min(savings + 2000, targetAmount))
                    triggerAnimation()
                  }}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  disabled={progress >= 100}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Round-up ₹2K
                </Button>

                <Button
                  onClick={() => {
                    setStreak(streak + 1)
                    setProgress(Math.min(progress + 2, 100))
                    setSavings(Math.min(savings + 500, targetAmount))
                    triggerAnimation()
                  }}
                  className="bg-amber-500 hover:bg-amber-600 text-white"
                >
                  <Flame className="mr-2 h-4 w-4" />
                  Daily Save
                </Button>
              </div>

              <Button
                onClick={() => {
                  setProgress(68)
                  setSavings(17250)
                  setStreak(12)
                  setRecentSaves([
                    { id: 1, type: "Lunch round-up", amount: 3, time: "2 mins ago", color: "green" },
                    { id: 2, type: "Coffee round-up", amount: 5, time: "1 hour ago", color: "blue" },
                    { id: 3, type: "Auto round-up", amount: 7, time: "3 hours ago", color: "purple" },
                  ])
                }}
                variant="outline"
                className="w-full"
              >
                Reset Demo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Key Features Demonstrated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="h-5 w-5 text-amber-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Visual Goal Progress</p>
                    <p className="text-sm text-gray-600">
                      Festival stage builds dynamically - frame at 25%, lights at 50%, crowd at 75%, celebration at 100%
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Trophy className="h-5 w-5 text-orange-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Empathetic Streaks</p>
                    <p className="text-sm text-gray-600">
                      Celebrates consistency with encouraging language - "chai-powered savings" creates emotional
                      connection
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Coins className="h-5 w-5 text-stone-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Real-time Micro-feedback</p>
                    <p className="text-sm text-gray-600">
                      Every save triggers delightful animations, progress updates, and milestone celebrations
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Heart className="h-5 w-5 text-red-500 mt-0.5" />
                  <div>
                    <p className="font-medium">Emotional Design</p>
                    <p className="text-sm text-gray-600">
                      Personal messaging, relatable goals, and positive reinforcement make saving feel rewarding
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-green-600" />
                <span>UPI Integration</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Seamless round-up suggestions after every transaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>One-tap approval with biometric authentication</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Instant visual feedback with coin-flip animation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Automatic allocation to chosen goal funds</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
