import { describe, test, expect } from '@rstest/core';
import { randomInt } from '../../src/number/randomInt';

describe('randomInt', () => {
  test('should return a number within the range', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
    }
  });

  test('should return min if min equals max', () => {
    expect(randomInt(5, 5)).toBe(5);
  });

  test('should handle negative numbers', () => {
    const result = randomInt(-10, -1);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-1);
  });

  test('should throw error if min > max', () => {
    expect(() => randomInt(10, 5)).toThrowError(
      'min must be less than or equal to max',
    );
  });

  test('should handle non-integer inputs by ceiling min and flooring max', () => {
    // randomInt(1.5, 4.5) -> range [2, 4]
    const result = randomInt(1.5, 4.5);
    expect(result).toBeGreaterThanOrEqual(2);
    expect(result).toBeLessThanOrEqual(4);
    expect(Number.isInteger(result)).toBe(true);
  });
});
