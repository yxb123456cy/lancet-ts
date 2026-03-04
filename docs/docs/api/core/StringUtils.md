# StringUtils

> `const` **StringUtils**: `object`

Defined in: [string/index.ts:26](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/string/index.ts#L26)

字符串工具函数

引入

```ts
import { StringUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| upperFirst | 将字符串的首字母转换为大写 |
| isString | 检查值是否为字符串原始值或对象 |
| lowerFirst | 将字符串的首字母转换为小写 |
| capitalize | 将字符串的首字母转换为大写，其余字符转换为小写 |
| pad | 在左右两侧填充字符 |
| padEnd | 在右侧填充字符 |
| padStart | 在左侧填充字符 |
| reverse | 反转字符串 |
| substr | 根据起始位置和长度提取字符串片段 |
| isBlank | 检查字符串是否为空或仅包含空白字符 |
| truncate | 截断字符串并添加省略号 |

## Type Declaration

### capitalize()

> **capitalize**(`str`): `string`

将字符串的首字母转换为大写，其余字符转换为小写

**类型签名**

```ts
function capitalize(str: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要转换的字符串 |

#### Returns

`string`

转换后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

const result = StringUtils.capitalize('hELLO')
console.log(result) // Output: 'Hello'
```

### isBlank()

> **isBlank**(`str`): `boolean`

检查字符串是否为空或仅包含空白字符

**类型签名**

```ts
function isBlank(str: string): boolean
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要检查的字符串 |

#### Returns

`boolean`

如果字符串为空或仅包含空白字符则返回 true，否则返回 false

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.isBlank('')) // Output: true
console.log(StringUtils.isBlank('   ')) // Output: true
console.log(StringUtils.isBlank('abc')) // Output: false
```

### isString()

> **isString**(`value`): `value is string`

检查值是否为字符串原始值或对象

**类型签名**

```ts
function isString(value: unknown): value is string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `value` | `unknown` | 要检查的值 |

#### Returns

`value is string`

如果值是字符串则返回 true，否则返回 false

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.isString('abc')) // Output: true
console.log(StringUtils.isString(123)) // Output: false
```

### lowerFirst()

> **lowerFirst**(`str`): `string`

将字符串的首字母转换为小写

**类型签名**

```ts
function lowerFirst(str: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要转换的字符串 |

#### Returns

`string`

转换后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

const result = StringUtils.lowerFirst('Hello')
console.log(result) // Output: 'hello'
```

### pad()

> **pad**(`str`, `length`, `chars?`): `string`

如果字符串长度小于指定长度，则在左右两侧填充字符。如果填充字符无法均匀分配，则会被截断。

**类型签名**

```ts
function pad(str: string, length: number, chars?: string): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `str` | `string` | `undefined` | 要填充的字符串 |
| `length` | `number` | `undefined` | 填充后的长度 |
| `chars` | `string` | `' '` | 用于填充的字符串（默认为空格） |

#### Returns

`string`

填充后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.pad('abc', 8)) // Output: '  abc   '
console.log(StringUtils.pad('abc', 8, '_-')) // Output: '_-abc_-_'
```

### padEnd()

> **padEnd**(`str`, `length`, `chars?`): `string`

如果字符串长度小于指定长度，则在右侧填充字符。如果填充字符超过长度，则会被截断。

**类型签名**

```ts
function padEnd(str: string, length: number, chars?: string): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `str` | `string` | `undefined` | 要填充的字符串 |
| `length` | `number` | `undefined` | 填充后的长度 |
| `chars` | `string` | `' '` | 用于填充的字符串（默认为空格） |

#### Returns

`string`

填充后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.padEnd('abc', 6)) // Output: 'abc   '
console.log(StringUtils.padEnd('abc', 6, '_-')) // Output: 'abc_-_'
```

### padStart()

> **padStart**(`str`, `length`, `chars?`): `string`

如果字符串长度小于指定长度，则在左侧填充字符。如果填充字符超过长度，则会被截断。

**类型签名**

```ts
function padStart(str: string, length: number, chars?: string): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `str` | `string` | `undefined` | 要填充的字符串 |
| `length` | `number` | `undefined` | 填充后的长度 |
| `chars` | `string` | `' '` | 用于填充的字符串（默认为空格） |

#### Returns

`string`

填充后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.padStart('abc', 6)) // Output: '   abc'
console.log(StringUtils.padStart('abc', 6, '_-')) // Output: '_-_abc'
```

### reverse()

> **reverse**(`str`): `string`

反转字符串

**类型签名**

```ts
function reverse(str: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要反转的字符串 |

#### Returns

`string`

反转后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

const result = StringUtils.reverse('hello')
console.log(result) // Output: 'olleh'
```

### substr()

> **substr**(`str`, `start`, `length?`): `string`

根据起始位置和长度提取字符串的片段

**类型签名**

```ts
function substr(str: string, start: number, length?: number): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要提取的字符串 |
| `start` | `number` | 起始位置 |
| `length?` | `number` | 提取的长度 |

#### Returns

`string`

提取后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.substr('hello world', 6)) // Output: 'world'
console.log(StringUtils.substr('hello world', 0, 5)) // Output: 'hello'
```

### truncate()

> **truncate**(`str`, `length`, `omission?`): `string`

如果字符串长度超过给定的最大长度，则截断字符串。
截断后的字符串末尾替换为省略号（默认为 "..."）。

**类型签名**

```ts
function truncate(str: string, length: number, omission?: string): string
```

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `str` | `string` | `undefined` | 要截断的字符串 |
| `length` | `number` | `undefined` | 最大长度 |
| `omission` | `string` | `'...'` | 省略号字符串（默认为 "..."） |

#### Returns

`string`

截断后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

console.log(StringUtils.truncate('hello world', 5)) // Output: 'he...'
console.log(StringUtils.truncate('hello world', 8, '...')) // Output: 'hello...'
```

### upperFirst()

> **upperFirst**(`str`): `string`

将字符串的首字母转换为大写

**类型签名**

```ts
function upperFirst(str: string): string
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `str` | `string` | 要转换的字符串 |

#### Returns

`string`

转换后的字符串

#### Example

```ts
import { StringUtils } from '@qy/lancet-ts-core'

const result = StringUtils.upperFirst('hello')
console.log(result) // Output: 'Hello'
```
