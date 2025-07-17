'use client';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { getOrders } from '@/lib/db';
import type { Order } from '@/lib/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { useEffect, useState } from 'react';

export function RecentOrdersTable() {
  const [recentOrders, setRecentOrders] = useState<Order[]>([]);
  
  useEffect(() => {
    getOrders().then(setRecentOrders);
  }, []);

  if (!recentOrders.length) {
    return <div>Loading orders...</div>
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Customer</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentOrders.map((order) => (
          <TableRow key={order.id}>
            <TableCell>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={order.customer.avatar} alt={order.customer.name} data-ai-hint="person face" />
                  <AvatarFallback>{order.customer.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{order.customer.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {order.customer.email}
                  </div>
                </div>
              </div>
            </TableCell>
            <TableCell>
              <Badge
                variant={
                  order.status === 'Delivered'
                    ? 'default'
                    : order.status === 'Cancelled'
                    ? 'destructive'
                    : 'secondary'
                }
              >
                {order.status}
              </Badge>
            </TableCell>
            <TableCell className="text-right">${order.total.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
