'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Download, BookOpen, Send, CheckCircle, Hourglass } from "lucide-react";
import { employeeTasks, hrDocuments, hrAnnouncements } from "@/lib/mock-data";
import { LeaveBalanceChart } from "../charts/leave-balance-chart";

export function EmployeeDashboard() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Employee Dashboard</h1>
        <p className="text-muted-foreground">Your personal portal for tasks, leaves, and HR information.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>My Tasks</CardTitle>
            <CardDescription>Here are your tasks for this week. Keep up the great work!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {employeeTasks.map((task) => (
              <div key={task.id} className="p-3 border rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Checkbox id={`task-${task.id}`} defaultChecked={task.status === 'Completed'} />
                    <label htmlFor={`task-${task.id}`} className="font-medium">{task.title}</label>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {task.status === 'Completed' ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Hourglass className="h-4 w-4 text-yellow-500" />}
                    {task.status}
                  </div>
                </div>
                <Progress value={task.progress} className="mt-2 h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
        <div className="space-y-6">
            <LeaveBalanceChart />
            <Button size="lg" className="w-full"><Send className="mr-2 h-4 w-4" /> Apply for Leave</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
            <CardHeader>
                <CardTitle>Work Timeline</CardTitle>
            </CardHeader>
            <CardContent>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border p-0"
                />
            </CardContent>
        </Card>
        <Card className="lg:col-span-2">
            <CardHeader>
                <CardTitle>HR Corner</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative h-20 w-full overflow-hidden rounded-lg bg-accent p-4">
                    <div className="absolute inset-0 flex items-center animate-[scroll_15s_linear_infinite]">
                        {hrAnnouncements.map((ann, index) => (
                            <p key={index} className="text-accent-foreground font-medium whitespace-nowrap px-8">{ann.message}</p>
                        ))}
                         {hrAnnouncements.map((ann, index) => (
                            <p key={`dup-${index}`} className="text-accent-foreground font-medium whitespace-nowrap px-8">{ann.message}</p>
                        ))}
                    </div>
                    <style jsx>{`
                        @keyframes scroll {
                            from { transform: translateX(0); }
                            to { transform: translateX(-50%); }
                        }
                    `}</style>
                </div>
                <div className="mt-4 space-y-3">
                    <h4 className="font-semibold">Documents</h4>
                    {hrDocuments.map(doc => (
                        <div key={doc.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center gap-3">
                                <BookOpen className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="font-medium">{doc.title}</p>
                                    <p className="text-xs text-muted-foreground">{doc.date}</p>
                                </div>
                            </div>
                            <Button variant="outline" size="icon"><Download className="h-4 w-4"/></Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
      </div>

    </div>
  );
}
