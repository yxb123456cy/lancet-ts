/**
 * 字符串工具函数
 */
export const StringUtils = {
  /**
   * 将字符串的首字母转换为大写
   * @param {string} str 要转换的字符串
   * @returns {string} 转换后的字符串
   * @version 1.0.0
   */
  upperFirst(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  },

  /**
   * 检查值是否为字符串原始值或对象
   * @param {unknown} value 要检查的值
   * @returns {boolean} 如果值是字符串则返回 true，否则返回 false
   * @version 1.0.0
   */
  isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String
  },

  /**
   * 将字符串的首字母转换为小写
   * @param {string} str 要转换的字符串
   * @returns {string} 转换后的字符串
   * @version 1.0.0
   */
  lowerFirst(str: string): string {
    if (!str) return ''
    return str.charAt(0).toLowerCase() + str.slice(1)
  },

  /**
   * 将字符串的首字母转换为大写，其余字符转换为小写
   * @param {string} str 要转换的字符串
   * @returns {string} 转换后的字符串
   * @version 1.0.0
   */
  capitalize(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  },

  /**
   * 如果字符串长度小于指定长度，则在左右两侧填充字符。如果填充字符无法均匀分配，则会被截断。
   * @param {string} str 要填充的字符串
   * @param {number} length 填充后的长度
   * @param {string} chars 用于填充的字符串（默认为空格）
   * @returns {string} 填充后的字符串
   * @version 1.0.0
   */
  pad(str: string, length: number, chars: string = ' '): string {
    if (str.length >= length) return str
    const padLen = length - str.length
    const leftPad = Math.floor(padLen / 2)
    const rightPad = padLen - leftPad
    return (
      chars.repeat(Math.ceil(leftPad / chars.length)).slice(0, leftPad) +
      str +
      chars.repeat(Math.ceil(rightPad / chars.length)).slice(0, rightPad)
    )
  },

  /**
   * 如果字符串长度小于指定长度，则在右侧填充字符。如果填充字符超过长度，则会被截断。
   * @param {string} str 要填充的字符串
   * @param {number} length 填充后的长度
   * @param {string} chars 用于填充的字符串（默认为空格）
   * @returns {string} 填充后的字符串
   * @version 1.0.0
   */
  padEnd(str: string, length: number, chars: string = ' '): string {
    if (str.length >= length) return str
    const padLen = length - str.length
    return str + chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen)
  },

  /**
   * 如果字符串长度小于指定长度，则在左侧填充字符。如果填充字符超过长度，则会被截断。
   * @param {string} str 要填充的字符串
   * @param {number} length 填充后的长度
   * @param {string} chars 用于填充的字符串（默认为空格）
   * @returns {string} 填充后的字符串
   * @version 1.0.0
   */
  padStart(str: string, length: number, chars: string = ' '): string {
    if (str.length >= length) return str
    const padLen = length - str.length
    return chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen) + str
  },

  /**
   * 反转字符串
   * @param {string} str 要反转的字符串
   * @returns {string} 反转后的字符串
   * @version 1.0.0
   */
  reverse(str: string): string {
    return Array.from(str).reverse().join('')
  },

  /**
   * 根据起始位置和长度提取字符串的片段
   * @param {string} str 要提取的字符串
   * @param {number} start 起始位置
   * @param {number} length 提取的长度
   * @returns {string} 提取后的字符串
   * @version 1.0.0
   */
  substr(str: string, start: number, length?: number): string {
    if (length === undefined) {
      return str.slice(start)
    }
    if (length <= 0) return ''
    return str.slice(start, start + length)
  },

  /**
   * 检查字符串是否为空或仅包含空白字符
   * @param {string} str 要检查的字符串
   * @returns {boolean} 如果字符串为空或仅包含空白字符则返回 true，否则返回 false
   * @version 1.0.0
   */
  isBlank(str: string): boolean {
    return !str || str.trim().length === 0
  },

  /**
   * 如果字符串长度超过给定的最大长度，则截断字符串。
   * 截断后的字符串末尾替换为省略号（默认为 "..."）。
   * @param {string} str 要截断的字符串
   * @param {number} length 最大长度
   * @param {string} omission 省略号字符串（默认为 "..."）
   * @returns {string} 截断后的字符串
   * @version 1.0.0
   */
  truncate(str: string, length: number, omission: string = '...'): string {
    if (str.length <= length) return str
    if (length <= omission.length) return omission.slice(0, length)
    return str.slice(0, length - omission.length) + omission
  },
}
