/**
 * 数学工具函数
 *
 * 引入
 *
 * ```ts
 * import { MathUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | mean | 计算数字数组的平均值 |
 * | pow | 计算底数的指数次幂 |
 * | factorial | 计算非负整数的阶乘 |
 * | max | 返回数字数组中的最大值 |
 * | min | 返回数字数组中的最小值 |
 * | percent | 计算数值相对于总数的百分比 |
 * | round | 将数字四舍五入到指定的小数位数 |
 * | roundStr | 四舍五入并返回字符串 |
 * | ceil | 向上取整到指定小数位 |
 * | ceilStr | 向上取整并返回字符串 |
 * | floor | 向下取整到指定小数位 |
 * | floorStr | 向下取整并返回字符串 |
 * | isPrime | 检查数字是否为质数 |
 * | gcd | 计算最大公约数 |
 * | lcm | 计算最小公倍数 |
 * | sum | 计算数组总和 |
 * | abs | 返回绝对值 |
 * | div | 除法运算 |
 * | variance | 计算方差 |
 * | stdDev | 计算标准差 |
 */
export const MathUtils = {
  /**
   * 计算数字数组的平均值
   *
   * **类型签名**
   *
   * ```ts
   * function mean(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 平均值
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.mean([1, 2, 3, 4, 5])) // Output: 3
   * console.log(MathUtils.mean([])) // Output: 0
   * ```
   */
  mean(numbers: number[]): number {
    if (numbers.length === 0) return 0
    return MathUtils.sum(numbers) / numbers.length
  },

  /**
   * 计算底数的指数次幂
   *
   * **类型签名**
   *
   * ```ts
   * function pow(base: number, exponent: number): number
   * ```
   *
   * @param base 底数
   * @param exponent 指数
   * @returns base 的 exponent 次幂
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.pow(2, 3)) // Output: 8
   * ```
   */
  pow(base: number, exponent: number): number {
    return base ** exponent
  },

  /**
   * 计算非负整数的阶乘
   *
   * **类型签名**
   *
   * ```ts
   * function factorial(n: number): number
   * ```
   *
   * @param n 非负整数
   * @returns n 的阶乘
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.factorial(5)) // Output: 120
   * ```
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
   *
   * **类型签名**
   *
   * ```ts
   * function max(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 最大值
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.max([1, 5, 3])) // Output: 5
   * ```
   */
  max(numbers: number[]): number {
    if (numbers.length === 0) return Number.NEGATIVE_INFINITY
    return Math.max(...numbers)
  },

  /**
   * 返回数字数组中的最小值
   *
   * **类型签名**
   *
   * ```ts
   * function min(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 最小值
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.min([1, 5, 3])) // Output: 1
   * ```
   */
  min(numbers: number[]): number {
    if (numbers.length === 0) return Number.POSITIVE_INFINITY
    return Math.min(...numbers)
  },

  /**
   * 计算数值相对于总数的百分比，保留指定小数位数
   *
   * **类型签名**
   *
   * ```ts
   * function percent(value: number, total: number, decimals?: number): number
   * ```
   *
   * @param value 数值
   * @param total 总数
   * @param decimals 保留的小数位数（默认为 2）
   * @returns 百分比值
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.percent(50, 200)) // Output: 25
   * console.log(MathUtils.percent(1, 3, 1)) // Output: 33.3
   * ```
   */
  percent(value: number, total: number, decimals: number = 2): number {
    if (total === 0) return 0
    return MathUtils.round((value / total) * 100, decimals)
  },

  /**
   * 将数字四舍五入到指定的小数位数
   *
   * **类型签名**
   *
   * ```ts
   * function round(value: number, decimals?: number): number
   * ```
   *
   * @param value 要四舍五入的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 四舍五入后的数字
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.round(1.2345, 2)) // Output: 1.23
   * console.log(MathUtils.round(1.2355, 2)) // Output: 1.24
   * ```
   */
  round(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.round(value * factor) / factor
  },

  /**
   * 将数字四舍五入到指定的小数位数，并作为字符串返回
   *
   * **类型签名**
   *
   * ```ts
   * function roundStr(value: number, decimals?: number): string
   * ```
   *
   * @param value 要四舍五入的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 四舍五入后的数字字符串
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.roundStr(1.2345, 2)) // Output: '1.23'
   * console.log(MathUtils.roundStr(1.2, 2)) // Output: '1.20'
   * ```
   */
  roundStr(value: number, decimals: number = 0): string {
    return value.toFixed(decimals)
  },

  /**
   * 将数字向上取整到指定的小数位数
   *
   * **类型签名**
   *
   * ```ts
   * function ceil(value: number, decimals?: number): number
   * ```
   *
   * @param value 要向上取整的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 向上取整后的数字
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.ceil(1.2345, 2)) // Output: 1.24
   * ```
   */
  ceil(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.ceil(value * factor) / factor
  },

  /**
   * 将数字向上取整到指定的小数位数，并作为字符串返回
   *
   * **类型签名**
   *
   * ```ts
   * function ceilStr(value: number, decimals?: number): string
   * ```
   *
   * @param value 要向上取整的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 向上取整后的数字字符串
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.ceilStr(1.2345, 2)) // Output: '1.24'
   * ```
   */
  ceilStr(value: number, decimals: number = 0): string {
    return MathUtils.ceil(value, decimals).toFixed(decimals)
  },

  /**
   * 将数字向下取整到指定的小数位数
   *
   * **类型签名**
   *
   * ```ts
   * function floor(value: number, decimals?: number): number
   * ```
   *
   * @param value 要向下取整的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 向下取整后的数字
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.floor(1.236, 2)) // Output: 1.23
   * ```
   */
  floor(value: number, decimals: number = 0): number {
    const factor = 10 ** decimals
    return Math.floor(value * factor) / factor
  },

  /**
   * 将数字向下取整到指定的小数位数，并作为字符串返回
   *
   * **类型签名**
   *
   * ```ts
   * function floorStr(value: number, decimals?: number): string
   * ```
   *
   * @param value 要向下取整的数字
   * @param decimals 小数位数（默认为 0）
   * @returns 向下取整后的数字字符串
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.floorStr(1.236, 2)) // Output: '1.23'
   * ```
   */
  floorStr(value: number, decimals: number = 0): string {
    return MathUtils.floor(value, decimals).toFixed(decimals)
  },

  /**
   * 检查数字是否为质数
   *
   * **类型签名**
   *
   * ```ts
   * function isPrime(n: number): boolean
   * ```
   *
   * @param n 要检查的数字
   * @returns 如果是质数则返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.isPrime(7)) // Output: true
   * console.log(MathUtils.isPrime(10)) // Output: false
   * ```
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
   *
   * **类型签名**
   *
   * ```ts
   * function gcd(a: number, b: number): number
   * ```
   *
   * @param a 第一个数字
   * @param b 第二个数字
   * @returns a 和 b 的最大公约数
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.gcd(12, 18)) // Output: 6
   * ```
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
   *
   * **类型签名**
   *
   * ```ts
   * function lcm(a: number, b: number): number
   * ```
   *
   * @param a 第一个数字
   * @param b 第二个数字
   * @returns a 和 b 的最小公倍数
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.lcm(4, 6)) // Output: 12
   * ```
   */
  lcm(a: number, b: number): number {
    if (a === 0 || b === 0) return 0
    return Math.abs(a * b) / MathUtils.gcd(a, b)
  },

  /**
   * 计算数字数组的总和
   *
   * **类型签名**
   *
   * ```ts
   * function sum(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 总和
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.sum([1, 2, 3])) // Output: 6
   * ```
   */
  sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0)
  },

  /**
   * 返回数字的绝对值
   *
   * **类型签名**
   *
   * ```ts
   * function abs(n: number): number
   * ```
   *
   * @param n 数字
   * @returns 绝对值
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.abs(-5)) // Output: 5
   * ```
   */
  abs(n: number): number {
    return Math.abs(n)
  },

  /**
   * 除法运算
   *
   * **类型签名**
   *
   * ```ts
   * function div(a: number, b: number): number
   * ```
   *
   * @param a 被除数
   * @param b 除数
   * @returns a / b 的结果
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.div(10, 2)) // Output: 5
   * ```
   */
  div(a: number, b: number): number {
    if (b === 0) throw new Error('Division by zero')
    return a / b
  },

  /**
   * 计算数字数组的方差
   *
   * **类型签名**
   *
   * ```ts
   * function variance(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 方差
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.variance([1, 2, 3, 4, 5])) // Output: 2
   * ```
   */
  variance(numbers: number[]): number {
    if (numbers.length === 0) return 0
    const mean = MathUtils.mean(numbers)
    const squareDiffs = numbers.map((n) => (n - mean) ** 2)
    return MathUtils.mean(squareDiffs)
  },

  /**
   * 计算数字数组的标准差
   *
   * **类型签名**
   *
   * ```ts
   * function stdDev(numbers: number[]): number
   * ```
   *
   * @param numbers 数字数组
   * @returns 标准差
   *
   * @example
   * ```ts
   * import { MathUtils } from '@qy/lancet-ts-core'
   *
   * console.log(MathUtils.stdDev([1, 2, 3, 4, 5])) // Output: 1.414...
   * ```
   */
  stdDev(numbers: number[]): number {
    return Math.sqrt(MathUtils.variance(numbers))
  },
}
