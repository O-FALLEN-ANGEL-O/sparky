"use client"

import { Bar, BarChart, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip, Legend } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { teamTaskData } from "@/lib/mock-data"

export function TaskTrackerChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Assigned Tasks Tracker</CardTitle>
        <CardDescription>Number of tasks assigned to each team member.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={teamTaskData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip
                        contentStyle={{
                            background: "hsl(var(--background))",
                            border: "1px solid hsl(var(--border))",
                        }}
                    />
                    <Legend />
                    <Bar dataKey="completed" stackId="a" fill="hsl(var(--chart-1))" name="Completed" />
                    <Bar dataKey="pending" stackId="a" fill="hsl(var(--chart-2))" name="Pending" />
                </BarChart>
            </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
