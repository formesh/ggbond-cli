#!/usr/bin/env node

import { Command } from 'commander';
import { join, dirname } from 'path';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import {
  initProject,
  buildProject,
  startDevServer,
  startPreviewServer,
} from './commands/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取 package.json 获取版本信息
const packageJsonPath = join(__dirname, '../package.json');
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

const program = new Command();

program
  .name('ggbond')
  .description('GGBond CLI - 一个强大的项目脚手架工具')
  .version(packageJson.version);

// init 命令 - 项目生成
program
  .command('init')
  .description('初始化一个新项目')
  .argument('[project-name]', '项目名称')
  .option('-t, --template <template>', '项目模板类型', 'basic')
  .action(async (projectName, options) => {
    try {
      await initProject(projectName, options);
    } catch (error) {
      console.error(
        '❌ 项目初始化失败:',
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

// build 命令 - 项目打包
program
  .command('build')
  .description('构建项目')
  .option('-e, --env <environment>', '构建环境', 'production')
  .option('-o, --output <dir>', '输出目录', 'dist')
  .action(async options => {
    try {
      await buildProject(options);
    } catch (error) {
      console.error(
        '❌ 项目构建失败:',
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

// dev 命令 - 开发服务器
program
  .command('dev')
  .description('启动开发服务器')
  .action(async options => {
    try {
      await startDevServer(options);
    } catch (error) {
      console.error(
        '❌ 开发服务器启动失败:',
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

// preview 命令 - 预览服务器
program
  .command('preview')
  .description('启动预览服务器')
  .action(async options => {
    try {
      await startPreviewServer(options);
    } catch (error) {
      console.error(
        '❌ 预览服务器启动失败:',
        error instanceof Error ? error.message : String(error)
      );
      process.exit(1);
    }
  });

// 解析命令行参数
program.parse();
