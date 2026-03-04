/**
 * LocalStorage 工具函数
 *
 * 引入
 *
 * ```ts
 * import { LocalStorageUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | set | 设置 LocalStorage 值 |
 * | get | 获取 LocalStorage 值 |
 */
export const LocalStorageUtils = {
  /**
   * 设置 LocalStorage 值
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
   * import { LocalStorageUtils } from '@qy/lancet-ts-core'
   *
   * LocalStorageUtils.set('user', { name: 'John' })
   * ```
   */
  set<T>(key: string, value: T): void {
    if (typeof localStorage === 'undefined') return
    localStorage.setItem(key, JSON.stringify(value))
  },

  /**
   * 获取 LocalStorage 值
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
   * import { LocalStorageUtils } from '@qy/lancet-ts-core'
   *
   * const user = LocalStorageUtils.get<{ name: string }>('user')
   * console.log(user) // Output: { name: 'John' }
   * ```
   */
  get<T = unknown>(key: string): T | null {
    if (typeof localStorage === 'undefined') return null
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : null
  },
}
