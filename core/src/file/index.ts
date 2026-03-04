/**
 * 文件工具函数
 *
 * 引入
 *
 * ```ts
 * import { FileUtils } from '@qy/lancet-ts-core'
 * ```
 *
 * 函数列表
 *
 * | 函数名 | 描述 |
 * | :--- | :--- |
 * | getExtension | 获取文件扩展名 |
 * | getFileName | 从路径中获取文件名 |
 */
export const FileUtils = {
  /**
   * 获取文件扩展名
   *
   * **类型签名**
   *
   * ```ts
   * function getExtension(filename: string): string
   * ```
   *
   * @param filename 文件名或路径
   * @returns 文件扩展名（不包含点）
   *
   * @example
   * ```ts
   * import { FileUtils } from '@qy/lancet-ts-core'
   *
   * console.log(FileUtils.getExtension('image.png')) // Output: 'png'
   * console.log(FileUtils.getExtension('archive.tar.gz')) // Output: 'gz'
   * ```
   */
  getExtension(filename: string): string {
    const parts = filename.split('.')
    return parts.length > 1 ? parts.pop() || '' : ''
  },

  /**
   * 从路径中获取文件名
   *
   * **类型签名**
   *
   * ```ts
   * function getFileName(path: string): string
   * ```
   *
   * @param path 文件路径
   * @returns 文件名
   *
   * @example
   * ```ts
   * import { FileUtils } from '@qy/lancet-ts-core'
   *
   * console.log(FileUtils.getFileName('/path/to/file.txt')) // Output: 'file.txt'
   * console.log(FileUtils.getFileName('C:\\path\\to\\file.txt')) // Output: 'file.txt'
   * ```
   */
  getFileName(path: string): string {
    return path.split(/[/\\]/).pop() || ''
  },
}
