import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Factory } from 'lucide-react';

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Factory className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">Live Inventory Feed</h1>
          <p className="text-muted-foreground">Real-time view of stock levels across all stores.</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Inventory Status</CardTitle>
          <CardDescription>
            This is a placeholder for the live inventory feed. A marquee or live-polling table would be implemented here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg">
            <p className="text-muted-foreground">Live Inventory Component</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
