# FuncUtils

> `const` **FuncUtils**: `object`

Defined in: [function/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/function/index.ts#L17)

函数工具函数

引入

```ts
import { FuncUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| noop | 空函数，不执行任何操作 |
| sleep | 延迟执行（休眠） |

## Type Declaration

### noop()

> **noop**(): `void`

空函数，不执行任何操作

**类型签名**

```ts
function noop(): void
```

#### Returns

`void`

#### Example

```ts
import { FuncUtils } from '@qy/lancet-ts-core'

FuncUtils.noop()
```

### sleep()

> **sleep**(`ms`): `Promise`\<`void`\>

延迟执行（休眠）

**类型签名**

```ts
function sleep(ms: number): Promise<void>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ms` | `number` | 毫秒数 |

#### Returns

`Promise`\<`void`\>

Promise 对象

#### Example

```ts
import { FuncUtils } from '@qy/lancet-ts-core'

await FuncUtils.sleep(1000)
```
