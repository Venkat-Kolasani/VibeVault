"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Music, Plane, Gamepad2, Star, Trophy, Target } from "lucide-react"

interface Goal {
  id: string
  name: string
  target: number
  current: number
  icon: React.ReactNode
  color: string
  description: string
  milestones: { percentage: number; description: string; achieved: boolean }[]
}

const initialGoals: Goal[] = [
  {
    id: "sunburn",
    name: "Sunburn Festival",
    target: 25000,
    current: 17250,
    icon: <Music className="h-6 w-6" />,
    color: "purple",
    description: "The ultimate EDM experience in Goa",
    milestones: [
      { percentage: 25, description: "Stage frame appears", achieved: true },
      { percentage: 50, description: "Lights go up", achieved: true },
      { percentage: 75, description: "Crowd fades in", achieved: false },
      { percentage: 100, description: "Ticket secured!", achieved: false },
    ],
  },
  {
    id: "trip",
    name: "Europe Backpacking",
    target: 80000,
    current: 23400,
    icon: <Plane className="h-6 w-6" />,
    color: "blue",
    description: "3 weeks across 8 countries",
    milestones: [
      { percentage: 25, description: "Flight booking ready", achieved: true },
      { percentage: 50, description: "Accommodation secured", achieved: false },
      { percentage: 75, description: "Activities planned", achieved: false },
      { percentage: 100, description: "Adventure begins!", achieved: false },
    ],
  },
  {
    id: "gaming",
    name: "Gaming Setup",
    target: 45000,
    current: 8900,
    icon: <Gamepad2 className="h-6 w-6" />,
    color: "green",
    description: "RTX 4060 + 144Hz monitor",
    milestones: [
      { percentage: 25, description: "Monitor fund ready", achieved: false },
      { percentage: 50, description: "GPU fund secured", achieved: false },
      { percentage: 75, description: "Full build planned", achieved: false },
      { percentage: 100, description: "Gaming paradise!", achieved: false },
    ],
  },
]

