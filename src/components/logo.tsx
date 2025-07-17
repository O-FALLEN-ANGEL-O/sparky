import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <svg
        className="h-7 w-7 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M16.18,9.55a4.32,4.32,0,0,1-3.23,3.23L12,13.25l-1-1.73L8.45,12.77A4.32,4.32,0,0,1,5.22,9.55L8,8.27,9.23,6,12,8l2,1.15Z"
          fill="currentColor"
        />
        <path
          d="M18.78,9.55a4.32,4.32,0,0,0-3.23-3.23L12,5.75l-1-1.73-2.52-1.25A4.32,4.32,0,0,0,5.22,6.L8,7.73,9.23,10,12,7.27l2,1.15,2.77,2.77.55-2.64Z"
          fill="currentColor"
          opacity="0.5"
        />
        <path
          d="M12 2L10 7L12 12L14 7L12 2Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
      <span className="font-bold text-xl font-headline">Sparkle</span>
    </Link>
  );
}
