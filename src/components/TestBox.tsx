import { cn } from "@/lib/utils";

export function TestBox({ large, className }: { large?: boolean, className?: string }) {
  return (
    <div
      className={cn(
        "text-sm font-bold text-black",
        "text-lg",
        "text-6xl",
        "text-blue-500",
        "font-normal",
        "text-center",
        large &&  "text-red-700 text-2xl max-w-3xl", className // c "text-blue-500"n will override p-2 → p-6
      )}
    >
      Test Box from TestBox component
    </div>
  );
}
