# Lancet TypeScript 工具库

一个现代化的 TypeScript 工具函数库，提供常用的工具函数和实用方法。

## 🏗️ 项目结构

```
lancet-ts-monorepo/
├── core/                    # 核心工具库 (@qy/lancet-ts-core)
├── docs/                    # 文档站点 (Rspress)
├── example/                 # 使用示例
└── requirement/             # 项目需求文档
```

## 📦 核心功能

### @qy/lancet-ts-core
提供以下工具模块：

- **数字工具** - 随机数生成、数值计算
- **字符串工具** - 字符串处理、格式化
- **数学工具** - 数学计算、统计分析
- **布尔工具** - 布尔值操作
- **日期工具** - 日期时间处理
- **Docker工具** - Docker相关操作
- **枚举工具** - 枚举值处理
- **错误工具** - 错误处理工具
- **文件工具** - 文件系统操作
- **函数工具** - 函数工具方法
- **映射工具** - Map数据结构操作
- **网络工具** - 网络相关工具
- **Supabase工具** - Supabase集成工具
- **系统工具** - 系统级工具
- **类型工具** - TypeScript类型工具
- **存储工具** - Cookie、IndexedDB、LocalStorage、SessionStorage操作

## 🚀 快速开始

### 安装

```bash
# 克隆仓库
git clone <repository-url>
cd lancet-ts-monorepo

# 安装依赖
pnpm install

# 构建所有包
pnpm build

# 运行测试
pnpm test

# 启动开发模式
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

const reversed = StringUtils.reverse('hello');
console.log('字符串反转:', reversed);

// 数学工具
const mean = MathUtils.mean([1, 2, 3, 4, 5]);
console.log('平均值:', mean);

const factorial = MathUtils.factorial(5);
console.log('阶乘:', factorial);

const isPrime = MathUtils.isPrime(17);
console.log('是否为质数:', isPrime);

const gcd = MathUtils.gcd(12, 18);
console.log('最大公约数:', gcd);
```

## 📋 API 参考

### NumberUtils

#### `randomInt(min: number, max: number): number`
生成指定范围内的随机整数。

```typescript
const num = NumberUtils.randomInt(1, 10); // 1-10之间的随机整数
```

### StringUtils

#### `capitalize(str: string): string`
将字符串首字母大写。

```typescript
const result = StringUtils.capitalize('hello'); // 'Hello'
```

#### `reverse(str: string): string`
反转字符串。

```typescript
const result = StringUtils.reverse('hello'); // 'olleh'
```

### MathUtils

#### `mean(numbers: number[]): number`
计算数组的平均值。

```typescript
const result = MathUtils.mean([1, 2, 3, 4, 5]); // 3
```

#### `factorial(n: number): number`
计算阶乘。

```typescript
const result = MathUtils.factorial(5); // 120
```

#### `isPrime(n: number): boolean`
判断是否为质数。

```typescript
const result = MathUtils.isPrime(17); // true
```

#### `gcd(a: number, b: number): number`
计算最大公约数。

```typescript
const result = MathUtils.gcd(12, 18); // 6
```

#### `sum(numbers: number[]): number`
计算数组元素的总和。

```typescript
const result = MathUtils.sum([1, 2, 3, 4, 5]); // 15
```

#### `abs(n: number): number`
计算绝对值。

```typescript
const result = MathUtils.abs(-99); // 99
```

#### `pow(base: number, exponent: number): number`
计算幂运算。

```typescript
const result = MathUtils.pow(2, 3); // 8
```

#### `round(value: number, decimals = 0): number`
四舍五入到指定小数位。

```typescript
const result = MathUtils.round(3.14159, 2); // 3.14
```

#### `percent(value: number, total: number, decimals = 2): number`
计算百分比。

```typescript
const result = MathUtils.percent(25, 100); // 25
```

#### `variance(numbers: number[]): number`
计算方差。

```typescript
const result = MathUtils.variance([1, 2, 3, 4, 5]); // 2.5
```

#### `stdDev(numbers: number[]): number`
计算标准差。

```typescript
const result = MathUtils.stdDev([1, 2, 3, 4, 5]); // 1.58
```

## 🧪 测试

项目使用 **Rstest** 作为测试框架：

```bash
# 运行所有测试
pnpm test

# 运行测试并监听文件变化
pnpm test:watch

# 运行指定包的测试
cd core && pnpm test
```

## 📊 代码质量

### 格式化与检查
```bash
# 格式化代码
pnpm format

# 代码质量检查
pnpm lint

# 类型检查
pnpm check-types
```

### 构建命令
```bash
# 构建所有包
pnpm build

# 开发模式构建（监听文件变化）
pnpm dev
```

## 📚 文档

访问文档站点：
```bash
cd docs
pnpm dev
```

## 🎯 设计原则

- **简洁性** - 提供简单直观的API
- **类型安全** - 完整的TypeScript类型支持
- **可测试性** - 所有功能都经过充分测试
- **高性能** - 优化的算法实现
- **易用性** - 一致的API设计风格

## 📄 许可证

ISC License

## 🤝 贡献

欢迎提交Issue和Pull Request来改进这个项目。

---

**注意**: 这是一个工具函数库，专注于提供常用的工具方法。项目遵循现代化的TypeScript开发实践，确保代码质量和类型安全。