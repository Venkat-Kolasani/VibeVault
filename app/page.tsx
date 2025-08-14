"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ArrowRight,
  Smartphone,
  Target,
  TrendingUp,
  Zap,
  Heart,
  Music,
  Coffee,
  Coins,
  Trophy,
  Gift,
} from "lucide-react"
import { VibeVaultDemo } from "@/components/vibevault-demo"
import { RoundUpSimulator } from "@/components/roundup-simulator"
import { GoalTracker } from "@/components/goal-tracker"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo-section")
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-stone-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-orange-300 via-amber-300 to-stone-300 opacity-20 blur-lg"></div>
                <div className="relative rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-stone-500 p-4">
                  <Coins className="h-12 w-12 text-white" />
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-stone-600 bg-clip-text text-transparent">
                VibeVault
              </span>
            </h1>

            <p className="mb-8 text-xl text-gray-600 sm:text-2xl">
              Turn your daily chai money into festival dreams! 🎵
            </p>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-gray-500">
              The micro-savings app that transforms your UPI round-ups into real goals. Save ₹3 here, ₹7 there, and
              watch your Sunburn festival ticket fund grow! Built for India's Gen-Z who dream big but spend smart.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={scrollToDemo}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:from-orange-600 hover:to-amber-600"
              >
                <Smartphone className="mr-2 h-5 w-5" />
                Try Live Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <Card className="border-orange-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-orange-100 p-3">
                    <Target className="h-8 w-8 text-orange-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">₹25,000</h3>
                <p className="text-gray-600">Average Sunburn ticket saved in 8 months</p>
              </CardContent>
            </Card>

            <Card className="border-amber-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-amber-100 p-3">
                    <TrendingUp className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">₹47</h3>
                <p className="text-gray-600">Average daily micro-savings per user</p>
              </CardContent>
            </Card>

            <Card className="border-stone-100 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="rounded-full bg-stone-100 p-3">
                    <Zap className="h-8 w-8 text-stone-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900">2.3s</h3>
                <p className="text-gray-600">Average time to approve a round-up</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo-section" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Experience the Magic ✨</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See how VibeVault turns everyday transactions into progress toward your dreams
            </p>
          </div>

          <Tabs defaultValue="demo" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="demo">Live App Demo</TabsTrigger>
              <TabsTrigger value="roundup">Round-Up Magic</TabsTrigger>
              <TabsTrigger value="goals">Goal Tracking</TabsTrigger>
            </TabsList>

            <TabsContent value="demo" className="mt-8">
              <VibeVaultDemo />
            </TabsContent>

            <TabsContent value="roundup" className="mt-8">
              <RoundUpSimulator />
            </TabsContent>

            <TabsContent value="goals" className="mt-8">
              <GoalTracker />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Why Gen-Z Loves VibeVault</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Built with empathy, powered by gamification, designed for your lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-orange-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <Heart className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Empathetic Design</CardTitle>
                <CardDescription>
                  No shame, no judgment. Missing a day doesn't break your streak - just shows a gentle "cracked" icon to
                  motivate you back.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100">
                  <Music className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Visual Goals</CardTitle>
                <CardDescription>
                  See your Sunburn festival stage literally build as you save. At 25% - stage frame appears, 50% -
                  lights go up, 75% - crowd fades in!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-stone-100 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stone-100">
                  <Zap className="h-6 w-6 text-stone-600" />
                </div>
                <CardTitle className="text-xl">Instant Gratification</CardTitle>
                <CardDescription>
                  Every round-up comes with delightful animations, satisfying sounds, and haptic feedback. Saving has
                  never felt this good!
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-orange-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-200">
                  <Coffee className="h-6 w-6 text-orange-700" />
                </div>
                <CardTitle className="text-xl">Relatable Scenarios</CardTitle>
                <CardDescription>
                  "7 days of chai-powered savings!" - We speak your language and celebrate your daily wins with
                  personalized messages.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-amber-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-200">
                  <Smartphone className="h-6 w-6 text-amber-700" />
                </div>
                <CardTitle className="text-xl">UPI Integration</CardTitle>
                <CardDescription>
                  Seamlessly works with all your favorite UPI apps. One tap to round up ₹47 lunch to ₹50 and save ₹3
                  toward your dreams.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-stone-200 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-stone-200">
                  <Trophy className="h-6 w-6 text-stone-700" />
                </div>
                <CardTitle className="text-xl">Gamified Progress</CardTitle>
                <CardDescription>
                  Streaks, achievements, and milestone celebrations. Turn financial discipline into an engaging game you
                  actually want to play.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Card className="border-0 bg-gradient-to-r from-orange-500 via-amber-500 to-stone-500 text-white">
            <CardContent className="p-12 text-center">
              <div className="mb-6 flex justify-center">
                <div className="rounded-full bg-white/20 p-4">
                  <Gift className="h-12 w-12 text-white" />
                </div>
              </div>

              <h2 className="mb-4 text-3xl font-bold">Ready to Turn Dreams into Reality?</h2>

              <p className="mb-8 text-xl opacity-90">
                Join thousands of Gen-Z Indians who are already saving for their festival dreams, one chai at a time.
                Your Sunburn ticket is just ₹3 round-ups away!
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                  <Smartphone className="mr-2 h-5 w-5" />
                  Download VibeVault
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent"
                >
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="mb-4 flex justify-center">
              <div className="rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-stone-500 p-2">
                <Coins className="h-6 w-6 text-white" />
              </div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">VibeVault</h3>
            <p className="mb-6 text-gray-600">Micro-savings, macro dreams. Built for India's Gen-Z.</p>

            <div className="flex justify-center space-x-6">
              <Badge variant="outline" className="border-orange-200 text-orange-600">
                Microsoft Compatible
              </Badge>
              <Badge variant="outline" className="border-amber-200 text-amber-600">
                UPI Integrated
              </Badge>
              <Badge variant="outline" className="border-stone-200 text-stone-600">
                Gen-Z Approved
              </Badge>
            </div>

            <p className="mt-8 text-sm text-gray-500">© 2025 VibeVault. Designed with ❤️ for India's dreamers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
