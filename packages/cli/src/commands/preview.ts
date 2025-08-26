import { existsSync } from 'fs';
import { execSync } from 'child_process';

// 预览服务器函数
export async function startPreviewServer(options: any) {
  console.log(`🔍 启动预览服务器...`);
  try {
    // 检查是否存在 package.json
    if (!existsSync('package.json')) {
      throw new Error('当前目录不是一个有效的项目目录（缺少 package.json）');
    }
    // 检查是否存在构建产物
    if (!existsSync('dist') && !existsSync('build')) {
      console.log('⚠️  未找到构建产物，正在执行构建...');
      execSync('npm run build', { stdio: 'inherit' });
    }
    // 设置环境变量
    process.env.PORT = options.port;
    process.env.HOST = options.host;
    // 执行预览命令
    console.log('⚡ 启动预览服务器...');
    execSync('npm run preview', { stdio: 'inherit' });
  } catch (error) {
    throw new Error(
      `预览服务器启动失败: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
