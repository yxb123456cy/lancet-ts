/**
 * String utility functions.
 */
export const StringUtils = {
  /**
   * Converts the first character of string to upper case.
   * @param str The string to convert.
   * @returns The converted string.
   */
  upperFirst(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Checks if value is classified as a String primitive or object.
   * @param value The value to check.
   * @returns Returns true if value is a string, else false.
   */
  isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String;
  },

  /**
   * Converts the first character of string to lower case.
   * @param str The string to convert.
   * @returns The converted string.
   */
  lowerFirst(str: string): string {
    if (!str) return '';
    return str.charAt(0).toLowerCase() + str.slice(1);
  },

  /**
   * Converts the first character of string to upper case and the remaining to lower case.
   * @param str The string to convert.
   * @returns The converted string.
   */
  capitalize(str: string): string {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  },

  /**
   * Pads string on the left and right sides if it's shorter than length. Padding characters are truncated if they can't be evenly divided by length.
   * @param str The string to pad.
   * @param length The padding length.
   * @param chars The string used as padding.
   * @returns The padded string.
   */
  pad(str: string, length: number, chars = ' '): string {
    if (str.length >= length) return str;
    const padLen = length - str.length;
    const leftPad = Math.floor(padLen / 2);
    const rightPad = padLen - leftPad;
    return (
      chars.repeat(Math.ceil(leftPad / chars.length)).slice(0, leftPad) +
      str +
      chars.repeat(Math.ceil(rightPad / chars.length)).slice(0, rightPad)
    );
  },

  /**
   * Pads string on the right side if it's shorter than length. Padding characters are truncated if they exceed length.
   * @param str The string to pad.
   * @param length The padding length.
   * @param chars The string used as padding.
   * @returns The padded string.
   */
  padEnd(str: string, length: number, chars = ' '): string {
    if (str.length >= length) return str;
    const padLen = length - str.length;
    return (
      str + chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen)
    );
  },

  /**
   * Pads string on the left side if it's shorter than length. Padding characters are truncated if they exceed length.
   * @param str The string to pad.
   * @param length The padding length.
   * @param chars The string used as padding.
   * @returns The padded string.
   */
  padStart(str: string, length: number, chars = ' '): string {
    if (str.length >= length) return str;
    const padLen = length - str.length;
    return (
      chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen) + str
    );
  },

  /**
   * Reverses the string.
   * @param str The string to reverse.
   * @returns The reversed string.
   */
  reverse(str: string): string {
    return Array.from(str).reverse().join('');
  },

  /**
   * Extracts a section of a string based on start position and length.
   * @param str The string to extract from.
   * @param start The start position.
   * @param length The length of the section.
   * @returns The extracted string.
   */
  substr(str: string, start: number, length?: number): string {
    if (length === undefined) {
      return str.slice(start);
    }
    if (length <= 0) return '';
    return str.slice(start, start + length);
  },

  /**
   * Checks if string is empty or contains only whitespace.
   * @param str The string to check.
   * @returns Returns true if string is empty or whitespace, else false.
   */
  isBlank(str: string): boolean {
    return !str || str.trim().length === 0;
  },

  /**
   * Truncates string if it's longer than the given maximum string length.
   * The last characters of the truncated string are replaced with the omission string which defaults to "...".
   * @param str The string to truncate.
   * @param length The maximum string length.
   * @param omission The string to indicate text is omitted.
   * @returns The truncated string.
   */
  truncate(str: string, length: number, omission = '...'): string {
    if (str.length <= length) return str;
    if (length <= omission.length) return omission.slice(0, length);
    return str.slice(0, length - omission.length) + omission;
  },
};
