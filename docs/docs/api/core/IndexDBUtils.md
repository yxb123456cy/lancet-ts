# IndexDBUtils

> `const` **IndexDBUtils**: `object`

Defined in: [webstorage/indexdb/index.ts:17](https://github.com/yxb123456cy/lancet-ts/blob/d07583f5369bb971e460d2cbe4aeb52914709807/core/src/webstorage/indexdb/index.ts#L17)

IndexedDB 工具函数

引入

```ts
import { IndexDBUtils } from '@qy/lancet-ts-core'
```

函数列表

| 函数名 | 描述 |
| :--- | :--- |
| open | 打开 IndexedDB 数据库 |
| delete | 删除 IndexedDB 数据库 |

## Type Declaration

### delete()

> **delete**(`name`): `Promise`\<`void`\>

删除 IndexedDB 数据库

**类型签名**

```ts
function delete(name: string): Promise<void>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | 数据库名称 |

#### Returns

`Promise`\<`void`\>

Promise 对象

#### Example

```ts
import { IndexDBUtils } from '@qy/lancet-ts-core'

IndexDBUtils.delete('myDB').then(() => {
  console.log('Database deleted')
})
```

### open()

> **open**(`name`, `version`): `Promise`\<`IDBDatabase`\>

打开 IndexedDB 数据库

**类型签名**

```ts
function open(name: string, version: number): Promise<IDBDatabase>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `name` | `string` | 数据库名称 |
| `version` | `number` | 版本号 |

#### Returns

`Promise`\<`IDBDatabase`\>

数据库实例 Promise

#### Example

```ts
import { IndexDBUtils } from '@qy/lancet-ts-core'

IndexDBUtils.open('myDB', 1).then((db) => {
  console.log('Database opened')
})
```
