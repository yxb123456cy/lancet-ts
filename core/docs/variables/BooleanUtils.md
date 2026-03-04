# BooleanUtils

> `const` **BooleanUtils**: `object`

Defined in: [boolean/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/boolean/index.ts#L17)

布尔值工具函数

引入

```ts
import { BooleanUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| toBoolean | 将任意值转换为布尔值 |
| random | 生成一个随机布尔值 |

## Type Declaration

### random()

> **random**(): `boolean`

生成一个随机布尔值

**类型签名**

```ts
function random(): boolean
```

#### Returns

`boolean`

随机布尔值

#### Example

```ts
import { BooleanUtils } from '@qy/lancet-ts-core'

console.log(BooleanUtils.random()) // Output: true or false
```

### toBoolean()

> **toBoolean**(`value`): `boolean`

将任意值转换为布尔值

**类型签名**

```ts
function toBoolean(value: unknown): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要转换的值 |

#### Returns

`boolean`

转换后的布尔值

#### Example

```ts
import { BooleanUtils } from '@qy/lancet-ts-core'

console.log(BooleanUtils.toBoolean(1)) // Output: true
console.log(BooleanUtils.toBoolean('false')) // Output: true
```
