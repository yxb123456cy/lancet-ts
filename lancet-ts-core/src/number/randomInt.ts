/**
 * Generates a random integer between min and max (inclusive).
 * @param min The minimum value (inclusive).
 * @param max The maximum value (inclusive).
 * @returns A random integer between min and max.
 * @throws Error if min is greater than max.
 */
export function randomInt(min: number, max: number): number {
  if (min > max) {
    throw new Error('min must be less than or equal to max');
  }

  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);

  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
}
