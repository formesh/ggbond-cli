import { existsSync } from 'fs';
import { execSync } from 'child_process';

// 项目构建函数
export async function buildProject(options: any) {
  console.log(`🔨 开始构建项目...`);
  console.log(`📦 构建环境: ${options.env}`);
  console.log(`📁 输出目录: ${options.output}`);

  try {
    // 检查是否存在 package.json
    if (!existsSync('package.json')) {
      throw new Error('当前目录不是一个有效的项目目录（缺少 package.json）');
    }

    // 执行构建命令
    console.log('⚡ 执行构建命令...');
    execSync('npm run build', { stdio: 'inherit' });

    console.log('✅ 项目构建完成!');
  } catch (error) {
    throw new Error(
      `构建失败: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
