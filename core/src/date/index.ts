/**
 * 日期工具函数
 *
 * 引入
 *
 * ```ts
 * import { DateUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | isLeapYear | 判断年份是否为闰年 |
 * | now | 获取当前时间的时间戳 |
 */
export const DateUtils = {
  /**
   * 判断年份是否为闰年。
   *
   * **类型签名**
   *
   * ```ts
   * function isLeapYear(year: number): boolean
   * ```
   *
   * @param year 年份，例如 `2024`
   * @returns 如果是闰年返回 `true`，否则返回 `false`
   *
   * @example
   * ```ts
   * import { DateUtils } from '@qy/lancet-ts-core'
   *
   * console.log(DateUtils.isLeapYear(2020)) // true
   * console.log(DateUtils.isLeapYear(2021)) // false
   * ```
   */
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  },

  /**
   * 获取当前时间的时间戳（毫秒）。
   *
   * **类型签名**
   *
   * ```ts
   * function now(): number
   * ```
   *
   * @returns 当前时间戳（毫秒）
   *
   * @example
   * ```ts
   * import { DateUtils } from '@qy/lancet-ts-core'
   *
   * const timestamp = DateUtils.now()
   * console.log(timestamp)
   * ```
   */
  now(): number {
    return Date.now()
  },
}
