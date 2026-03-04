/**
 * 错误处理工具函数
 *
 * 引入
 *
 * ```ts
 * import { ErrorUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | create | 创建一个新的错误对象 |
 * | isError | 检查值是否为错误对象 |
 */
export const ErrorUtils = {
  /**
   * 创建一个新的错误对象
   *
   * **类型签名**
   *
   * ```ts
   * function create(message: string): Error
   * ```
   *
   * @param message 错误信息
   * @returns 错误对象
   *
   * @example
   * ```ts
   * import { ErrorUtils } from '@qy/lancet-ts-core'
   *
   * const error = ErrorUtils.create('Something went wrong')
   * console.log(error.message)
   * ```
   */
  create(message: string): Error {
    return new Error(message)
  },

  /**
   * 检查值是否为错误对象
   *
   * **类型签名**
   *
   * ```ts
   * function isError(value: unknown): value is Error
   * ```
   *
   * @param value 要检查的值
   * @returns 如果值是错误对象返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { ErrorUtils } from '@qy/lancet-ts-core'
   *
   * console.log(ErrorUtils.isError(new Error())) // Output: true
   * console.log(ErrorUtils.isError('error')) // Output: false
   * ```
   */
  isError(value: unknown): value is Error {
    return value instanceof Error
  },
}
