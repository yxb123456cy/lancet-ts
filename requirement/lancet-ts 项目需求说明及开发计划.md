# lancet-ts 项目需求说明及开发计划

# 一、项目核心需求

## 1. 项目定位

一个现代化、零依赖、强类型、Tree-shaking 友好的纯 TypeScript 工具库（项目名暂定：lancet-ts），覆盖多场景常用工具函数，支持 Node + Browser 双端，兼顾类型安全与轻量高性能。

## 2. 核心目标

- 零运行时依赖，降低接入成本

- 完善 TypeScript 类型支持（strict 模式、无 any、完整泛型、导出 d.ts）

- 兼容 ESM 优先与 CJS，支持 Tree-shaking 按需引入

- 双端适配（Node + Browser），保证多环境可用性

- 高测试覆盖率（≥90%），保障函数稳定性

- 规范工程化配置，支持高效开发与维护

## 3. 功能范围（v1 版本，共41个工具函数）

### 3.1 Array 模块（8个）

chunk、unique、flatten、groupBy、partition、intersection、difference、first、last

### 3.2 String 模块（8个）

camelCase、kebabCase、snakeCase、capitalize、truncate、randomString、isEmail、isUUID

### 3.3 Object 模块（7个）

deepClone、deepMerge、pick、omit、get、set、has

### 3.4 Async 模块（4个）

sleep、retry、timeout、parallelLimit

### 3.5 Function 模块（6个）

debounce、throttle、once、memoize、pipe、compose

### 3.6 Number 模块（4个）

clamp、randomInt、inRange、round

### 3.7 Validate 模块（5个）

isNil、isEmpty、isPlainObject、isBrowser、isNode

## 4. 非功能性要求

### 4.1 类型规范

- 开启 TypeScript strict 模式，禁止使用 any 类型

- 所有函数具备完整泛型支持，公共 API 必须导出 d.ts 类型文件

### 4.2 打包与 Tree-shaking 要求

- 打包输出：ESM、CJS 两种格式 + d.ts 类型文件

- package.json 配置 exports 字段，设置 sideEffects: false

- Tree-shaking 优化：每个函数单文件、不聚合导出，支持两种按需引入方式（整体引入单个函数、单独引入文件）

### 4.3 测试要求

- 测试覆盖率 ≥ 90%，覆盖边界情况、空值、类型行为

- 使用 RsTest 进行单测

### 4.4 工程化要求

采用 Monorepo 管理（Turbo + pnpm），使用 RsLib 构建、RsDoctor 进行体积分析、Biome 规范代码格式。

### 4.5 性能要求

- 核心函数标注时间复杂度，避免重型算法

- 不引入 polyfill，避免使用 JSON.parse(JSON.stringify) 实现深拷贝/深合并

### 4.6 目录结构

```plain text
lancet-ts/
├─ packages/
│   └─ core/
│       ├─ src/
│       │   ├─ array/       # Array 模块函数（单文件）
│       │   ├─ string/      # String 模块函数（单文件）
│       │   ├─ object/      # Object 模块函数（单文件）
│       │   ├─ async/       # Async 模块函数（单文件）
│       │   ├─ function/    # Function 模块函数（单文件）
│       │   ├─ number/      # Number 模块函数（单文件）
│       │   ├─ validate/    # Validate 模块函数（单文件）
│       │   └─ index.ts     # 整体导出入口（不影响按需引入）
│       ├─ __tests__/       # 单测文件（与src目录结构对应）
│       ├─ package.json     # 子包配置
│       └─ tsconfig.json    # TypeScript 配置
├─ turbo.json               # Turbo 配置
├─ pnpm-workspace.yaml      # pnpm 工作区配置
└─ biome.json               # Biome 代码规范配置
```

## 5. 发布与验收标准

### 5.1 发布规范

- 使用 changesets 管理版本，遵循 semver 版本规范

- 发布时同步更新 CHANGELOG 与 README（包含安装、使用示例、Tree-shaking 说明）

### 5.2 验收标准（v1 版本）

- 完成 ≥ 40 个工具函数（当前规划41个，满足要求）

- 类型支持完整，无 any 类型，d.ts 导出正常

- 构建产物（ESM、CJS、d.ts）正常，可直接使用

- 支持两种按需引入方式，Tree-shaking 生效

- 测试覆盖率 ≥ 90%，无明显 bug

- 无任何运行时依赖

## 6. 核心卖点（对外）

- 现代 TypeScript 优先设计，类型安全有保障

- 零依赖、轻量，接入无负担

- 完整 Tree-shaking 支持，按需引入减小打包体积

- 双端适配，Node 与 Browser 均可使用

