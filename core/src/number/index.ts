/**
 * 数字工具函数
 *
 * 引入
 *
 * ```ts
 * import { NumberUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | randomInt | 生成一个介于 min 和 max 之间的随机整数 |
 */
export const NumberUtils = {
  /**
   * 生成一个介于 min 和 max 之间的随机整数（包含 min 和 max）
   *
   * **类型签名**
   *
   * ```ts
   * function randomInt(min: number, max: number): number
   * ```
   *
   * @param min 最小值（包含）
   * @param max 最大值（包含）
   * @returns 介于 min 和 max 之间的随机整数
   *
   * @example
   * ```ts
   * import { NumberUtils } from '@qy/lancet-ts-core'
   *
   * const random = NumberUtils.randomInt(1, 10)
   * console.log(random) // 可能输出: 5
   * ```
   */
  randomInt(min: number, max: number): number {
    if (min > max) {
      throw new Error('min must be less than or equal to max')
    }

    const minInt = Math.ceil(min)
    const maxInt = Math.floor(max)

    return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt
  },
}
