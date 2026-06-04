import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export default function ClsxTest() {
  const isLarge = true;
  const isDisabled = false;

  // OLD WAY (clsx only) — has the bug:
  const badClasses = clsx("p-2", "p-4", "bg-blue-500", "text-white", isLarge && "p-6");
  // "p-2 p-4 bg-blue-500 text-white p-6" ← THREE paddings!

  // NEW WAY (twMerge fixes it):
  const goodClasses = twMerge("p-2", "p-40", "bg-blue-500", "text-white", isLarge && "p-6");
  // "bg-blue-500 text-white p-6" ← ONLY p-6 survives!

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className={badClasses}>
        BAD (clsx only): {badClasses}
      </div>
      <div className={goodClasses}>
        GOOD (twMerge): {goodClasses}
      </div>
    </div>
  );
}