# ErrorUtils

> `const` **ErrorUtils**: `object`

Defined in: [error/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/error/index.ts#L17)

错误处理工具函数

引入

```ts
import { ErrorUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| create | 创建一个新的错误对象 |
| isError | 检查值是否为错误对象 |

## Type Declaration

### create()

> **create**(`message`): `Error`

创建一个新的错误对象

**类型签名**

```ts
function create(message: string): Error
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `message` | `string` | 错误信息 |

#### Returns

`Error`

错误对象

#### Example

```ts
import { ErrorUtils } from '@qy/lancet-ts-core'

const error = ErrorUtils.create('Something went wrong')
console.log(error.message)
```

### isError()

> **isError**(`value`): `value is Error`

检查值是否为错误对象

**类型签名**

```ts
function isError(value: unknown): value is Error
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要检查的值 |

#### Returns

`value is Error`

如果值是错误对象返回 true，否则返回 false

#### Example

```ts
import { ErrorUtils } from '@qy/lancet-ts-core'

console.log(ErrorUtils.isError(new Error())) // Output: true
console.log(ErrorUtils.isError('error')) // Output: false
```
