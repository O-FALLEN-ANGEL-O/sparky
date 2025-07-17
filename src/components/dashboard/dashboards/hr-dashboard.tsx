'use client';
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getHrOnboardingTasks, getUserRoles, getPayrollData } from "@/lib/db";
import type { HrOnboardingTask, UserRole, Payroll } from "@/lib/mock-data";
import { PlusCircle, FileUp, Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { PayrollChart } from "../charts/payroll-chart";
import { Skeleton } from "@/components/ui/skeleton";

function DashboardSkeleton() {
    return (
        <div className="space-y-6">
            <Skeleton className="h-10 w-1/2" />
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent><Skeleton className="h-48 w-full" /></CardContent></Card>
                <Card><CardHeader><Skeleton className="h-6 w-1/2" /></CardHeader><CardContent className="space-y-2"><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /><Skeleton className="h-8 w-full" /></CardContent></Card>
            </div>
        </div>
    )
}

export function HRDashboard() {
  const [onboardingTasks, setOnboardingTasks] = useState<HrOnboardingTask[]>([]);
  const [employees, setEmployees] = useState<UserRole[]>([]);
  const [payrollData, setPayrollData] = useState<Payroll[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          const [tasks, users, payroll] = await Promise.all([
              getHrOnboardingTasks(),
              getUserRoles(),
              getPayrollData()
          ]);
          setOnboardingTasks(tasks);
          setEmployees(users.filter(u => u.role !== 'Owner'));
          setPayrollData(payroll);
          setLoading(false);
      }
      fetchData();
  }, []);

  if (loading) {
      return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-3xl font-bold">HR Dashboard</h1>
            <p className="text-muted-foreground">Manage employees, payroll, onboarding, and policies.</p>
        </div>
        <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Employee
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PayrollChart data={payrollData} />
        <Card>
            <CardHeader>
                <CardTitle>Onboarding Progress</CardTitle>
                <CardDescription>Status of new joinee, Alex Ray.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
                {onboardingTasks.map(task => (
                    <div key={task.id} className="flex items-center gap-3 p-2 border rounded-md">
                        <Checkbox defaultChecked={task.completed} />
                        <label className="text-sm font-medium">{task.task}</label>
                    </div>
                ))}
            </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
            <CardTitle>Employee Directory</CardTitle>
            <CardDescription>Search and manage all employees in the organization.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center gap-2 mb-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Search by name or email..." className="pl-10" />
                </div>
                <Button variant="outline"><FileUp className="mr-2 h-4 w-4" /> Manage Policies</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Last Activity</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {employees.map((user) => (
                    <TableRow key={user.id}>
                        <TableCell>
                        <div className="flex items-center gap-3">
                            <Avatar>
                            <AvatarImage src={`https://placehold.co/40x40`} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">
                                {user.email}
                            </div>
                            </div>
                        </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant="secondary">{user.role}</Badge>
                        </TableCell>
                        <TableCell>{user.lastActivity}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
      </Card>
    </div>
  );
}
