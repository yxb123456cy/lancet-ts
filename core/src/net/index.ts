/**
 * 网络工具函数
 *
 * 引入
 *
 * ```ts
 * import { NetUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | isIPv4 | 检查是否为有效的 IPv4 地址 |
 * | isIPv6 | 检查是否为有效的 IPv6 地址 |
 */
export const NetUtils = {
  /**
   * 检查是否为有效的 IPv4 地址
   *
   * **类型签名**
   *
   * ```ts
   * function isIPv4(ip: string): boolean
   * ```
   *
   * @param ip IP 地址
   * @returns 如果是 IPv4 地址返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { NetUtils } from '@qy/lancet-ts-core'
   *
   * console.log(NetUtils.isIPv4('192.168.1.1')) // Output: true
   * console.log(NetUtils.isIPv4('256.256.256.256')) // Output: false
   * ```
   */
  isIPv4(ip: string): boolean {
    const regex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
    return regex.test(ip)
  },

  /**
   * 检查是否为有效的 IPv6 地址
   *
   * **类型签名**
   *
   * ```ts
   * function isIPv6(ip: string): boolean
   * ```
   *
   * @param ip IP 地址
   * @returns 如果是 IPv6 地址返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { NetUtils } from '@qy/lancet-ts-core'
   *
   * console.log(NetUtils.isIPv6('::1')) // Output: true
   * ```
   */
  isIPv6(ip: string): boolean {
    const regex =
      /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
    return regex.test(ip)
  },
}
