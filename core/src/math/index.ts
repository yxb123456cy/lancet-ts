/**
 * Math utility functions.
 */
export const MathUtils = {
  /**
   * Calculates the mean (average) of an array of numbers.
   * @param numbers The array of numbers.
   * @returns The mean value.
   */
  mean(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    return MathUtils.sum(numbers) / numbers.length;
  },

  /**
   * Calculates the base to the exponent power.
   * @param base The base number.
   * @param exponent The exponent.
   * @returns The result of base^exponent.
   */
  pow(base: number, exponent: number): number {
    return Math.pow(base, exponent);
  },

  /**
   * Calculates the factorial of a non-negative integer.
   * @param n The number.
   * @returns The factorial of n.
   * @throws Error if n is negative.
   */
  factorial(n: number): number {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers');
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  },

  /**
   * Returns the maximum value in an array of numbers.
   * @param numbers The array of numbers.
   * @returns The maximum value.
   */
  max(numbers: number[]): number {
    if (numbers.length === 0) return Number.NEGATIVE_INFINITY;
    return Math.max(...numbers);
  },

  /**
   * Returns the minimum value in an array of numbers.
   * @param numbers The array of numbers.
   * @returns The minimum value.
   */
  min(numbers: number[]): number {
    if (numbers.length === 0) return Number.POSITIVE_INFINITY;
    return Math.min(...numbers);
  },

  /**
   * Calculates the percentage of a value relative to a total, rounded to n decimals.
   * @param value The value.
   * @param total The total.
   * @param decimals The number of decimals to keep (default 2).
   * @returns The percentage value.
   */
  percent(value: number, total: number, decimals = 2): number {
    if (total === 0) return 0;
    return MathUtils.round((value / total) * 100, decimals);
  },

  /**
   * Rounds a number to a specified number of decimals.
   * @param value The number to round.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded number.
   */
  round(value: number, decimals = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.round(value * factor) / factor;
  },

  /**
   * Rounds a number to a specified number of decimals and returns it as a string.
   * @param value The number to round.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded number as a string.
   */
  roundStr(value: number, decimals = 0): string {
    return value.toFixed(decimals);
  },

  /**
   * Rounds a number up to a specified number of decimals.
   * @param value The number to round up.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded up number.
   */
  ceil(value: number, decimals = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.ceil(value * factor) / factor;
  },

  /**
   * Rounds a number up to a specified number of decimals and returns it as a string.
   * @param value The number to round up.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded up number as a string.
   */
  ceilStr(value: number, decimals = 0): string {
    return MathUtils.ceil(value, decimals).toFixed(decimals);
  },

  /**
   * Rounds a number down to a specified number of decimals.
   * @param value The number to round down.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded down number.
   */
  floor(value: number, decimals = 0): number {
    const factor = Math.pow(10, decimals);
    return Math.floor(value * factor) / factor;
  },

  /**
   * Rounds a number down to a specified number of decimals and returns it as a string.
   * @param value The number to round down.
   * @param decimals The number of decimals (default 0).
   * @returns The rounded down number as a string.
   */
  floorStr(value: number, decimals = 0): string {
    return MathUtils.floor(value, decimals).toFixed(decimals);
  },

  /**
   * Checks if a number is a prime number.
   * @param n The number to check.
   * @returns True if n is prime, false otherwise.
   */
  isPrime(n: number): boolean {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 === 0 || n % 3 === 0) return false;
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
  },

  /**
   * Calculates the Greatest Common Divisor (GCD) of two numbers.
   * @param a The first number.
   * @param b The second number.
   * @returns The GCD of a and b.
   */
  gcd(a: number, b: number): number {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  },

  /**
   * Calculates the Least Common Multiple (LCM) of two numbers.
   * @param a The first number.
   * @param b The second number.
   * @returns The LCM of a and b.
   */
  lcm(a: number, b: number): number {
    if (a === 0 || b === 0) return 0;
    return Math.abs(a * b) / MathUtils.gcd(a, b);
  },

  /**
   * Calculates the sum of an array of numbers.
   * @param numbers The array of numbers.
   * @returns The sum.
   */
  sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  },

  /**
   * Returns the absolute value of a number.
   * @param n The number.
   * @returns The absolute value.
   */
  abs(n: number): number {
    return Math.abs(n);
  },

  /**
   * Divides two numbers.
   * @param a The dividend.
   * @param b The divisor.
   * @returns The result of a / b.
   * @throws Error if dividing by zero.
   */
  div(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero');
    return a / b;
  },

  /**
   * Calculates the variance of an array of numbers.
   * @param numbers The array of numbers.
   * @returns The variance.
   */
  variance(numbers: number[]): number {
    if (numbers.length === 0) return 0;
    const mean = MathUtils.mean(numbers);
    const squareDiffs = numbers.map((n) => Math.pow(n - mean, 2));
    return MathUtils.mean(squareDiffs);
  },

  /**
   * Calculates the standard deviation of an array of numbers.
   * @param numbers The array of numbers.
   * @returns The standard deviation.
   */
  stdDev(numbers: number[]): number {
    return Math.sqrt(MathUtils.variance(numbers));
  },
};
