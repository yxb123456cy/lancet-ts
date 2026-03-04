# TypeUtils

> `const` **TypeUtils**: `object`

Defined in: [type/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/type/index.ts#L17)

类型检查工具函数

引入

```ts
import { TypeUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| isDefined | 检查值是否已定义（不是 undefined 或 null） |
| isUndefined | 检查值是否为 undefined |

## Type Declaration

### isDefined()

> **isDefined**\<`T`\>(`value`): `value is T`

检查值是否已定义（不是 undefined 或 null）

**类型签名**

```ts
function isDefined<T>(value: T | null | undefined): value is T
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `T` \| `null` \| `undefined` | 要检查的值 |

#### Returns

`value is T`

如果值已定义返回 true，否则返回 false

#### Example

```ts
import { TypeUtils } from '@qy/lancet-ts-core'

console.log(TypeUtils.isDefined('test')) // Output: true
console.log(TypeUtils.isDefined(null)) // Output: false
```

### isUndefined()

> **isUndefined**(`value`): `value is undefined`

检查值是否为 undefined

**类型签名**

```ts
function isUndefined(value: unknown): value is undefined
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要检查的值 |

#### Returns

`value is undefined`

如果值是 undefined 返回 true，否则返回 false

#### Example

```ts
import { TypeUtils } from '@qy/lancet-ts-core'

console.log(TypeUtils.isUndefined(undefined)) // Output: true
console.log(TypeUtils.isUndefined(null)) // Output: false
```
