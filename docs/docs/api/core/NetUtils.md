# NetUtils

> `const` **NetUtils**: `object`

Defined in: [net/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/net/index.ts#L17)

网络工具函数

引入

```ts
import { NetUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| isIPv4 | 检查是否为有效的 IPv4 地址 |
| isIPv6 | 检查是否为有效的 IPv6 地址 |

## Type Declaration

### isIPv4()

> **isIPv4**(`ip`): `boolean`

检查是否为有效的 IPv4 地址

**类型签名**

```ts
function isIPv4(ip: string): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ip` | `string` | IP 地址 |

#### Returns

`boolean`

如果是 IPv4 地址返回 true，否则返回 false

#### Example

```ts
import { NetUtils } from '@qy/lancet-ts-core'

console.log(NetUtils.isIPv4('192.168.1.1')) // Output: true
console.log(NetUtils.isIPv4('256.256.256.256')) // Output: false
```

### isIPv6()

> **isIPv6**(`ip`): `boolean`

检查是否为有效的 IPv6 地址

**类型签名**

```ts
function isIPv6(ip: string): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ip` | `string` | IP 地址 |

#### Returns

`boolean`

如果是 IPv6 地址返回 true，否则返回 false

#### Example

```ts
import { NetUtils } from '@qy/lancet-ts-core'

console.log(NetUtils.isIPv6('::1')) // Output: true
```
