# MapUtils

> `const` **MapUtils**: `object`

Defined in: [map/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/map/index.ts#L17)

Map 工具函数

引入

```ts
import { MapUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| isEmpty | 检查 Map 是否为空 |
| toObject | 将 Map 转换为普通对象 |

## Type Declaration

### isEmpty()

> **isEmpty**\<`K`, `V`\>(`map`): `boolean`

检查 Map 是否为空

**类型签名**

```ts
function isEmpty<K, V>(map: Map<K, V>): boolean
```

#### Type Parameters

| Type Parameter |
| ------ |
| `K` |
| `V` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `map` | `Map`\<`K`, `V`\> | 要检查的 Map |

#### Returns

`boolean`

如果 Map 为空返回 true，否则返回 false

#### Example

```ts
import { MapUtils } from '@qy/lancet-ts-core'

const map = new Map()
console.log(MapUtils.isEmpty(map)) // Output: true
map.set('key', 'value')
console.log(MapUtils.isEmpty(map)) // Output: false
```
