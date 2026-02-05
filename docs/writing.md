---
id: writing
title: 贡献指南
sidebar_label: 贡献指南
---

# ✍️ 贡献指南

感谢你愿意分享自己的大学经历！你的经验将帮助学弟学妹们更好地了解大学生活。

## 📝 投稿方式

### 方式一：发送邮件

将文章以 Markdown 或者 Word 文档格式发送至维护者邮箱 University_Guide@163.com ，我们会帮你发布。

请将投稿的主题命名为：`YYYY-MM-DD-author-university`

如果您选择发送邮件投稿，请接着阅读 [审核标准](#-审核标准) 部分。

### 方式二：通过 GitHub

1. **Fork 项目**：点击右上角 Fork 按钮
2. **克隆到本地**：
   ```bash
   git clone https://github.com/你的用户名/University-Guide.git
   cd University-Guide
   ```
3. **创建文章**：在 `blog/` 目录下创建新文章
4. **添加作者信息**（首次投稿必须）：在 `blog/authors.yml` 中添加你的信息（参见 [作者信息](#-作者信息) 部分）
5. **本地预览**（可选）：
   ```bash
   npm install
   npm start
   ```
6. **提交更改**：
   ```bash
   git add blog/
   git commit -m "添加：文章标题"
   git push
   ```
7. **发起 PR**：在 GitHub 上创建 Pull Request

如果这一部分仍有疑问，可以阅读 [开发者指南](/docs/developer) 或者直接使用 [邮件投稿](#方式一发送邮件)。

## 📄 文章格式

如果您想用 GitHub 提交，请阅读以下内容

### 文件命名

文件名格式：`YYYY-MM-DD-slug.md`

例如：`2024-02-05-beijing-pku-1.md`

### 文章模板

```markdown
---
slug: 学校简称-专业-序号
title: 文章标题
authors: [你的用户名]
tags: [学校名, 专业/主题, 其他标签]
date: YYYY-MM-DD
---

简短的文章摘要（1-2句话）

<!--truncate-->

## 正文内容

在这里写你的经历和感受...
```

**重要说明：**
- `<!--truncate-->`：这是文章摘要分隔符，在此之前的内容会显示在文章列表页，之后的是正文
- 摘要部分应简洁明了，引导读者继续阅读

### 添加图片

如果需要在文章中添加图片：

1. 将图片文件放在 `static/img/` 目录下
2. 在文章中使用 Markdown 语法引用：
   ```markdown
   ![图片描述](/img/图片文件名.jpg)
   ```
3. 建议图片命名规范：`学校-主题-序号.jpg`
4. 图片大小建议控制在 1MB 以内

### 标签建议

请为文章添加合适的标签：

**必须包含：**
- 学校名（如：山东大学）
- 主题标签（如：饮食、住宿、保研等）

**可选包含：**
- 专业名（如：计算机、医学）
- 校区名（如：青岛校区）
- 其他相关标签

## 👤 作者信息

首次投稿需要在 `blog/authors.yml` 中添加你的信息：

```yaml
your-username:
  name: 你的昵称
  title: 学校 + 专业
  url: https://github.com/your-username
  image_url: https://github.com/your-username.png
```

## 🔍 审核标准

文章发布前会经过审核，审核标准：

1. **内容真实**：基于真实经历
2. **表达客观**：客观陈述事实
3. **格式规范**：符合模板要求
4. **言论合法**：不得出现过激言论，不得讨论国家政治

##  PR 审核流程

通过 GitHub 提交 PR 后：

1. **自动检查**：GitHub Actions 会自动检查构建是否成功
2. **人工审核**：维护者会在 1-3 个工作日内审核内容
3. **反馈修改**：如需修改，维护者会在 PR 中留言说明
4. **合并发布**：审核通过后会合并到主分支并自动部署

## 🖥️ 本地预览（可选）

如果想在提交前预览效果：

```bash
# 安装依赖
npm install

# 启动本地服务器
npm start
```

浏览器会自动打开 `http://localhost:3000`，你可以实时预览文章效果。

## 💡 示例文章

可以参考现有文章：

- [山大计算机测如评](/blog/shandong-sdu-1)
- [武汉大学饮食大测评](/blog/hubei-whu-1)
- [中山大学旅游管理分享](/blog/guangdong-sysu-1)

如有任何问题，请查看 [联系我们](/docs/contact) 页面。