export function GoalTracker() {
  const [goals, setGoals] = useState(initialGoals)
  const [selectedGoal, setSelectedGoal] = useState(goals[0])

  const addProgress = (goalId: string, amount: number) => {
    setGoals((prev) =>
      prev.map((goal) => {
        if (goal.id === goalId) {
          const newCurrent = Math.min(goal.current + amount, goal.target)
          const newProgress = (newCurrent / goal.target) * 100

          // Update milestones
          const updatedMilestones = goal.milestones.map((milestone) => ({
            ...milestone,
            achieved: newProgress >= milestone.percentage,
          }))

          const updatedGoal = {
            ...goal,
            current: newCurrent,
            milestones: updatedMilestones,
          }

          if (goal.id === selectedGoal.id) {
            setSelectedGoal(updatedGoal)
          }

          return updatedGoal
        }
        return goal
      }),
    )
  }

  const getColorClasses = (color: string) => {
    const colors = {
      purple: {
        bg: "from-purple-50 to-pink-50",
        border: "border-purple-200",
        text: "text-purple-900",
        badge: "bg-purple-100 text-purple-700",
        button: "bg-purple-500 hover:bg-purple-600",
      },
      blue: {
        bg: "from-blue-50 to-indigo-50",
        border: "border-blue-200",
        text: "text-blue-900",
        badge: "bg-blue-100 text-blue-700",
        button: "bg-blue-500 hover:bg-blue-600",
      },
      green: {
        bg: "from-green-50 to-emerald-50",
        border: "border-green-200",
        text: "text-green-900",
        badge: "bg-green-100 text-green-700",
        button: "bg-green-500 hover:bg-green-600",
      },
    }
    return colors[color as keyof typeof colors] || colors.purple
  }

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Header */}
      <div className="text-center">
        <h3 className="mb-4 text-2xl font-bold text-gray-900">Visual Goal Tracking 🎯</h3>
        <p className="text-gray-600">
          Watch your dreams come to life as you save. Every milestone unlocks new visual elements!
        </p>
      </div>

      {/* Goal Selection */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100
          const colorClasses = getColorClasses(goal.color)
          const isSelected = selectedGoal.id === goal.id

          return (
            <Card
              key={goal.id}
              className={`cursor-pointer transition-all duration-200 ${
                isSelected
                  ? `${colorClasses.border} ring-2 ring-offset-2 ring-${goal.color}-200`
                  : "border-gray-200 hover:border-gray-300"
              }`}
              onClick={() => setSelectedGoal(goal)}
            >
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`rounded-full bg-gradient-to-r ${colorClasses.bg} p-2`}>{goal.icon}</div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{goal.name}</h4>
                    <p className="text-sm text-gray-600">{goal.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">₹{goal.current.toLocaleString()}</span>
                    <span className="font-medium">₹{goal.target.toLocaleString()}</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                  <div className="text-center">
                    <Badge className={colorClasses.badge}>{Math.round(progress)}% Complete</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Selected Goal Details */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Visual Progress */}
        <Card
          className={`${getColorClasses(selectedGoal.color).border} bg-gradient-to-br ${getColorClasses(selectedGoal.color).bg}`}
        >
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              {selectedGoal.icon}
              <span>{selectedGoal.name}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Progress Display */}
            <div className="text-center">
              <div className="mb-4 text-4xl font-bold text-gray-900">₹{selectedGoal.current.toLocaleString()}</div>
              <Progress value={(selectedGoal.current / selectedGoal.target) * 100} className="h-4 mb-2" />
              <p className="text-sm text-gray-600">
                ₹{(selectedGoal.target - selectedGoal.current).toLocaleString()} remaining
              </p>
            </div>

            {/* Visual Representation */}
            <div className="h-32 rounded-lg bg-gradient-to-t from-gray-800 via-gray-600 to-gray-400 relative overflow-hidden">
              {selectedGoal.id === "sunburn" && (
                <>
                  {/* Stage Frame (25%) */}
                  {selectedGoal.milestones[0].achieved && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-10 border-2 border-yellow-400 rounded-t-lg"></div>
                  )}

                  {/* Lights (50%) */}
                  {selectedGoal.milestones[1].achieved && (
                    <>
                      <div className="absolute top-3 left-1/4 w-3 h-3 rounded-full bg-yellow-300 animate-pulse"></div>
                      <div className="absolute top-3 right-1/4 w-3 h-3 rounded-full bg-yellow-300 animate-pulse"></div>
                      <div className="absolute top-3 left-1/3 w-2 h-2 rounded-full bg-red-300 animate-pulse"></div>
                      <div className="absolute top-3 right-1/3 w-2 h-2 rounded-full bg-blue-300 animate-pulse"></div>
                    </>
                  )}

                  {/* Crowd (75%) */}
                  {selectedGoal.milestones[2].achieved && (
                    <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent">
                      <div className="flex justify-center space-x-1 pt-1">
                        <div className="w-1 h-4 bg-white rounded-full opacity-70"></div>
                        <div className="w-1 h-3 bg-white rounded-full opacity-60"></div>
                        <div className="w-1 h-4 bg-white rounded-full opacity-80"></div>
                        <div className="w-1 h-2 bg-white rounded-full opacity-50"></div>
                        <div className="w-1 h-4 bg-white rounded-full opacity-70"></div>
                      </div>
                    </div>
                  )}

                  {/* Festival Logo */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="text-white font-bold text-sm">SUNBURN</div>
                    <div className="text-white text-xs text-center">GOA</div>
                  </div>
                </>
              )}

              {selectedGoal.id === "trip" && (
                <>
                  {/* Map outline */}
                  <div className="absolute inset-4 border-2 border-blue-300 rounded-lg opacity-50"></div>
                  {/* Destinations */}
                  {selectedGoal.milestones[0].achieved && (
                    <div className="absolute top-6 left-6 w-2 h-2 rounded-full bg-red-400"></div>
                  )}
                  {selectedGoal.milestones[1].achieved && (
                    <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-green-400"></div>
                  )}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                </>
              )}

              {selectedGoal.id === "gaming" && (
                <>
                  {/* Monitor */}
                  {selectedGoal.milestones[0].achieved && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-16 h-10 border-2 border-green-400 rounded"></div>
                  )}
                  {/* GPU */}
                  {selectedGoal.milestones[1].achieved && (
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-green-400 rounded"></div>
                  )}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Gamepad2 className="h-8 w-8 text-white" />
                  </div>
                </>
              )}
            </div>

            {/* Add Progress Buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Button
                onClick={() => addProgress(selectedGoal.id, 1000)}
                className={getColorClasses(selectedGoal.color).button}
                disabled={selectedGoal.current >= selectedGoal.target}
              >
                +₹1,000
              </Button>
              <Button
                onClick={() => addProgress(selectedGoal.id, 5000)}
                className={getColorClasses(selectedGoal.color).button}
                disabled={selectedGoal.current >= selectedGoal.target}
              >
                +₹5,000
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Milestones */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>Milestones</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedGoal.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                    milestone.achieved ? "bg-green-50 border border-green-200" : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <div className={`rounded-full p-1 ${milestone.achieved ? "bg-green-500" : "bg-gray-300"}`}>
                    {milestone.achieved ? (
                      <Star className="h-4 w-4 text-white" />
                    ) : (
                      <Target className="h-4 w-4 text-white" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${milestone.achieved ? "text-green-900" : "text-gray-700"}`}>
                        {milestone.percentage}% - {milestone.description}
                      </span>
                      {milestone.achieved && <Badge className="bg-green-100 text-green-700">Unlocked!</Badge>}
                    </div>
                    <p className="text-sm text-gray-600">
                      ₹{((milestone.percentage / 100) * selectedGoal.target).toLocaleString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Milestone */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-900 mb-2">Next Milestone</h4>
              {(() => {
                const nextMilestone = selectedGoal.milestones.find((m) => !m.achieved)
                if (nextMilestone) {
                  const amountNeeded = (nextMilestone.percentage / 100) * selectedGoal.target - selectedGoal.current
                  return (
                    <p className="text-sm text-blue-700">
                      Save ₹{amountNeeded.toLocaleString()} more to unlock: <strong>{nextMilestone.description}</strong>
                    </p>
                  )
                } else {
                  return <p className="text-sm text-blue-700">🎉 All milestones achieved! Goal completed!</p>
                }
              })()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Info Box */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardContent className="p-6">
          <h4 className="mb-3 font-semibold text-yellow-900">How Visual Goals Work</h4>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="space-y-2 text-sm text-yellow-800">
              <p>
                • <strong>25% Progress:</strong> Basic structure appears
              </p>
              <p>
                • <strong>50% Progress:</strong> Interactive elements activate
              </p>
            </div>
            <div className="space-y-2 text-sm text-yellow-800">
              <p>
                • <strong>75% Progress:</strong> Full scene comes alive
              </p>
              <p>
                • <strong>100% Progress:</strong> Goal celebration unlocked!
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
