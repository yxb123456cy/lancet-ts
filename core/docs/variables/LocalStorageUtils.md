# LocalStorageUtils

> `const` **LocalStorageUtils**: `object`

Defined in: [webstorage/localstorage/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/webstorage/localstorage/index.ts#L17)

LocalStorage 工具函数

引入

```ts
import { LocalStorageUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| set | 设置 LocalStorage 值 |
| get | 获取 LocalStorage 值 |

## Type Declaration

### get()

> **get**\<`T`\>(`key`): `T` \| `null`

获取 LocalStorage 值

**类型签名**

```ts
function get<T = unknown>(key: string): T | null
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `T` | `unknown` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 键 |

#### Returns

`T` \| `null`

值

#### Example

```ts
import { LocalStorageUtils } from '@qy/lancet-ts-core'

const user = LocalStorageUtils.get<{ name: string }>('user')
console.log(user) // Output: { name: 'John' }
```

### set()

> **set**\<`T`\>(`key`, `value`): `void`

设置 LocalStorage 值

**类型签名**

```ts
function set<T>(key: string, value: T): void
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `key` | `string` | 键 |
| `value` | `T` | 值 |

#### Returns

`void`

#### Example

```ts
import { LocalStorageUtils } from '@qy/lancet-ts-core'

LocalStorageUtils.set('user', { name: 'John' })
```
