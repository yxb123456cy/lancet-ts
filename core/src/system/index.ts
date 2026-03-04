/**
 * 系统工具函数
 *
 * 引入
 *
 * ```ts
 * import { SystemUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | isBrowser | 检查是否在浏览器环境中 |
 * | isNode | 检查是否在 Node.js 环境中 |
 */
export const SystemUtils = {
  /**
   * 检查是否在浏览器环境中
   *
   * **类型签名**
   *
   * ```ts
   * function isBrowser(): boolean
   * ```
   *
   * @returns 如果在浏览器环境中返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { SystemUtils } from '@qy/lancet-ts-core'
   *
   * console.log(SystemUtils.isBrowser()) // Output: true or false
   * ```
   */
  isBrowser(): boolean {
    return (
      typeof globalThis.window !== 'undefined' && typeof globalThis.window.document !== 'undefined'
    )
  },

  /**
   * 检查是否在 Node.js 环境中
   *
   * **类型签名**
   *
   * ```ts
   * function isNode(): boolean
   * ```
   *
   * @returns 如果在 Node.js 环境中返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { SystemUtils } from '@qy/lancet-ts-core'
   *
   * console.log(SystemUtils.isNode()) // Output: true or false
   * ```
   */
  isNode(): boolean {
    return (
      typeof process !== 'undefined' && process.versions != null && process.versions.node != null
    )
  },
}
