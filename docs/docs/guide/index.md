# Lancet TS 指南

## 📖 概述

Lancet TS 是一个基于 [Rspack](https://rspack.dev/) 技术栈构建的现代化 TypeScript 工具函数库，旨在为开发者提供高性能、类型安全且易于维护的常用工具函数。

### ✨ 核心特性

- **⚡ 极致性能**: 基于 Rust 驱动的 Rspack 构建，提供闪电般的构建速度和运行时性能
- **🔒 类型安全**: 完整的 TypeScript 类型定义，提供智能的代码提示和类型检查
- **📦 模块化设计**: 支持按需引入，最小化打包体积，提升应用加载速度
- **🛠️ 现代化开发**: 使用最新的 JavaScript/TypeScript 特性，支持现代浏览器和 Node.js
- **📚 完善文档**: 详细的 API 文档、使用示例和最佳实践指南
- **🚀 易于使用**: 简洁的 API 设计，开箱即用，快速集成到任何项目中

### 🎯 设计目标

Lancet TS 专注于解决日常开发中常见的工具函数需求，提供一套经过充分测试、性能优化的工具函数集合。无论是前端项目还是 Node.js 后端服务，都能从中受益。

## 🚀 快速开始

### 📦 安装

使用你喜欢的包管理器安装 Lancet TS：

:::code-group

```bash [npm]
npm install @changgang-xiaoye/lancet-ts-core
```

```bash [pnpm]
pnpm add @changgang-xiaoye/lancet-ts-core
```

```bash [yarn]
yarn add @changgang-xiaoye/lancet-ts-core
```

:::

### 🔧 基本使用

安装完成后，你可以在项目中按需引入所需的工具函数：

```typescript
import { formatDate, deepClone, debounce, throttle } from '@changgang-xiaoye/lancet-ts-core';

// 日期格式化
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD HH:mm:ss');
console.log(formattedDate); // 2024-01-01 12:00:00

// 深拷贝对象
const originalObj = { name: 'Lancet', version: '1.0.0' };
const clonedObj = deepClone(originalObj);

// 防抖函数
const debouncedSearch = debounce((keyword: string) => {
  console.log('搜索:', keyword);
}, 300);

// 节流函数
const throttledScroll = throttle(() => {
  console.log('滚动事件处理');
}, 100);
```

### 📋 函数分类

Lancet TS 提供了丰富的工具函数，按功能分类如下：

#### 📝 字符串处理

```typescript
import { camelCase, kebabCase, truncate } from '@changgang-xiaoye/lancet-ts-core';

camelCase('hello world'); // 'helloWorld'
kebabCase('helloWorld');  // 'hello-world'
truncate('这是一个很长的字符串', 10); // '这是一个很...'
```

#### 🔢 数值计算

```typescript
import { clamp, randomInt, round } from '@changgang-xiaoye/lancet-ts-core';

clamp(15, 0, 10);     // 10
randomInt(1, 100);     // 1-100 之间的随机整数
round(3.14159, 2);    // 3.14
```

#### 📅 日期时间

```typescript
import { formatDate, isSameDay, addDays } from '@changgang-xiaoye/lancet-ts-core';

formatDate(new Date(), 'YYYY年MM月DD日'); // 2024年01月01日
isSameDay(new Date('2024-01-01'), new Date('2024-01-01')); // true
addDays(new Date(), 7); // 7天后的日期
```

#### 🔄 函数工具

```typescript
import { debounce, throttle, memoize } from '@changgang-xiaoye/lancet-ts-core';

// 防抖 - 在事件停止触发后执行
const debouncedFn = debounce(() => console.log('执行'), 300);

// 节流 - 限制函数执行频率
const throttledFn = throttle(() => console.log('执行'), 100);

// 记忆化 - 缓存函数结果
const memoizedFn = memoize((n: number) => n * 2);
```

#### 🎯 类型判断

```typescript
import { isString, isArray, isObject, isEmpty } from '@changgang-xiaoye/lancet-ts-core';

isString('hello');     // true
isArray([1, 2, 3]);     // true
isObject({});           // true
isEmpty([]);            // true
isEmpty({});            // true
```

### 🛠️ 开发环境设置

如果你想为 Lancet TS 贡献代码，可以按照以下步骤设置开发环境：

```bash
# 克隆仓库
git clone https://github.com/yxb123456cy/lancet-ts.git

# 进入项目目录
cd lancet-ts

# 安装依赖
pnpm install

# 构建项目
pnpm run build

# 运行测试
pnpm run test

# 开发模式（监听文件变化）
pnpm run dev
```

### 📚 了解更多

- 🔗 [API 文档](/api/core/BooleanUtils.html) - 查看所有可用的工具函数
- 💡 [示例代码](https://github.com/yxb123456cy/lancet-ts/tree/main/examples) - 学习如何在实际项目中使用
- 🐛 [问题反馈](https://github.com/yxb123456cy/lancet-ts/issues) - 报告问题或提出功能建议
- ⭐ [GitHub 仓库](https://github.com/yxb123456cy/lancet-ts) - 给项目点个 Star 支持我们

### 🎉 贡献指南

我们欢迎所有形式的贡献，包括但不限于：

- 🐛 报告 Bug
- 💡 提出新功能建议
- 📖 改进文档
- 🔧 提交代码改进

请查看我们的 [贡献指南](https://github.com/yxb123456cy/lancet-ts/blob/main/CONTRIBUTING.md) 了解详细信息。

---

**Lancet TS** - 让 TypeScript 开发更高效、更愉快！ 🚀
