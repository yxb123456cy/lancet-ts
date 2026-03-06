# @changgang-xiaoye/lancet-ts-core

一个基于 Rspack 技术栈构建的现代化 TypeScript 工具函数库，旨在提供高性能、类型安全且易于维护的常用工具函数。

## ✨ 特性

- 🚀 **高性能** - 基于 Rspack 构建，提供极致的构建性能
- 🔒 **类型安全** - 完整的 TypeScript 类型定义
- 📦 **模块化** - 按需引入，减少打包体积
- 🛠️ **现代化** - 使用最新的 JavaScript/TypeScript 特性
- 📚 **完善的文档** - 详细的 API 文档和使用示例

## 📦 安装

```bash
npm install @changgang-xiaoye/lancet-ts-core
```

或者使用其他包管理器：

```bash
# pnpm
pnpm add @changgang-xiaoye/lancet-ts-core

# yarn
yarn add @changgang-xiaoye/lancet-ts-core
```

## 🚀 快速开始

```typescript
import { MathUtils } from "@changgang-xiaoye/lancet-ts-core";

console.log(MathUtils.abs(-10));
```

## 📚 API 文档

详细的 API 文档请访问：[https://lancet-ts.pages.dev/guide/index.html](https://lancet-ts.pages.dev/guide/index.html)

## 🔧 开发

### 安装依赖

```bash
pnpm install
```

### 构建项目

```bash
# 生产构建
pnpm run build

# 开发模式（监听文件变化）
pnpm run dev
```

### 代码检查

```bash
# 运行类型检查
pnpm run check-types

# 运行代码检查
pnpm run lint

# 格式化代码
pnpm run format
```

### 运行测试

```bash
# 运行测试
pnpm run test

# 监听模式运行测试
pnpm run test:watch
```

### 生成文档

```bash
pnpm run gen:docs
```

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 🔗 相关链接

- [GitHub 仓库](https://github.com/yxb123456cy/lancet-ts)
- [文档站点](https://lancet-ts.pages.dev/guide/index.html)
- [问题反馈](https://github.com/yxb123456cy/lancet-ts/issues)
