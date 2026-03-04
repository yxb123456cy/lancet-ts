# MathUtils

> `const` **MathUtils**: `object`

Defined in: [math/index.ts:35](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/math/index.ts#L35)

数学工具函数

引入

```ts
import { MathUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| mean | 计算数字数组的平均值 |
| pow | 计算底数的指数次幂 |
| factorial | 计算非负整数的阶乘 |
| max | 返回数字数组中的最大值 |
| min | 返回数字数组中的最小值 |
| percent | 计算数值相对于总数的百分比 |
| round | 将数字四舍五入到指定的小数位数 |
| roundStr | 四舍五入并返回字符串 |
| ceil | 向上取整到指定小数位 |
| ceilStr | 向上取整并返回字符串 |
| floor | 向下取整到指定小数位 |
| floorStr | 向下取整并返回字符串 |
| isPrime | 检查数字是否为质数 |
| gcd | 计算最大公约数 |
| lcm | 计算最小公倍数 |
| sum | 计算数组总和 |
| abs | 返回绝对值 |
| div | 除法运算 |
| variance | 计算方差 |
| stdDev | 计算标准差 |

## Type Declaration

### abs()

> **abs**(`n`): `number`

返回数字的绝对值

**类型签名**

```ts
function abs(n: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | 数字 |

#### Returns

`number`

绝对值

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.abs(-5)) // Output: 5
```

### ceil()

> **ceil**(`value`, `decimals?`): `number`

将数字向上取整到指定的小数位数

**类型签名**

```ts
function ceil(value: number, decimals?: number): number
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要向上取整的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`number`

向上取整后的数字

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.ceil(1.2345, 2)) // Output: 1.24
```

### ceilStr()

> **ceilStr**(`value`, `decimals?`): `string`

将数字向上取整到指定的小数位数，并作为字符串返回

**类型签名**

```ts
function ceilStr(value: number, decimals?: number): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要向上取整的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`string`

向上取整后的数字字符串

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.ceilStr(1.2345, 2)) // Output: '1.24'
```

### div()

> **div**(`a`, `b`): `number`

除法运算

**类型签名**

```ts
function div(a: number, b: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | 被除数 |
| `b` | `number` | 除数 |

#### Returns

`number`

a / b 的结果

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.div(10, 2)) // Output: 5
```

### factorial()

> **factorial**(`n`): `number`

计算非负整数的阶乘

**类型签名**

```ts
function factorial(n: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | 非负整数 |

#### Returns

`number`

n 的阶乘

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.factorial(5)) // Output: 120
```

### floor()

> **floor**(`value`, `decimals?`): `number`

将数字向下取整到指定的小数位数

**类型签名**

```ts
function floor(value: number, decimals?: number): number
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要向下取整的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`number`

向下取整后的数字

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.floor(1.236, 2)) // Output: 1.23
```

### floorStr()

> **floorStr**(`value`, `decimals?`): `string`

将数字向下取整到指定的小数位数，并作为字符串返回

**类型签名**

```ts
function floorStr(value: number, decimals?: number): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要向下取整的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`string`

向下取整后的数字字符串

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.floorStr(1.236, 2)) // Output: '1.23'
```

### gcd()

> **gcd**(`a`, `b`): `number`

计算两个数字的最大公约数 (GCD)

**类型签名**

```ts
function gcd(a: number, b: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | 第一个数字 |
| `b` | `number` | 第二个数字 |

#### Returns

`number`

a 和 b 的最大公约数

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.gcd(12, 18)) // Output: 6
```

### isPrime()

> **isPrime**(`n`): `boolean`

检查数字是否为质数

**类型签名**

```ts
function isPrime(n: number): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `n` | `number` | 要检查的数字 |

#### Returns

`boolean`

如果是质数则返回 true，否则返回 false

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.isPrime(7)) // Output: true
console.log(MathUtils.isPrime(10)) // Output: false
```

### lcm()

> **lcm**(`a`, `b`): `number`

计算两个数字的最小公倍数 (LCM)

**类型签名**

```ts
function lcm(a: number, b: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `a` | `number` | 第一个数字 |
| `b` | `number` | 第二个数字 |

#### Returns

`number`

a 和 b 的最小公倍数

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.lcm(4, 6)) // Output: 12
```

### max()

> **max**(`numbers`): `number`

返回数字数组中的最大值

**类型签名**

```ts
function max(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

最大值

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.max([1, 5, 3])) // Output: 5
```

### mean()

> **mean**(`numbers`): `number`

计算数字数组的平均值

**类型签名**

```ts
function mean(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

平均值

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.mean([1, 2, 3, 4, 5])) // Output: 3
console.log(MathUtils.mean([])) // Output: 0
```

### min()

> **min**(`numbers`): `number`

返回数字数组中的最小值

**类型签名**

```ts
function min(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

最小值

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.min([1, 5, 3])) // Output: 1
```

### percent()

> **percent**(`value`, `total`, `decimals?`): `number`

计算数值相对于总数的百分比，保留指定小数位数

**类型签名**

```ts
function percent(value: number, total: number, decimals?: number): number
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 数值 |
| `total` | `number` | `undefined` | 总数 |
| `decimals` | `number` | `2` | 保留的小数位数（默认为 2） |

#### Returns

`number`

百分比值

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.percent(50, 200)) // Output: 25
console.log(MathUtils.percent(1, 3, 1)) // Output: 33.3
```

### pow()

> **pow**(`base`, `exponent`): `number`

计算底数的指数次幂

**类型签名**

```ts
function pow(base: number, exponent: number): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `base` | `number` | 底数 |
| `exponent` | `number` | 指数 |

#### Returns

`number`

base 的 exponent 次幂

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.pow(2, 3)) // Output: 8
```

### round()

> **round**(`value`, `decimals?`): `number`

将数字四舍五入到指定的小数位数

**类型签名**

```ts
function round(value: number, decimals?: number): number
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要四舍五入的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`number`

四舍五入后的数字

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.round(1.2345, 2)) // Output: 1.23
console.log(MathUtils.round(1.2355, 2)) // Output: 1.24
```

### roundStr()

> **roundStr**(`value`, `decimals?`): `string`

将数字四舍五入到指定的小数位数，并作为字符串返回

**类型签名**

```ts
function roundStr(value: number, decimals?: number): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `value` | `number` | `undefined` | 要四舍五入的数字 |
| `decimals` | `number` | `0` | 小数位数（默认为 0） |

#### Returns

`string`

四舍五入后的数字字符串

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.roundStr(1.2345, 2)) // Output: '1.23'
console.log(MathUtils.roundStr(1.2, 2)) // Output: '1.20'
```

### stdDev()

> **stdDev**(`numbers`): `number`

计算数字数组的标准差

**类型签名**

```ts
function stdDev(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

标准差

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.stdDev([1, 2, 3, 4, 5])) // Output: 1.414...
```

### sum()

> **sum**(`numbers`): `number`

计算数字数组的总和

**类型签名**

```ts
function sum(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

总和

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.sum([1, 2, 3])) // Output: 6
```

### variance()

> **variance**(`numbers`): `number`

计算数字数组的方差

**类型签名**

```ts
function variance(numbers: number[]): number
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `numbers` | `number`[] | 数字数组 |

#### Returns

`number`

方差

#### Example

```ts
import { MathUtils } from '@qy/lancet-ts-core'

console.log(MathUtils.variance([1, 2, 3, 4, 5])) // Output: 2
```
