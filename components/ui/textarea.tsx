import { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} className={cn("min-h-28 w-full rounded-xl border border-white/15 bg-white/5 p-4 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent", props.className)} />;
}
