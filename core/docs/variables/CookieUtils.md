# CookieUtils

> `const` **CookieUtils**: `object`

Defined in: [webstorage/cookie/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/webstorage/cookie/index.ts#L17)

Cookie 工具函数

引入

```ts
import { CookieUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| get | 获取 Cookie 值 |
| set | 设置 Cookie 值 |

## Type Declaration

### get()

> **get**(`name`): `string` \| `null`

获取 Cookie 值

**类型签名**

```ts
function get(name: string): string | null
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Cookie 名称 |

#### Returns

`string` \| `null`

Cookie 值，如果不存在则返回 null

#### Example

```ts
import { CookieUtils } from '@qy/lancet-ts-core'

const token = CookieUtils.get('token')
console.log(token)
```

### set()

> **set**(`name`, `value`): `void`

设置 Cookie 值

**类型签名**

```ts
function set(name: string, value: string): void
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | Cookie 名称 |
| `value` | `string` | Cookie 值 |

#### Returns

`void`

#### Example

```ts
import { CookieUtils } from '@qy/lancet-ts-core'

CookieUtils.set('token', '123456')
```
