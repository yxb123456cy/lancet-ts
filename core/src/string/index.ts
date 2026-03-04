/**
 * 字符串工具函数
 *
 * 引入
 *
 * ```ts
 * import { StringUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | upperFirst | 将字符串的首字母转换为大写 |
 * | isString | 检查值是否为字符串原始值或对象 |
 * | lowerFirst | 将字符串的首字母转换为小写 |
 * | capitalize | 将字符串的首字母转换为大写，其余字符转换为小写 |
 * | pad | 在左右两侧填充字符 |
 * | padEnd | 在右侧填充字符 |
 * | padStart | 在左侧填充字符 |
 * | reverse | 反转字符串 |
 * | substr | 根据起始位置和长度提取字符串片段 |
 * | isBlank | 检查字符串是否为空或仅包含空白字符 |
 * | truncate | 截断字符串并添加省略号 |
 */
export const StringUtils = {
  /**
   * 将字符串的首字母转换为大写
   *
   * **类型签名**
   *
   * ```ts
   * function upperFirst(str: string): string
   * ```
   *
   * @param str 要转换的字符串
   * @returns 转换后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * const result = StringUtils.upperFirst('hello')
   * console.log(result) // Output: 'Hello'
   * ```
   */
  upperFirst(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1)
  },

  /**
   * 检查值是否为字符串原始值或对象
   *
   * **类型签名**
   *
   * ```ts
   * function isString(value: unknown): value is string
   * ```
   *
   * @param value 要检查的值
   * @returns 如果值是字符串则返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.isString('abc')) // Output: true
   * console.log(StringUtils.isString(123)) // Output: false
   * ```
   */
  isString(value: unknown): value is string {
    return typeof value === 'string' || value instanceof String
  },

  /**
   * 将字符串的首字母转换为小写
   *
   * **类型签名**
   *
   * ```ts
   * function lowerFirst(str: string): string
   * ```
   *
   * @param str 要转换的字符串
   * @returns 转换后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * const result = StringUtils.lowerFirst('Hello')
   * console.log(result) // Output: 'hello'
   * ```
   */
  lowerFirst(str: string): string {
    if (!str) return ''
    return str.charAt(0).toLowerCase() + str.slice(1)
  },

  /**
   * 将字符串的首字母转换为大写，其余字符转换为小写
   *
   * **类型签名**
   *
   * ```ts
   * function capitalize(str: string): string
   * ```
   *
   * @param str 要转换的字符串
   * @returns 转换后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * const result = StringUtils.capitalize('hELLO')
   * console.log(result) // Output: 'Hello'
   * ```
   */
  capitalize(str: string): string {
    if (!str) return ''
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  },

  /**
   * 如果字符串长度小于指定长度，则在左右两侧填充字符。如果填充字符无法均匀分配，则会被截断。
   *
   * **类型签名**
   *
   * ```ts
   * function pad(str: string, length: number, chars?: string): string
   * ```
   *
   * @param str 要填充的字符串
   * @param length 填充后的长度
   * @param chars 用于填充的字符串（默认为空格）
   * @returns 填充后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.pad('abc', 8)) // Output: '  abc   '
   * console.log(StringUtils.pad('abc', 8, '_-')) // Output: '_-abc_-_'
   * ```
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
   *
   * **类型签名**
   *
   * ```ts
   * function padEnd(str: string, length: number, chars?: string): string
   * ```
   *
   * @param str 要填充的字符串
   * @param length 填充后的长度
   * @param chars 用于填充的字符串（默认为空格）
   * @returns 填充后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.padEnd('abc', 6)) // Output: 'abc   '
   * console.log(StringUtils.padEnd('abc', 6, '_-')) // Output: 'abc_-_'
   * ```
   */
  padEnd(str: string, length: number, chars: string = ' '): string {
    if (str.length >= length) return str
    const padLen = length - str.length
    return str + chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen)
  },

  /**
   * 如果字符串长度小于指定长度，则在左侧填充字符。如果填充字符超过长度，则会被截断。
   *
   * **类型签名**
   *
   * ```ts
   * function padStart(str: string, length: number, chars?: string): string
   * ```
   *
   * @param str 要填充的字符串
   * @param length 填充后的长度
   * @param chars 用于填充的字符串（默认为空格）
   * @returns 填充后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.padStart('abc', 6)) // Output: '   abc'
   * console.log(StringUtils.padStart('abc', 6, '_-')) // Output: '_-_abc'
   * ```
   */
  padStart(str: string, length: number, chars: string = ' '): string {
    if (str.length >= length) return str
    const padLen = length - str.length
    return chars.repeat(Math.ceil(padLen / chars.length)).slice(0, padLen) + str
  },

  /**
   * 反转字符串
   *
   * **类型签名**
   *
   * ```ts
   * function reverse(str: string): string
   * ```
   *
   * @param str 要反转的字符串
   * @returns 反转后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * const result = StringUtils.reverse('hello')
   * console.log(result) // Output: 'olleh'
   * ```
   */
  reverse(str: string): string {
    return Array.from(str).reverse().join('')
  },

  /**
   * 根据起始位置和长度提取字符串的片段
   *
   * **类型签名**
   *
   * ```ts
   * function substr(str: string, start: number, length?: number): string
   * ```
   *
   * @param str 要提取的字符串
   * @param start 起始位置
   * @param length 提取的长度
   * @returns 提取后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.substr('hello world', 6)) // Output: 'world'
   * console.log(StringUtils.substr('hello world', 0, 5)) // Output: 'hello'
   * ```
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
   *
   * **类型签名**
   *
   * ```ts
   * function isBlank(str: string): boolean
   * ```
   *
   * @param str 要检查的字符串
   * @returns 如果字符串为空或仅包含空白字符则返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.isBlank('')) // Output: true
   * console.log(StringUtils.isBlank('   ')) // Output: true
   * console.log(StringUtils.isBlank('abc')) // Output: false
   * ```
   */
  isBlank(str: string): boolean {
    return !str || str.trim().length === 0
  },

  /**
   * 如果字符串长度超过给定的最大长度，则截断字符串。
   * 截断后的字符串末尾替换为省略号（默认为 "..."）。
   *
   * **类型签名**
   *
   * ```ts
   * function truncate(str: string, length: number, omission?: string): string
   * ```
   *
   * @param str 要截断的字符串
   * @param length 最大长度
   * @param omission 省略号字符串（默认为 "..."）
   * @returns 截断后的字符串
   *
   * @example
   * ```ts
   * import { StringUtils } from '@qy/lancet-ts-core'
   *
   * console.log(StringUtils.truncate('hello world', 5)) // Output: 'he...'
   * console.log(StringUtils.truncate('hello world', 8, '...')) // Output: 'hello...'
   * ```
   */
  truncate(str: string, length: number, omission: string = '...'): string {
    if (str.length <= length) return str
    if (length <= omission.length) return omission.slice(0, length)
    return str.slice(0, length - omission.length) + omission
  },
}
