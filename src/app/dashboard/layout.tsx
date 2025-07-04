'use client';

import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { SidebarNav } from '@/components/dashboard/sidebar-nav';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { User, Bell } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
        <Sidebar>
            <SidebarNav />
        </Sidebar>
        <SidebarInset>
            <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
                <SidebarTrigger className="sm:hidden" />
                <div className="flex-1">
                    <h1 className="font-semibold text-lg hidden sm:block">Admin Dashboard</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Button variant="ghost" size="icon">
                        <Bell className="h-5 w-5" />
                        <span className="sr-only">Notifications</span>
                    </Button>
                    <Button variant="ghost" size="icon">
                        <User className="h-5 w-5" />
                        <span className="sr-only">User profile</span>
                    </Button>
                </div>
            </header>
            <main className="flex-1 p-4 sm:p-6 bg-muted/40">
                {children}
            </main>
        </SidebarInset>
    </SidebarProvider>
  );
}
