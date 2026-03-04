/**
 * 枚举工具函数
 *
 * 引入
 *
 * ```ts
 * import { EnumUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | keys | 获取枚举对象的所有键 |
 * | values | 获取枚举对象的所有值 |
 */
export const EnumUtils = {
  /**
   * 获取枚举对象的所有键
   *
   * **类型签名**
   *
   * ```ts
   * function keys(enumObj: Record<string, string | number>): string[]
   * ```
   *
   * @param enumObj 枚举对象
   * @returns 枚举键数组
   *
   * @example
   * ```ts
   * import { EnumUtils } from '@qy/lancet-ts-core'
   *
   * enum Color {
   *   Red = 'RED',
   *   Green = 'GREEN',
   * }
   * console.log(EnumUtils.keys(Color)) // Output: ['Red', 'Green']
   * ```
   */
  keys(enumObj: Record<string, string | number>): string[] {
    return Object.keys(enumObj).filter((key) => Number.isNaN(Number(key)))
  },

  /**
   * 获取枚举对象的所有值
   *
   * **类型签名**
   *
   * ```ts
   * function values(enumObj: Record<string, string | number>): Array<string | number>
   * ```
   *
   * @param enumObj 枚举对象
   * @returns 枚举值数组
   *
   * @example
   * ```ts
   * import { EnumUtils } from '@qy/lancet-ts-core'
   *
   * enum Color {
   *   Red = 'RED',
   *   Green = 'GREEN',
   * }
   * console.log(EnumUtils.values(Color)) // Output: ['RED', 'GREEN']
   * ```
   */
  values(enumObj: Record<string, string | number>): Array<string | number> {
    return Object.values(enumObj).filter(
      (value): value is string | number => typeof value === 'string' || typeof value === 'number'
    )
  },
}
