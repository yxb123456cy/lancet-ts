# NumberUtils

> `const` **NumberUtils**: `object`

Defined in: [number/index.ts:16](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/number/index.ts#L16)

数字工具函数

引入

```ts
import { NumberUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| randomInt | 生成一个介于 min 和 max 之间的随机整数 |

## Type Declaration

### randomInt()

> **randomInt**(`min`, `max`): `number`

生成一个介于 min 和 max 之间的随机整数（包含 min 和 max）

**类型签名**

```ts
function randomInt(min: number, max: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `min` | `number` | 最小值（包含） |
| `max` | `number` | 最大值（包含） |

#### Returns

`number`

介于 min 和 max 之间的随机整数

#### Example

```ts
import { NumberUtils } from '@qy/lancet-ts-core'

const random = NumberUtils.randomInt(1, 10)
console.log(random) // 可能输出: 5
```
