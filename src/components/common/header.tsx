'use client';

import Link from 'next/link';
import { User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '../logo';
import { AISearch } from './ai-search';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#new-arrivals', label: 'New Arrivals' },
  { href: '/dashboard', label: 'Dashboard' },
];

export default function Header() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        className={cn(
          'transition-colors hover:text-foreground/80',
          pathname === link.href ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        {link.label}
      </Link>
    ));

  if (isMobile) {
    return (
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <Logo />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                {renderNavLinks()}
                <div className="flex-1" />
                  <AISearch />
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/cart"><ShoppingCart className="h-5 w-5" /></Link>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard"><User className="h-5 w-5" /></Link>
                  </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Logo />
        <nav className="hidden md:flex gap-6 text-sm font-medium ml-10">
          {renderNavLinks()}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="w-full max-w-sm">
            <AISearch />
          </div>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/dashboard">
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
