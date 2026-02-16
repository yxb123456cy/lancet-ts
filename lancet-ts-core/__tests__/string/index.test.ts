import { describe, expect, test } from '@rstest/core';
import { StringUtils } from '../../src/string';

describe('StringUtils', () => {
  describe('upperFirst', () => {
    test('should uppercase first character', () => {
      expect(StringUtils.upperFirst('fred')).toBe('Fred');
      expect(StringUtils.upperFirst('FRED')).toBe('FRED');
    });
    test('should return empty string for empty input', () => {
      expect(StringUtils.upperFirst('')).toBe('');
    });
  });

  describe('isString', () => {
    test('should return true for string primitives', () => {
      expect(StringUtils.isString('abc')).toBe(true);
    });
    test('should return true for String objects', () => {
      expect(StringUtils.isString(new String('abc'))).toBe(true);
    });
    test('should return false for non-strings', () => {
      expect(StringUtils.isString(1)).toBe(false);
      expect(StringUtils.isString(null)).toBe(false);
      expect(StringUtils.isString({})).toBe(false);
    });
  });

  describe('lowerFirst', () => {
    test('should lowercase first character', () => {
      expect(StringUtils.lowerFirst('Fred')).toBe('fred');
      expect(StringUtils.lowerFirst('FRED')).toBe('fRED');
    });
    test('should return empty string for empty input', () => {
      expect(StringUtils.lowerFirst('')).toBe('');
    });
  });

  describe('capitalize', () => {
    test('should capitalize first char and lowercase the rest', () => {
      expect(StringUtils.capitalize('fred')).toBe('Fred');
      expect(StringUtils.capitalize('FRED')).toBe('Fred');
    });
  });

  describe('pad', () => {
    test('should pad string on both sides', () => {
      expect(StringUtils.pad('abc', 8)).toBe('  abc   '); // 8-3=5, left 2, right 3
      expect(StringUtils.pad('abc', 8, '_-')).toBe('_-abc_-_');
    });
    test('should not pad if length is less than string length', () => {
      expect(StringUtils.pad('abc', 2)).toBe('abc');
    });
  });

  describe('padEnd', () => {
    test('should pad string on the right', () => {
      expect(StringUtils.padEnd('abc', 6)).toBe('abc   ');
      expect(StringUtils.padEnd('abc', 6, '_-')).toBe('abc_-_');
    });
  });

  describe('padStart', () => {
    test('should pad string on the left', () => {
      expect(StringUtils.padStart('abc', 6)).toBe('   abc');
      expect(StringUtils.padStart('abc', 6, '_-')).toBe('_-_abc');
    });
  });

  describe('reverse', () => {
    test('should reverse string', () => {
      expect(StringUtils.reverse('abc')).toBe('cba');
    });
    test('should handle unicode characters', () => {
      expect(StringUtils.reverse('foo 𝌆 bar')).toBe('rab 𝌆 oof');
    });
  });

  describe('substr', () => {
    test('should extract substring by start and length', () => {
      expect(StringUtils.substr('abcdef', 1, 2)).toBe('bc');
    });
    test('should handle omission of length', () => {
      expect(StringUtils.substr('abcdef', 1)).toBe('bcdef');
    });
    test('should return empty string if length <= 0', () => {
      expect(StringUtils.substr('abcdef', 1, 0)).toBe('');
      expect(StringUtils.substr('abcdef', 1, -1)).toBe('');
    });
  });

  describe('isBlank', () => {
    test('should return true for empty or whitespace string', () => {
      expect(StringUtils.isBlank('')).toBe(true);
      expect(StringUtils.isBlank('   ')).toBe(true);
      expect(StringUtils.isBlank('\t\n')).toBe(true);
    });
    test('should return false for non-blank string', () => {
      expect(StringUtils.isBlank('a')).toBe(false);
      expect(StringUtils.isBlank(' a ')).toBe(false);
    });
  });

  describe('truncate', () => {
    test('should truncate string', () => {
      expect(StringUtils.truncate('hi-diddly-ho there, neighborino', 24)).toBe(
        'hi-diddly-ho there, n...',
      );
    });
    test('should allow custom omission', () => {
      expect(
        StringUtils.truncate('hi-diddly-ho there, neighborino', 24, '...'),
      ).toBe('hi-diddly-ho there, n...');
      expect(
        StringUtils.truncate('hi-diddly-ho there, neighborino', 24, '!'),
      ).toBe('hi-diddly-ho there, nei!');
    });
    test('should not truncate if shorter', () => {
      expect(StringUtils.truncate('abc', 10)).toBe('abc');
    });
    test('should handle truncation where omission is longer than length', () => {
      expect(StringUtils.truncate('abc', 2)).toBe('..'); // omission default '...' length 3. Logic: if length <= omission.length return omission.slice(0, length)
    });
  });
});
