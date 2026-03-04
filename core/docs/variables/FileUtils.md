# FileUtils

> `const` **FileUtils**: `object`

Defined in: [file/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/file/index.ts#L17)

文件工具函数

引入

```ts
import { FileUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| getExtension | 获取文件扩展名 |
| getFileName | 从路径中获取文件名 |

## Type Declaration

### getExtension()

> **getExtension**(`filename`): `string`

获取文件扩展名

**类型签名**

```ts
function getExtension(filename: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `filename` | `string` | 文件名或路径 |

#### Returns

`string`

文件扩展名（不包含点）

#### Example

```ts
import { FileUtils } from '@qy/lancet-ts-core'

console.log(FileUtils.getExtension('image.png')) // Output: 'png'
console.log(FileUtils.getExtension('archive.tar.gz')) // Output: 'gz'
```

### getFileName()

> **getFileName**(`path`): `string`

从路径中获取文件名

**类型签名**

```ts
function getFileName(path: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `path` | `string` | 文件路径 |

#### Returns

`string`

文件名

#### Example

```ts
import { FileUtils } from '@qy/lancet-ts-core'

console.log(FileUtils.getFileName('/path/to/file.txt')) // Output: 'file.txt'
console.log(FileUtils.getFileName('C:\\path\\to\\file.txt')) // Output: 'file.txt'
```
