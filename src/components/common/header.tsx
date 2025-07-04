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
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = !scrolled;

  const textClass = isTransparent ? 'text-secondary-foreground' : 'text-foreground';
  
  const iconButtonClass = cn(
    'hover:text-primary focus-visible:text-primary transition-colors',
    textClass
  );

  const outlineButtonClass = cn(
    'transition-colors',
    isTransparent
      ? 'border-secondary-foreground/50 hover:bg-secondary-foreground hover:text-secondary'
      : 'border-border',
    textClass
  );
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isTransparent ? "bg-transparent" : "bg-background/80 backdrop-blur-sm border-b"
    )}>
      <div className="container flex h-20 items-center">
        <Logo className={textClass} />
        
        <nav className="hidden md:flex flex-1 items-center justify-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                textClass,
                pathname === link.href && 'text-primary'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 md:w-auto">
          <AISearch className={iconButtonClass} />
          <ThemeToggle className={iconButtonClass} />

          {isLoggedIn ? (
            <Button variant="ghost" size="icon" className={iconButtonClass}>
              <User className="h-5 w-5" />
              <span className="sr-only">User Profile</span>
            </Button>
          ) : (
            <Button asChild variant="outline" className={outlineButtonClass}>
              <Link href="/dashboard">Login</Link>
            </Button>
          )}

          <Button variant="ghost" size="icon" asChild className={cn('relative', iconButtonClass)}>
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
              <Button variant="ghost" size="icon" className={cn('md:hidden', iconButtonClass)}>
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
