'use client';

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold capitalize",
  {
    variants: {
      level: {
        low: "bg-green-100 text-green-800 border-transparent",
        medium: "bg-yellow-100 text-yellow-800 border-transparent",
        high: "bg-red-100 text-red-800 border-transparent",
      },
    },
  }
)

export interface RiskScoreBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {
    score: number;
}

export function RiskScoreBadge({ className, score, ...props }: RiskScoreBadgeProps) {
    let level: "low" | "medium" | "high" = "low";
    if (score > 3 && score <= 6) {
        level = "medium";
    } else if (score > 6) {
        level = "high";
    }
    
    return (
        <div className={cn(badgeVariants({ level }), className)} {...props}>
            {level} ({score})
        </div>
    )
}
