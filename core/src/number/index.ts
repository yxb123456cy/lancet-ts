/**
 * 数字工具函数
 */
export const NumberUtils = {
  /**
   * 生成一个介于 min 和 max 之间的随机整数（包含 min 和 max）
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（包含）
   * @returns {number} 介于 min 和 max 之间的随机整数
   * @throws {Error} 如果 min 大于 max
   * @version 1.0.0
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
