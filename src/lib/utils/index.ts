import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function to conditionally join and merge Tailwind CSS classes.
 * You will need to install 'clsx' and 'tailwind-merge' via your package manager.
 * * @param inputs - An array of ClassValue (strings, objects, or arrays)
 * @returns A single merged string of unique Tailwind classes.
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
