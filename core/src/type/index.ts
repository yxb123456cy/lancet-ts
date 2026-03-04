/**
 * 类型检查工具函数
 *
 * 引入
 *
 * ```ts
 * import { TypeUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | isDefined | 检查值是否已定义（不是 undefined 或 null） |
 * | isUndefined | 检查值是否为 undefined |
 */
export const TypeUtils = {
  /**
   * 检查值是否已定义（不是 undefined 或 null）
   *
   * **类型签名**
   *
   * ```ts
   * function isDefined<T>(value: T | null | undefined): value is T
   * ```
   *
   * @param value 要检查的值
   * @returns 如果值已定义返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { TypeUtils } from '@qy/lancet-ts-core'
   *
   * console.log(TypeUtils.isDefined('test')) // Output: true
   * console.log(TypeUtils.isDefined(null)) // Output: false
   * ```
   */
  isDefined<T>(value: T | null | undefined): value is T {
    return value !== undefined && value !== null
  },

  /**
   * 检查值是否为 undefined
   *
   * **类型签名**
   *
   * ```ts
   * function isUndefined(value: unknown): value is undefined
   * ```
   *
   * @param value 要检查的值
   * @returns 如果值是 undefined 返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { TypeUtils } from '@qy/lancet-ts-core'
   *
   * console.log(TypeUtils.isUndefined(undefined)) // Output: true
   * console.log(TypeUtils.isUndefined(null)) // Output: false
   * ```
   */
  isUndefined(value: unknown): value is undefined {
    return value === undefined
  },
}
