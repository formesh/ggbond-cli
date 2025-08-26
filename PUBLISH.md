# 自动发布指南

本项目配置了 Git Hook 来实现提交时自动发布 npm 包的功能。

## 🚀 快速使用

### 方式一：手动发布（推荐）

```bash
# 1. 更新版本号
pnpm version:patch   # 补丁版本 (1.0.0 -> 1.0.1)
pnpm version:minor   # 次要版本 (1.0.0 -> 1.1.0)
pnpm version:major   # 主要版本 (1.0.0 -> 2.0.0)

# 2. 提交更改
git add .
git commit -m "chore: bump version to x.x.x"

# 3. 手动发布
pnpm publish:cli
```

### 方式二：自动发布

```bash
# 1. 启用自动发布
export AUTO_PUBLISH=true

# 2. 更新版本并提交（会自动触发发布）
pnpm version:patch
git add .
git commit -m "chore: bump version"

# 或者使用快捷命令
pnpm commit:publish -m "your commit message"
```

## 📋 工作原理

1. **Git Hook**: 使用 `post-commit` 钩子监听提交
2. **条件检查**: 
   - 检查是否设置了 `AUTO_PUBLISH=true` 环境变量
   - 检查是否在主分支 (`main` 或 `master`)
   - 检查 `packages/cli/package.json` 是否有变更
3. **自动流程**: 
   - 构建项目 (`pnpm build`)
   - 发布到 npm (`npm publish`)

## 🛠️ 可用脚本

| 脚本 | 描述 |
|------|------|
| `pnpm publish:cli` | 手动构建并发布 CLI 包 |
| `pnpm commit:publish` | 启用自动发布的提交 |
| `pnpm version:patch` | 升级补丁版本号 |
| `pnpm version:minor` | 升级次要版本号 |
| `pnpm version:major` | 升级主要版本号 |

## ⚠️ 注意事项

1. **npm 登录**: 确保已登录 npm (`npm login`)
2. **权限检查**: 确保有发布权限
3. **版本管理**: 建议使用语义化版本控制
4. **测试**: 发布前确保代码已通过测试
5. **环境变量**: 自动发布默认关闭，需要手动启用

## 🔧 配置文件

- **Git Hook**: `.husky/post-commit`
- **包配置**: `packages/cli/package.json`
- **项目脚本**: `package.json`

## 🚫 禁用自动发布

```bash
# 临时禁用
unset AUTO_PUBLISH

# 或者不设置环境变量（默认禁用）
git commit -m "normal commit"
```

## 🐛 故障排除

如果自动发布失败：

1. 检查构建是否成功
2. 检查 npm 登录状态
3. 检查网络连接
4. 查看详细错误信息
5. 使用手动发布作为备选方案