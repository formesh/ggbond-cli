import { existsSync } from 'fs';
import { execSync } from 'child_process';

// 开发服务器函数
export async function startDevServer(options: any) {
  console.log(`🚀 启动开发服务器...`);
  try {
    // 检查是否存在 package.json
    if (!existsSync('package.json')) {
      throw new Error('当前目录不是一个有效的项目目录（缺少 package.json）');
    }
    // 设置环境变量
    process.env.PORT = options.port;
    process.env.HOST = options.host;
    // 执行开发命令
    console.log('⚡ 启动开发服务器...');
    execSync('npm run dev', { stdio: 'inherit' });
  } catch (error) {
    throw new Error(
      `开发服务器启动失败: ${error instanceof Error ? error.message : String(error)}`
    );
  }
}
