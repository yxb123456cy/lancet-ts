# Lancet TypeScript 工具库

一个基于 **Rspack** 技术栈构建的现代化 TypeScript 工具函数库，旨在提供高性能、类型安全且易于维护的常用工具函数。

## ⚡️ 技术栈 (Rspack Stack)

本项目全面采用基于 Rust 的高性能前端工具链，确保极速的开发体验与构建效率：

- **📚 Rslib** - 基于 Rspack 的库开发工具，提供超快的构建速度。
- **📖 Rspress** - 基于 Rspack 的静态站点生成器，用于构建高性能的文档站点。
- **🦀 Biome (RsLint / RsFormat)** - 极速的代码格式化与不仅限于 Lint 的工具链，替代 ESLint + Prettier。
- **🧪 RsTest** - (Rstest) 现代化的测试框架，确保代码的可靠性。
- **🩺 RsDoctor** - (Optional) 构建分析工具，用于优化产物与构建性能。

## 🏗️ 项目结构

```
lancet-ts-monorepo/
├── core/                    # 核心工具库 (@qy/lancet-ts-core)
├── docs/                    # 文档站点 (Rspress)
```

## 📦 核心功能

### @qy/lancet-ts-core
提供以下工具模块：

- **数字工具 (NumberUtils)** - 随机数生成、数值计算
- **字符串工具 (StringUtils)** - 字符串处理、格式化
- **数学工具 (MathUtils)** - 数学计算、统计分析
- **布尔工具 (BooleanUtils)** - 布尔值操作
- **日期工具 (DateUtils)** - 日期时间处理
- **枚举工具 (EnumUtils)** - 枚举值处理
- **错误工具 (ErrorUtils)** - 错误处理工具
- **文件工具 (FileUtils)** - 文件系统操作
- **函数工具 (FuncUtils)** - 函数工具方法
- **映射工具 (MapUtils)** - Map数据结构操作
- **网络工具 (NetUtils)** - 网络相关工具
- **系统工具 (SystemUtils)** - 系统级工具 (Browser/Node检测)
- **类型工具 (TypeUtils)** - TypeScript类型工具
- **存储工具** - Cookie、IndexedDB、LocalStorage、SessionStorage操作

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd lancet-ts-monorepo

# 安装依赖
pnpm install
```

### 开发与构建

```bash
# 构建所有包 (使用 Turbo + Rslib)
pnpm build

# 启动开发模式 (监听文件变化)
pnpm dev
```

### 使用示例

```typescript
import { NumberUtils, StringUtils, MathUtils } from '@qy/lancet-ts-core';

// 数字工具
const randomNum = NumberUtils.randomInt(1, 100);
console.log('随机数:', randomNum);

// 字符串工具
const capitalized = StringUtils.capitalize('hello world');
console.log('首字母大写:', capitalized);

// 数学工具
const mean = MathUtils.mean([1, 2, 3, 4, 5]);
console.log('平均值:', mean);
```

## � 代码质量与测试

我们使用 **Biome** 和 **RsTest** 来保证代码质量：

```bash
# 代码格式化 (Biome)
pnpm format

# 代码质量检查 (Biome)
pnpm lint

# 类型检查 (TypeScript)
pnpm check-types

# 运行测试 (RsTest)
pnpm test

# 监听模式运行测试
pnpm run test:watch
```

## � 文档

文档站点由 **Rspress** 驱动，提供极速的访问体验：

```bash
cd docs
pnpm dev
```

## 🎯 设计原则

- **高性能** - 基于 Rust 工具链构建，秒级启动与热更新。
- **类型安全** - 严格的 TypeScript 类型定义，无 `any` 污染。
- **零依赖** - 核心库零运行时依赖，轻量级。
- **易用性** - 统一的 API 设计风格，详尽的 JSDoc 注释。

## 📄 许可证

ISC License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

---

**注意**: 这是一个工具函数库，专注于提供常用的工具方法。项目遵循现代化的 TypeScript 开发实践。
