'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, Menu, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from '../logo';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { AISearch } from './ai-search';
import { ThemeToggle } from './theme-toggle';

const navLinks = [
  { href: '/#collections', label: 'Collections' },
  { href: '/products/1', label: 'Rings' },
  { href: '/products/2', label: 'Necklaces' },
  { href: '/products/4', label: 'Bracelets' },
  { href: '#', label: 'About Us' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // A small optimization to avoid setting state on initial render if window.scrollY is 0
    if (typeof window !== 'undefined' && window.scrollY > 10) {
      setScrolled(true);
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Use a variable for common icon button classes to avoid repetition
  const iconButtonClasses = cn(scrolled ? '' : 'text-white hover:bg-white/10 focus-visible:bg-white/10 data-[state=open]:bg-white/10');

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      scrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent border-b border-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <Logo className={cn(scrolled ? 'text-foreground' : 'text-white')} />
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-foreground' : 'text-white',
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:w-auto">
          <AISearch className={iconButtonClasses} />
          <ThemeToggle className={iconButtonClasses} />

          {isLoggedIn ? (
            <Button variant="ghost" size="icon" className={iconButtonClasses}>
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
          ) : (
            <Button asChild variant="outline" className={cn(scrolled ? '' : 'text-white border-white/50 hover:bg-white/10')}>
              <Link href="/dashboard">Login</Link>
            </Button>
          )}

          <Button variant="ghost" size="icon" asChild className={cn('relative', iconButtonClasses)}>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                2
              </span>
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('md:hidden', iconButtonClasses)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-background">
              <nav className="flex flex-col gap-6 text-lg font-medium mt-8">
                <Logo />
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsSheetOpen(false)}
                    className={cn(
                      'transition-colors hover:text-primary',
                      pathname === link.href ? 'text-primary' : 'text-foreground'
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
