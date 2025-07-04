import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BrainCircuit } from 'lucide-react';

export default function AiInsightsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <BrainCircuit className="h-8 w-8" />
        <div>
          <h1 className="text-3xl font-bold">AI Insights</h1>
          <p className="text-muted-foreground">AI-generated business suggestions and performance analysis.</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Today's Insights</CardTitle>
          <CardDescription>
            This is a placeholder for a more advanced AI insights panel.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <p className="font-semibold text-sm text-blue-800">🚀 Sales Opportunity</p>
                <p className="text-sm text-blue-700">Trending search data suggests a high demand for 'rose gold' items. Consider launching a new collection or promoting existing rose gold products.</p>
            </div>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                <p className="font-semibold text-sm text-green-800">✅ Top Performer</p>
                <p className="text-sm text-green-700">The 'Vintage Pearl Choker' has a 35% higher conversion rate on social media ads compared to other products. Allocate more budget to its campaign.</p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                <p className="font-semibold text-sm text-yellow-800">⚠️ Potential Issue</p>
                <p className="text-sm text-yellow-700">Customer feedback indicates confusion about the return policy. Suggestion: Simplify the policy page and add an FAQ section.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
