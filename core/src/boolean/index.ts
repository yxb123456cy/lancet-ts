/**
 * 布尔值工具函数
 *
 * 引入
 *
 * ```ts
 * import { BooleanUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | toBoolean | 将任意值转换为布尔值 |
 * | random | 生成一个随机布尔值 |
 */
export const BooleanUtils = {
  /**
   * 将任意值转换为布尔值
   *
   * **类型签名**
   *
   * ```ts
   * function toBoolean(value: unknown): boolean
   * ```
   *
   * @param value 要转换的值
   * @returns 转换后的布尔值
   *
   * @example
   * ```ts
   * import { BooleanUtils } from '@qy/lancet-ts-core'
   *
   * console.log(BooleanUtils.toBoolean(1)) // Output: true
   * console.log(BooleanUtils.toBoolean('false')) // Output: true
   * ```
   */
  toBoolean(value: unknown): boolean {
    return Boolean(value)
  },

  /**
   * 生成一个随机布尔值
   *
   * **类型签名**
   *
   * ```ts
   * function random(): boolean
   * ```
   *
   * @returns 随机布尔值
   *
   * @example
   * ```ts
   * import { BooleanUtils } from '@qy/lancet-ts-core'
   *
   * console.log(BooleanUtils.random()) // Output: true or false
   * ```
   */
  random(): boolean {
    return Math.random() >= 0.5
  },
}
