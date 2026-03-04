/**
 * 函数工具函数
 *
 * 引入
 *
 * ```ts
 * import { FuncUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | noop | 空函数，不执行任何操作 |
 * | sleep | 延迟执行（休眠） |
 */
export const FuncUtils = {
  /**
   * 空函数，不执行任何操作
   *
   * **类型签名**
   *
   * ```ts
   * function noop(): void
   * ```
   *
   * @example
   * ```ts
   * import { FuncUtils } from '@qy/lancet-ts-core'
   *
   * FuncUtils.noop()
   * ```
   */
  noop(): void {},

  /**
   * 延迟执行（休眠）
   *
   * **类型签名**
   *
   * ```ts
   * function sleep(ms: number): Promise<void>
   * ```
   *
   * @param ms 毫秒数
   * @returns Promise 对象
   *
   * @example
   * ```ts
   * import { FuncUtils } from '@qy/lancet-ts-core'
   *
   * await FuncUtils.sleep(1000)
   * ```
   */
  sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },
}