- 高性能，核心函数优化到位

## 7. 未来扩展方向（非 v1 版本）

- 开发浏览器专用工具、Node 专用工具

- 新增 CLI 工具，提升使用便捷性

- 开发 React/Vue 适配层，贴合框架使用场景

- 引入插件机制，支持自定义扩展函数

# 二、开发计划（可落地，总周期约 3-4 周）

## 阶段1：筹备期（3天）—— 搭建基础环境，明确规范

### 核心任务

- 初始化项目目录，搭建 Monorepo 环境（Turbo + pnpm），创建对应配置文件（turbo.json、pnpm-workspace.yaml）

- 配置 TypeScript（strict 模式、tsconfig.json）、Biome 代码规范（biome.json）

- 配置构建工具 RsLib、单测工具 RsTest、体积分析工具 RsDoctor

- 确定函数单文件命名规范、导出规范、类型定义规范

- 初始化 README 模板、CHANGELOG 模板，配置 package.json 基础信息

### 交付物

完整项目基础环境、所有配置文件、规范文档、模板文件

## 阶段2：核心开发期（10-12天）—— 按模块开发工具函数，同步编写单测

### 开发节奏（按模块分批推进，每天完成3-4个函数，同步编写单测）

- 第1-2天：Array 模块（8个函数）+ 对应单测，标注核心函数时间复杂度

- 第3-4天：String 模块（8个函数）+ 对应单测，重点验证正则相关函数（isEmail、isUUID）

- 第5-6天：Object 模块（7个函数）+ 对应单测，重点优化 deepClone、deepMerge 性能

- 第7天：Async 模块（4个函数）+ 对应单测，验证异步场景兼容性

- 第8-9天：Function 模块（6个函数）+ 对应单测，重点测试防抖、节流、记忆化函数的准确性

- 第10天：Number 模块（4个）+ Validate 模块（5个）+ 对应单测，覆盖边界值测试

### 关键要求

每个函数单独一个文件，遵循规范导出；单测覆盖率同步达标（暂不低于85%，留优化空间）；同步编写函数类型定义，禁止 any 类型。

### 交付物

所有工具函数代码、对应单测文件、完整类型定义文件

## 阶段3：测试与优化期（3-4天）—— 补全单测，优化性能与兼容性

### 核心任务

- 补全单测，将覆盖率提升至 ≥90%，覆盖边界情况、空值、异常场景、类型行为

- 优化函数性能，检查时间复杂度，替换低效实现（如避免 JSON.parse/stringify）

- 验证双端兼容性：在 Node 环境、主流浏览器（Chrome、Firefox、Edge）中测试所有函数

- 验证 Tree-shaking 效果，测试两种按需引入方式是否正常

- 使用 RsDoctor 分析打包体积，优化冗余代码

- 检查代码规范，使用 Biome 格式化代码，修复所有规范问题

### 交付物

优化后的函数代码、完整单测（覆盖率≥90%）、兼容性测试报告、体积分析报告

## 阶段4：构建与发布准备期（2天）

### 核心任务

- 使用 RsLib 构建产物，生成 ESM、CJS 格式文件及 d.ts 类型文件

- 配置 package.json 的 exports 字段，设置 sideEffects: false，确保 Tree-shaking 生效

- 完善 README，补充安装命令、使用示例（整体引入、按需引入）、Tree-shaking 说明、模块说明

- 使用 changesets 初始化版本管理，编写 CHANGELOG（记录 v1 版本所有功能、优化点）

- 本地验证构建产物，测试引入使用是否正常，排查发布前隐患

### 交付物

构建产物（ESM、CJS、d.ts）、完善的 README、CHANGELOG、配置完成的 package.json

## 阶段5：发布与验收期（1天）

### 核心任务

- 遵循 semver 规范，使用 changesets 发布 v1 版本（暂定 1.0.0）

- 对照验收标准，逐一验证所有要求（函数数量、类型、构建产物、按需引入、测试覆盖率等）

- 记录验收结果，修复验收过程中发现的微小 bug 或配置问题

- 归档项目文档、测试报告、构建产物，完成 v1 版本交付

### 交付物

发布完成的 npm 包、验收报告、完整项目归档文件

## 三、补充说明

- 开发优先级：先完成高频使用模块（Array、String、Object），再推进其他模块，确保核心功能优先落地

- 风险应对：若某模块函数开发难度超出预期（如 deepClone 性能优化），可适当延长对应模块开发时间，压缩优化期冗余时间

- 可选项：若需缩短周期，可优先完成 MVP 版本（筛选20个高频函数，2周内完成，后续补充剩余函数）
> （注：文档部分内容可能由 AI 生成）