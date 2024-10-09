import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

const MOBILE_WIDTH = 639;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isMobileScreen(innerWidth: number) {
  return innerWidth <= MOBILE_WIDTH;
}