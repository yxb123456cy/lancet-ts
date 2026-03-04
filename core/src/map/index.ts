/**
 * Map 工具函数
 *
 * 引入
 *
 * ```ts
 * import { MapUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | isEmpty | 检查 Map 是否为空 |
 * | toObject | 将 Map 转换为普通对象 |
 */
export const MapUtils = {
  /**
   * 检查 Map 是否为空
   *
   * **类型签名**
   *
   * ```ts
   * function isEmpty<K, V>(map: Map<K, V>): boolean
   * ```
   *
   * @param map 要检查的 Map
   * @returns 如果 Map 为空返回 true，否则返回 false
   *
   * @example
   * ```ts
   * import { MapUtils } from '@qy/lancet-ts-core'
   *
   * const map = new Map()
   * console.log(MapUtils.isEmpty(map)) // Output: true
   * map.set('key', 'value')
   * console.log(MapUtils.isEmpty(map)) // Output: false
   * ```
   */
  isEmpty<K, V>(map: Map<K, V>): boolean {
    return map.size === 0
  },
}
