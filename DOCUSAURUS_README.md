# Docusaurus 迁移指南

本项目已从 MkDocs 迁移到 Docusaurus。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm start
```

浏览器会自动打开 `http://localhost:3000`

### 构建

```bash
npm run build
```

生成的静态文件在 `build/` 目录

### 部署

推送到 main 分支会自动触发 GitHub Actions 部署到 GitHub Pages。

## 📝 添加新文章

1. 在 `blog/` 目录创建新文件
2. 文件名格式：`YYYY-MM-DD-slug.md`
3. 添加 frontmatter：

```markdown
---
slug: 文章标识
title: 文章标题
authors: [作者ID]
tags: [标签1, 标签2]
date: YYYY-MM-DD
---

摘要内容

<!--truncate-->

正文内容...
```

4. 如果是新作者，在 `blog/authors.yml` 添加作者信息

## 📂 目录结构

```
University-Guide/
├── blog/                    # 博客文章
│   ├── 2024-02-03-shandong-sdu-1.md
│   └── authors.yml
├── docs/                    # 文档页面
│   ├── reading.md
│   ├── writing.md
│   └── contact.md
├── src/
│   ├── css/                # 自定义样式
│   ├── components/         # React 组件
│   └── pages/             # 自定义页面
├── static/                # 静态资源
├── docusaurus.config.js   # 主配置
├── sidebars.js           # 侧边栏
└── package.json
```

## 🎨 自定义

- 修改主题：编辑 `src/css/custom.css`
- 修改配置：编辑 `docusaurus.config.js`
- 添加组件：在 `src/components/` 创建 React 组件

## 📚 文档

- [Docusaurus 官方文档](https://docusaurus.io/)
- [Markdown 特性](https://docusaurus.io/docs/markdown-features)
- [博客功能](https://docusaurus.io/docs/blog)

## 🔄 从 MkDocs 迁移的变化

### 文章位置
- **旧**：`docs/article/*.md`
- **新**：`blog/YYYY-MM-DD-*.md`

### 标签格式
- **旧**：YAML frontmatter 的 `tags` 数组
- **新**：同样是 frontmatter，但需要日期和作者信息

### 导航
- **旧**：通过 `mkdocs.yml` 的 `nav` 配置
- **新**：博客自动生成，文档通过 `sidebars.js` 配置

## ⚡ 常用命令

```bash
# 安装依赖
npm install

# 开发服务器
npm start

# 构建生产版本
npm run build

# 本地预览构建结果
npm run serve

# 清除缓存
npm run clear
```

## 🐛 问题排查

### 端口被占用

```bash
npm start -- --port 3001
```

### 清除缓存

```bash
npm run clear
npm start
```

### 依赖问题

```bash
rm -rf node_modules package-lock.json
npm install
```

## 📞 需要帮助？

查看 [联系我们](docs/contact.md) 或提交 [GitHub Issue](https://github.com/musemok/University-Guide/issues)
