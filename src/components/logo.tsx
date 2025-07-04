import Link from 'next/link';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <Heart className="h-6 w-6 text-primary fill-primary" />
      <span className="font-bold text-xl font-headline">Sparkle</span>
    </Link>
  );
}
