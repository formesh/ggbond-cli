# ggbond97-cli

一个简单高效的项目脚手架工具，基于 Vite 构建。

## 安装

```bash
npm install -g ggbond97-cli
# 或者
pnpm add -g ggbond97-cli
# 或者
yarn global add ggbond97-cli
```

## 使用

### 创建新项目

```bash
ggbond97 init my-project
```

交互式选择：
1. 选择框架：React / Vue / Vanilla
2. 选择是否使用 TypeScript

### 开发命令

```bash
# 启动开发服务器
ggbond97 dev

# 构建项目
ggbond97 build

# 预览构建结果
ggbond97 preview
```

### 命令选项

```bash
# 指定端口和主机
ggbond97 dev --port 3000 --host 0.0.0.0
ggbond97 preview --port 4173

# 查看帮助
ggbond97 --help
ggbond97 init --help
```

## 支持的模板

- **React**: `template-react` (JavaScript)
- **React + TypeScript**: `template-react-ts`
- **Vue**: `template-vue` (JavaScript)
- **Vue + TypeScript**: `template-vue-ts`
- **Vanilla**: `template-vanilla` (JavaScript)
- **Vanilla + TypeScript**: `template-vanilla-ts`

## 特性

- 🚀 基于 Vite，快速构建
- 📦 多种项目模板
- 💪 TypeScript 支持
- 🎯 交互式 CLI
- ⚡ 热重载开发

## 许可证

MIT