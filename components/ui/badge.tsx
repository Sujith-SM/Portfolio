import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85", className)} {...props} />;
}
