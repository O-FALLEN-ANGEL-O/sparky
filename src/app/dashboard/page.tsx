import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { DollarSign, TrendingUp, Users, Store } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { RecentOrdersTable } from '@/components/dashboard/recent-orders-table';

const kpiCards = [
    { title: "Total Sales", value: "$1,250,430.50", description: "+12.5% this month", icon: DollarSign, color: "text-green-500" },
    { title: "Growth", value: "+23.8%", description: "vs. previous quarter", icon: TrendingUp, color: "text-blue-500" },
    { title: "Active Users", value: "1,492", description: "+150 today", icon: Users, color: "text-indigo-500" },
    { title: "Total Stores", value: "24", description: "3 new stores added", icon: Store, color: "text-purple-500" },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold">Global Overview</h1>
            <p className="text-muted-foreground">Top-level metrics for your entire operation.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {kpiCards.map(card => (
            <Card key={card.title} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                    <card.icon className={`h-5 w-5 ${card.color}`} />
                </CardHeader>
                <CardContent>
                    <div className="text-3xl font-bold">{card.value}</div>
                    <p className="text-xs text-muted-foreground">{card.description}</p>
                </CardContent>
            </Card>
        ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
                <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                    A list of the most recent orders from your store.
                </CardDescription>
                </CardHeader>
                <CardContent>
                <Suspense fallback={<Skeleton className="h-[200px] w-full" />}>
                    <RecentOrdersTable />
                </Suspense>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>AI Insights</CardTitle>
                    <CardDescription>
                        Suggestions to improve your business.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                     <div className="bg-blue-50 border border-blue-200 p-3 rounded-lg">
                        <p className="font-semibold text-sm text-blue-800">🚀 Suggestion</p>
                        <p className="text-sm text-blue-700">Consider a 15% discount on 'Emerald Pendant Necklace' to boost sales by an estimated 25% this week.</p>
                     </div>
                     <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                        <p className="font-semibold text-sm text-yellow-800">⚠️ Low Stock Alert</p>
                        <p className="text-sm text-yellow-700">'Diamond Tennis Bracelet' is running low. Only 7 units left. Reorder soon.</p>
                     </div>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
