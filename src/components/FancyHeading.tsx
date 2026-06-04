import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

type FancyHeadingProps = {
  variant?: "primary" | "secondary" | "default";
  title: string;
}

function getVariantClass(variant: string) {
  switch (variant) {
    case "primary":
      return "text-5xl text-green-500";
    case "secondary":
      return "text-5xl text-blue-500";
    default:
      return "text-5xl text-gray-800";
  }
}

export function FancyHeading({ variant = "default", title }: FancyHeadingProps) {
  return (
    <h1 className={twMerge(clsx("text-center", getVariantClass(variant)))}>
      {title}
    </h1>
  );
}