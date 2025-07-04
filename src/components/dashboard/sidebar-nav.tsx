'use client';

import { usePathname } from 'next/navigation';
import { LayoutDashboard, ShoppingCart, Package, Users, Settings } from 'lucide-react';
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter
} from '@/components/ui/sidebar';
import { Logo } from '../logo';
import { Badge } from '../ui/badge';

const menuItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/orders', label: 'Orders', icon: ShoppingCart, badge: '6' },
  { href: '/dashboard/products', label: 'Products', icon: Package },
  { href: '/dashboard/staff', label: 'Staff', icon: Users },
];

const settingsItem = { href: '/dashboard/settings', label: 'Settings', icon: Settings };

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <Logo />
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                href={item.href}
                asChild
                isActive={pathname === item.href}
              >
                <item.icon />
                <span>{item.label}</span>
                {item.badge && <Badge className="ml-auto">{item.badge}</Badge>}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    href={settingsItem.href}
                    asChild
                    isActive={pathname === settingsItem.href}
                >
                    <settingsItem.icon />
                    <span>{settingsItem.label}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
