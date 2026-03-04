/**
 * 数学工具函数
 */
export const MathUtils = {
  /**
   * 计算数字数组的平均值
   * @param {number[]} numbers 数字数组
   * @returns {number} 平均值
   * @version 1.0.0
   */
  mean(numbers: number[]): number {
    if (numbers.length === 0) return 0
    return MathUtils.sum(numbers) / numbers.length
  },

  /**
   * 计算底数的指数次幂
   * @param {number} base 底数
   * @param {number} exponent 指数
   * @returns {number} base 的 exponent 次幂
   * @version 1.0.0
   */
  pow(base: number, exponent: number): number {
    return base ** exponent
  },

  /**
   * 计算非负整数的阶乘
   * @param {number} n 非负整数
   * @returns {number} n 的阶乘
   * @throws {Error} 如果 n 为负数
   * @version 1.0.0
   */
  factorial(n: number): number {
    if (n < 0) throw new Error('Factorial is not defined for negative numbers')
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  },

  /**
   * 返回数字数组中的最大值
   * @param {number[]} numbers 数字数组
   * @returns {number} 最大值
   * @version 1.0.0
   */
  max(numbers: number[]): number {
    if (numbers.length === 0) return Number.NEGATIVE_INFINITY
    return Math.max(...numbers)
  },

  /**
   * 返回数字数组中的最小值
   * @param {number[]} numbers 数字数组
   * @returns {number} 最小值
   * @version 1.0.0
   */
  min(numbers: number[]): number {
    if (numbers.length === 0) return Number.POSITIVE_INFINITY
    return Math.min(...numbers)
  },

  /**
   * 计算数值相对于总数的百分比，保留指定小数位数
   * @param {number} value 数值
   * @param {number} total 总数
   * @param {number} decimals 保留的小数位数（默认为 2）
   * @returns {number} 百分比值
   * @version 1.0.0
   */
  percent(value: number, total: number, decimals: number = 2): number {
    if (total === 0) return 0
    return MathUtils.round((value / total) * 100, decimals)
  },

  /**
   * 将数字四舍五入到指定的小数位数
   * @param {number} value 要四舍五入的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {number} 四舍五入后的数字
   * @version 1.0.0
   */
  round(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  },

  /**
   * 将数字四舍五入到指定的小数位数，并作为字符串返回
   * @param {number} value 要四舍五入的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {string} 四舍五入后的数字字符串
   * @version 1.0.0
   */
  roundStr(value: number, decimals: number = 0): string {
    return value.toFixed(decimals)
  },

  /**
   * 将数字向上取整到指定的小数位数
   * @param {number} value 要向上取整的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {number} 向上取整后的数字
   * @version 1.0.0
   */
  ceil(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.ceil(value * factor) / factor
  },

  /**
   * 将数字向上取整到指定的小数位数，并作为字符串返回
   * @param {number} value 要向上取整的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {string} 向上取整后的数字字符串
   * @version 1.0.0
   */
  ceilStr(value: number, decimals: number = 0): string {
    return MathUtils.ceil(value, decimals).toFixed(decimals)
  },

  /**
   * 将数字向下取整到指定的小数位数
   * @param {number} value 要向下取整的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {number} 向下取整后的数字
   * @version 1.0.0
   */
  floor(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.floor(value * factor) / factor
  },

  /**
   * 将数字向下取整到指定的小数位数，并作为字符串返回
   * @param {number} value 要向下取整的数字
   * @param {number} decimals 小数位数（默认为 0）
   * @returns {string} 向下取整后的数字字符串
   * @version 1.0.0
   */
  floorStr(value: number, decimals: number = 0): string {
    return MathUtils.floor(value, decimals).toFixed(decimals)
  },

  /**
   * 检查数字是否为质数
   * @param {number} n 要检查的数字
   * @returns {boolean} 如果是质数则返回 true，否则返回 false
   * @version 1.0.0
   */
  isPrime(n: number): boolean {
    if (n <= 1) return false
    if (n <= 3) return true
    if (n % 2 === 0 || n % 3 === 0) return false
    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false
    }
    return true
  },

  /**
   * 计算两个数字的最大公约数 (GCD)
   * @param {number} a 第一个数字
   * @param {number} b 第二个数字
   * @returns {number} a 和 b 的最大公约数
   * @version 1.0.0
   */
  gcd(a: number, b: number): number {
    a = Math.abs(a)
    b = Math.abs(b)
    while (b) {
      const temp = b
      b = a % b
      a = temp
    }
    return a
  },

  /**
   * 计算两个数字的最小公倍数 (LCM)
   * @param {number} a 第一个数字
   * @param {number} b 第二个数字
   * @returns {number} a 和 b 的最小公倍数
   * @version 1.0.0
   */
  lcm(a: number, b: number): number {
    if (a === 0 || b === 0) return 0
    return Math.abs(a * b) / MathUtils.gcd(a, b)
  },

  /**
   * 计算数字数组的总和
   * @param {number[]} numbers 数字数组
   * @returns {number} 总和
   * @version 1.0.0
   */
  sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  },

  /**
   * 返回数字的绝对值
   * @param {number} n 数字
   * @returns {number} 绝对值
   * @version 1.0.0
   */
  abs(n: number): number {
    return Math.abs(n)
  },

  /**
   * 除法运算
   * @param {number} a 被除数
   * @param {number} b 除数
   * @returns {number} a / b 的结果
   * @throws {Error} 如果除数为 0
   * @version 1.0.0
   */
  div(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero')
    return a / b
  },

  /**
   * 计算数字数组的方差
   * @param {number[]} numbers 数字数组
   * @returns {number} 方差
   * @version 1.0.0
   */
  variance(numbers: number[]): number {
    if (numbers.length === 0) return 0
    const mean = MathUtils.mean(numbers)
    const squareDiffs = numbers.map((n) => (n - mean) ** 2)
    return MathUtils.mean(squareDiffs)
  },

  /**
   * 计算数字数组的标准差
   * @param {number[]} numbers 数字数组
   * @returns {number} 标准差
   * @version 1.0.0
   */
  stdDev(numbers: number[]): number {
    return Math.sqrt(MathUtils.variance(numbers))
  },
}
