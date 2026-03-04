/**
 * Cookie 工具函数
 *
 * 引入
 *
 * ```ts
 * import { CookieUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | get | 获取 Cookie 值 |
 * | set | 设置 Cookie 值 |
 */
export const CookieUtils = {
  /**
   * 获取 Cookie 值
   *
   * **类型签名**
   *
   * ```ts
   * function get(name: string): string | null
   * ```
   *
   * @param name Cookie 名称
   * @returns Cookie 值，如果不存在则返回 null
   *
   * @example
   * ```ts
   * import { CookieUtils } from '@qy/lancet-ts-core'
   *
   * const token = CookieUtils.get('token')
   * console.log(token)
   * ```
   */
  get(name: string): string | null {
    if (typeof document === 'undefined') return null
    const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
    return match ? decodeURIComponent(match[2]) : null
  },

  /**
   * 设置 Cookie 值
   *
   * **类型签名**
   *
   * ```ts
   * function set(name: string, value: string): void
   * ```
   *
   * @param name Cookie 名称
   * @param value Cookie 值
   *
   * @example
   * ```ts
   * import { CookieUtils } from '@qy/lancet-ts-core'
   *
   * CookieUtils.set('token', '123456')
   * ```
   */
  set(name: string, value: string): void {
    if (typeof document === 'undefined') return
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/`
  },
}
