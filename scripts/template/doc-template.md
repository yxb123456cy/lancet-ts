---
# 页面标题，通常为模块名
title: {ModuleName}
# 页面描述，SEO 友好
description: {ModuleName} - {Brief Description}
---

# {ModuleName}

> {ModuleName} 模块提供了一系列用于处理 {Functionality} 的工具函数。

## 引入

::: code-group

```ts [ESM]
import { {FunctionName} } from '@qy/lancet-ts-core'
```

```ts [CJS]
const { {FunctionName} } = require('@qy/lancet-ts-core')
```

:::

## 函数列表

| 函数名 | 描述 |
| :--- | :--- |
| [{FunctionName1}](#{functionname1}) | {Brief Description 1} |
| [{FunctionName2}](#{functionname2}) | {Brief Description 2} |

---

## {FunctionName1}

{详细描述函数的功能、用途及注意事项。可以使用 Markdown 语法进行强调或引用。}

### 类型签名

```ts
function {FunctionName1}<T>(arg1: Type1, arg2?: Type2): ReturnType
```

### 参数

| 参数名 | 类型 | 必填 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- | :--- |
| `arg1` | `Type1` | 是 | - | {参数1的详细说明} |
| `arg2` | `Type2` | 否 | `defaultValue` | {参数2的详细说明} |

### 返回值

- **类型**: `ReturnType`
- **说明**: {返回值的详细说明}

### 示例

```ts
import { {FunctionName1} } from '@qy/lancet-ts-core';

// 示例代码说明
const result = {FunctionName1}(...);
console.log(result); // Output: ...
```

::: tip
这里可以添加一些使用技巧或额外的提示信息。
:::

---

## {FunctionName2}

... (重复上述结构)
