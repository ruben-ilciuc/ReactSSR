import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges and deduplicates Tailwind CSS class names.
 *
 * This utility function combines `clsx` for conditional class handling
 * and `twMerge` for intelligent Tailwind class merging. It resolves
 * conflicts between Tailwind classes (e.g., `p-4` and `p-2` will result
 * in only `p-2` being applied).
 *
 * @param inputs - Variable number of class values that can be strings,
 *   objects, arrays, or any combination thereof
 * @returns A single string of merged and deduplicated class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts an object of attributes into a stringified HTML attributes string.
 *
 * This function filters out undefined and null values, handles boolean
 * attributes (where `true` renders as the attribute name and `false` is omitted),
 * and converts all other values to strings.
 *
 * @param attributes - An object where keys are attribute names and values
 *   can be strings, numbers, or booleans
 * @returns A space-separated string of HTML attributes in the format
 *   `key="value"` or just `key` for boolean attributes
 */
export function createAttributesStringified(
  attributes: Record<string, string | number | boolean>,
) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null)
    .map(([key, value]) => {
      if (typeof value === 'boolean') {
        return value ? key : '';
      }
      return `${key}="${String(value)}"`;
    })
    .filter(Boolean)
    .join(' ');
}
