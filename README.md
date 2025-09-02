# ggbond97-cli

一个简单的项目脚手架工具，用于快速创建前端项目。

## 快速开始

### 使用 npx（推荐）

无需安装，直接使用：

```bash
npx ggbond97-cli init my-project
```

### 全局安装

```bash
npm install -g ggbond97-cli
```

安装后使用：

```bash
ggbond97 init my-project
```

## 使用

### 创建新项目

```bash
# 推荐方式：使用 npx
npx ggbond97-cli init my-project

# 或者全局安装后使用
ggbond97 init my-project
```

支持的框架：
- React
- Vue
- Vanilla JavaScript

每个框架都可以选择是否使用 TypeScript。

### 开发命令

```bash
# 启动开发服务器
ggbond dev

# 构建项目
ggbond build

# 预览构建结果
ggbond preview
```

### 命令选项

```bash
# 自定义端口
ggbond dev --port 8080

# 自定义主机
ggbond dev --host 0.0.0.0
```

## 特性

- 🚀 基于 Vite 的快速构建
- 📦 开箱即用的项目模板
- 🔧 TypeScript 支持
- 🎯 简洁的交互式命令行

## 许可证

MIT