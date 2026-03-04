# SystemUtils

> `const` **SystemUtils**: `object`

Defined in: [system/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/system/index.ts#L17)

系统工具函数

引入

```ts
import { SystemUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| isBrowser | 检查是否在浏览器环境中 |
| isNode | 检查是否在 Node.js 环境中 |

## Type Declaration

### isBrowser()

> **isBrowser**(): `boolean`

检查是否在浏览器环境中

**类型签名**

```ts
function isBrowser(): boolean
```

#### Returns

`boolean`

如果在浏览器环境中返回 true，否则返回 false

#### Example

```ts
import { SystemUtils } from '@qy/lancet-ts-core'

console.log(SystemUtils.isBrowser()) // Output: true or false
```

### isNode()

> **isNode**(): `boolean`

检查是否在 Node.js 环境中

**类型签名**

```ts
function isNode(): boolean
```

#### Returns

`boolean`

如果在 Node.js 环境中返回 true，否则返回 false

#### Example

```ts
import { SystemUtils } from '@qy/lancet-ts-core'

console.log(SystemUtils.isNode()) // Output: true or false
```
