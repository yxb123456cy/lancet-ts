/**
 * SessionStorage 工具函数
 *
 * 引入
 *
 * ```ts
 * import { SessionStorageUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | set | 设置 SessionStorage 值 |
 * | get | 获取 SessionStorage 值 |
 */
export const SessionStorageUtils = {
  /**
   * 设置 SessionStorage 值
   *
   * **类型签名**
   *
   * ```ts
   * function set<T>(key: string, value: T): void
   * ```
   *
   * @param key 键
   * @param value 值
   *
   * @example
   * ```ts
   * import { SessionStorageUtils } from '@qy/lancet-ts-core'
   *
   * SessionStorageUtils.set('session', { id: 1 })
   * ```
   */
  set<T>(key: string, value: T): void {
    if (typeof sessionStorage === 'undefined') return
    sessionStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取 SessionStorage 值
   *
   * **类型签名**
   *
   * ```ts
   * function get<T = unknown>(key: string): T | null
   * ```
   *
   * @param key 键
   * @returns 值
   *
   * @example
   * ```ts
   * import { SessionStorageUtils } from '@qy/lancet-ts-core'
   *
   * const session = SessionStorageUtils.get<{ id: number }>('session')
   * console.log(session) // Output: { id: 1 }
   * ```
   */
  get<T = unknown>(key: string): T | null {
    if (typeof sessionStorage === 'undefined') return null
    const value = sessionStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  },
}
