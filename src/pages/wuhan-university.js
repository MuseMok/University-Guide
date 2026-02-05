import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/whu-special.module.css';

// === 自动导入所有博客文章的逻辑 (复用你之前的代码) ===
function importAllBlogPosts() {
  const context = require.context('../../blog', false, /\.md$/);
  const posts = [];
  context.keys().forEach((key) => {
    if (key.endsWith('.md')) {
      const module = context(key);
      if (module.metadata) {
        posts.push({ metadata: module.metadata });
      }
    }
  });
  // 按日期排序
  return posts.sort((a, b) => new Date(b.metadata.date) - new Date(a.metadata.date));
}

const allBlogPosts = importAllBlogPosts();

export default function WuhanUniversityPage() {
  // 筛选只属于"武汉大学"的文章
  const whuPosts = allBlogPosts.filter(post => {
    const tags = post.metadata.tags || [];
    // 检查标签里是否包含以下关键词
    return tags.some(tag => {
      const label = tag.label || tag;
      return ['武汉大学', '武大', 'WHU'].includes(label);
    });
  });

  // 点击箭头滚动到内容区
  const scrollToContent = () => {
    document.getElementById('whu-content').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Layout title="武汉大学专栏" description="自强 弘毅 求是 拓新">
      
      {/* 顶部 Hero 区域 */}
      <div className={styles.heroSection}>
        <h1 className={styles.title}>自强 弘毅 求是 拓新</h1>
        <p className={styles.subtitle}>
          欢迎来到珞珈山人民公园。<br/>
          这里有樱花，有东湖，更有学长学姐们留下的宝贵经验。
        </p>
        
        {/* 下滑箭头 */}
        <div className={styles.scrollDown} onClick={scrollToContent}>
          ↓
        </div>
      </div>

      {/* 下方文章列表区域 */}
      <div id="whu-content" className={styles.contentSection}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>📚 武大生存指南 ({whuPosts.length}篇)</h2>
          
          {whuPosts.length > 0 ? (
            <div className={styles.grid}>
              {whuPosts.map((post, idx) => (
                <Link to={post.metadata.permalink} key={idx} className={styles.card}>
                  <div className={styles.cardTitle}>{post.metadata.title}</div>
                  <div className={styles.cardMeta}>
                    📅 {new Date(post.metadata.date).toLocaleDateString('zh-CN')}
                    {post.metadata.authors && post.metadata.authors.length > 0 && (
                      <span style={{marginLeft: '10px'}}>
                        👤 {post.metadata.authors[0].name}
                      </span>
                    )}
                  </div>
                  {post.metadata.description && (
                    <p style={{marginTop: '10px', color: '#666'}}>
                      {post.metadata.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          ) : (
            <div style={{textAlign: 'center', padding: '2rem'}}>
              <p>暂无文章，快去写一篇吧！记得打上"武汉大学"的标签哦。</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}