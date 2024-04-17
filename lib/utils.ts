import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const handleError = (error: unknown) => {
  console.error(error);
  throw new Error(typeof error === "string" ? error : JSON.stringify(error));
};

export const convertFileToUrl = (file: File) => URL.createObjectURL(file);

export const convertUrlToFile = async (
  url: string,
  filename: string
): Promise<File> => {
  const response = await fetch(url);
  const blob = await response.blob();

  return new File([blob], filename);
};