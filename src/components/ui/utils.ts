import { clsx, type ClassValue } from "clsx@2.0.0";
import { twMerge } from "tailwind-merge@2.2.1";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
