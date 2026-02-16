import { describe, expect, test } from '@rstest/core';
import { MathUtils } from '../../src/math';

describe('MathUtils', () => {
  describe('mean', () => {
    test('should calculate mean of numbers', () => {
      expect(MathUtils.mean([1, 2, 3, 4, 5])).toBe(3);
    });
    test('should return 0 for empty array', () => {
      expect(MathUtils.mean([])).toBe(0);
    });
  });

  describe('pow', () => {
    test('should calculate power', () => {
      expect(MathUtils.pow(2, 3)).toBe(8);
      expect(MathUtils.pow(5, 0)).toBe(1);
    });
  });

  describe('factorial', () => {
    test('should calculate factorial', () => {
      expect(MathUtils.factorial(0)).toBe(1);
      expect(MathUtils.factorial(1)).toBe(1);
      expect(MathUtils.factorial(5)).toBe(120);
    });
    test('should throw error for negative numbers', () => {
      expect(() => MathUtils.factorial(-1)).toThrowError();
    });
  });

  describe('max', () => {
    test('should return max number', () => {
      expect(MathUtils.max([1, 5, 3])).toBe(5);
    });
    test('should return -Infinity for empty array', () => {
      expect(MathUtils.max([])).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  describe('min', () => {
    test('should return min number', () => {
      expect(MathUtils.min([1, 5, 3])).toBe(1);
    });
    test('should return Infinity for empty array', () => {
      expect(MathUtils.min([])).toBe(Number.POSITIVE_INFINITY);
    });
  });

  describe('percent', () => {
    test('should calculate percentage', () => {
      expect(MathUtils.percent(50, 200)).toBe(25);
    });
    test('should handle decimals', () => {
      expect(MathUtils.percent(1, 3, 2)).toBe(33.33);
    });
    test('should return 0 if total is 0', () => {
      expect(MathUtils.percent(50, 0)).toBe(0);
    });
  });

  describe('round', () => {
    test('should round number', () => {
      expect(MathUtils.round(1.234, 2)).toBe(1.23);
      expect(MathUtils.round(1.235, 2)).toBe(1.24);
    });
  });

  describe('roundStr', () => {
    test('should round number to string', () => {
      expect(MathUtils.roundStr(1.234, 2)).toBe('1.23');
      expect(MathUtils.roundStr(1.235, 2)).toBe('1.24');
    });
  });

  describe('ceil', () => {
    test('should ceil number', () => {
      expect(MathUtils.ceil(1.234, 2)).toBe(1.24);
      expect(MathUtils.ceil(1.231, 2)).toBe(1.24);
    });
  });

  describe('ceilStr', () => {
    test('should ceil number to string', () => {
      expect(MathUtils.ceilStr(1.234, 2)).toBe('1.24');
      expect(MathUtils.ceilStr(1.231, 2)).toBe('1.24');
    });
  });

  describe('floor', () => {
    test('should floor number', () => {
      expect(MathUtils.floor(1.239, 2)).toBe(1.23);
      expect(MathUtils.floor(1.231, 2)).toBe(1.23);
    });
  });

  describe('floorStr', () => {
    test('should floor number to string', () => {
      expect(MathUtils.floorStr(1.239, 2)).toBe('1.23');
      expect(MathUtils.floorStr(1.231, 2)).toBe('1.23');
    });
  });

  describe('isPrime', () => {
    test('should check if number is prime', () => {
      expect(MathUtils.isPrime(2)).toBe(true);
      expect(MathUtils.isPrime(3)).toBe(true);
      expect(MathUtils.isPrime(4)).toBe(false);
      expect(MathUtils.isPrime(17)).toBe(true);
      expect(MathUtils.isPrime(1)).toBe(false);
    });
  });

  describe('gcd', () => {
    test('should calculate gcd', () => {
      expect(MathUtils.gcd(12, 18)).toBe(6);
      expect(MathUtils.gcd(8, 12)).toBe(4);
    });
  });

  describe('lcm', () => {
    test('should calculate lcm', () => {
      expect(MathUtils.lcm(12, 18)).toBe(36);
      expect(MathUtils.lcm(8, 12)).toBe(24);
    });
    test('should return 0 if any input is 0', () => {
      expect(MathUtils.lcm(0, 5)).toBe(0);
    });
  });

  describe('sum', () => {
    test('should sum numbers', () => {
      expect(MathUtils.sum([1, 2, 3])).toBe(6);
    });
    test('should return 0 for empty array', () => {
      expect(MathUtils.sum([])).toBe(0);
    });
  });

  describe('abs', () => {
    test('should return absolute value', () => {
      expect(MathUtils.abs(-5)).toBe(5);
      expect(MathUtils.abs(5)).toBe(5);
    });
  });

  describe('div', () => {
    test('should divide numbers', () => {
      expect(MathUtils.div(10, 2)).toBe(5);
    });
    test('should throw error when dividing by zero', () => {
      expect(() => MathUtils.div(10, 0)).toThrowError();
    });
  });

  describe('variance', () => {
    test('should calculate variance', () => {
      // mean = 3, diffs = [-2, -1, 0, 1, 2], sqDiffs = [4, 1, 0, 1, 4], meanSqDiff = 10/5 = 2
      expect(MathUtils.variance([1, 2, 3, 4, 5])).toBe(2);
    });
    test('should return 0 for empty array', () => {
      expect(MathUtils.variance([])).toBe(0);
    });
  });

  describe('stdDev', () => {
    test('should calculate standard deviation', () => {
      // sqrt(2) approx 1.414
      expect(MathUtils.stdDev([1, 2, 3, 4, 5])).toBeCloseTo(1.414, 3);
    });
  });
});
