# EnumUtils

> `const` **EnumUtils**: `object`

Defined in: [enum/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/enum/index.ts#L17)

枚举工具函数

引入

```ts
import { EnumUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| keys | 获取枚举对象的所有键 |
| values | 获取枚举对象的所有值 |

## Type Declaration

### keys()

> **keys**(`enumObj`): `string`[]

获取枚举对象的所有键

**类型签名**

```ts
function keys(enumObj: Record<string, string | number>): string[]
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | `Record`\<`string`, `string` \| `number`\> | 枚举对象 |

#### Returns

`string`[]

枚举键数组

#### Example

```ts
import { EnumUtils } from '@qy/lancet-ts-core'

enum Color {
  Red = 'RED',
  Green = 'GREEN',
}
console.log(EnumUtils.keys(Color)) // Output: ['Red', 'Green']
```

### values()

> **values**(`enumObj`): (`string` \| `number`)[]

获取枚举对象的所有值

**类型签名**

```ts
function values(enumObj: Record<string, string | number>): Array<string | number>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `enumObj` | `Record`\<`string`, `string` \| `number`\> | 枚举对象 |

#### Returns

(`string` \| `number`)[]

枚举值数组

#### Example

```ts
import { EnumUtils } from '@qy/lancet-ts-core'

enum Color {
  Red = 'RED',
  Green = 'GREEN',
}
console.log(EnumUtils.values(Color)) // Output: ['RED', 'GREEN']
```
