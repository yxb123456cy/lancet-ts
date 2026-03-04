# DateUtils

> `const` **DateUtils**: `object`

Defined in: [date/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/date/index.ts#L17)

日期工具函数

引入

```ts
import { DateUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| isLeapYear | 判断年份是否为闰年 |
| now | 获取当前时间的时间戳 |

## Type Declaration

### isLeapYear()

> **isLeapYear**(`year`): `boolean`

判断年份是否为闰年。

**类型签名**

```ts
function isLeapYear(year: number): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `year` | `number` | 年份，例如 `2024` |

#### Returns

`boolean`

如果是闰年返回 `true`，否则返回 `false`

#### Example

```ts
import { DateUtils } from '@qy/lancet-ts-core'

console.log(DateUtils.isLeapYear(2020)) // true
console.log(DateUtils.isLeapYear(2021)) // false
```

### now()

> **now**(): `number`

获取当前时间的时间戳（毫秒）。

**类型签名**

```ts
function now(): number
```

#### Returns

`number`

当前时间戳（毫秒）

#### Example

```ts
import { DateUtils } from '@qy/lancet-ts-core'

const timestamp = DateUtils.now()
console.log(timestamp)
```
