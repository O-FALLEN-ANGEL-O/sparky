import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { StatsCard } from '@/components/dashboard/stats-card';
import { RecentOrdersTable } from '@/components/dashboard/recent-orders-table';
import { DollarSign, CreditCard, Users, Activity } from 'lucide-react';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Revenue"
          value="$45,231.89"
          description="+20.1% from last month"
          icon={DollarSign}
        />
        <StatsCard
          title="Subscriptions"
          value="+2350"
          description="+180.1% from last month"
          icon={Users}
        />
        <StatsCard
          title="Sales"
          value="+12,234"
          description="+19% from last month"
          icon={CreditCard}
        />
        <StatsCard
          title="Active Now"
          value="+573"
          description="+201 since last hour"
          icon={Activity}
        />
      </div>
      <Card>
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
    </div>
  );
}
