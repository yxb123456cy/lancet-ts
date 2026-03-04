/**
 * IndexedDB 工具函数
 *
 * 引入
 *
 * ```ts
 * import { IndexDBUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | open | 打开 IndexedDB 数据库 |
 * | delete | 删除 IndexedDB 数据库 |
 */
export const IndexDBUtils = {
  /**
   * 打开 IndexedDB 数据库
   *
   * **类型签名**
   *
   * ```ts
   * function open(name: string, version: number): Promise<IDBDatabase>
   * ```
   *
   * @param name 数据库名称
   * @param version 版本号
   * @returns 数据库实例 Promise
   *
   * @example
   * ```ts
   * import { IndexDBUtils } from '@qy/lancet-ts-core'
   *
   * IndexDBUtils.open('myDB', 1).then((db) => {
   *   console.log('Database opened')
   * })
   * ```
   */
  open(name: string, version: number): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') {
        reject(new Error('IndexedDB is not supported'))
        return
      }
      const request = indexedDB.open(name, version)
      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  },

  /**
   * 删除 IndexedDB 数据库
   *
   * **类型签名**
   *
   * ```ts
   * function delete(name: string): Promise<void>
   * ```
   *
   * @param name 数据库名称
   * @returns Promise 对象
   *
   * @example
   * ```ts
   * import { IndexDBUtils } from '@qy/lancet-ts-core'
   *
   * IndexDBUtils.delete('myDB').then(() => {
   *   console.log('Database deleted')
   * })
   * ```
   */
  delete(name: string): Promise<void> {
    return new Promise((resolve, reject) => {
      if (typeof indexedDB === 'undefined') {
        reject(new Error('IndexedDB is not supported'))
        return
      }
      const request = indexedDB.deleteDatabase(name)
      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.error)
    })
  },
}
