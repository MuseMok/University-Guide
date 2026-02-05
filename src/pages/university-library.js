import React, { useState, useMemo } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/university-library.module.css';
import { allProvinces } from '../data/universityData';

// 使用 webpack 的 require.context 直接读取博客文件  
function getBlogPostsWithTags() {
  try {
    const context = require.context('../../blog', false, /\.md$/);
    const posts = [];
    
    context.keys().forEach((key) => {
      if (key.endsWith('.md')) {
        try {
          const module = context(key);
          if (module.frontMatter && module.frontMatter.tags) {
            posts.push({
              tags: module.frontMatter.tags,
              slug: module.frontMatter.slug || key
            });
          }
        } catch (error) {
          console.error(`Failed to load blog post: ${key}`, error);
        }
      }
    });
    
    return posts;
  } catch (error) {
    console.error('获取博客文章失败:', error);
    return [];
  }
}

// 判断标签是否是学校名称
function isUniversityTag(tag) {
  const universityKeywords = ['大学', '学院', '学校'];
  return universityKeywords.some(keyword => tag.includes(keyword));
}

// 从省份全称或简称匹配省份
function matchProvince(tag) {
  // 直接匹配省份全称
  let province = allProvinces.find(p => p.province === tag);
  if (province) return province;
  
  // 匹配省份简称（如"广东"匹配"广东省"）
  province = allProvinces.find(p => 
    p.province.includes(tag) || 
    tag.includes(p.shortName) ||
    p.province.replace(/省|市|自治区|特别行政区/g, '') === tag
  );
  
  return province;
}

// 动态生成大学数据（根据文章标签中的省份）
function generateDynamicUniversityData(posts) {
  // 创建省份到大学的映射
  const provinceUniversityMap = new Map();
  
  // 遍历所有文章
  posts.forEach(post => {
    const { tags } = post;
    
    // 找出文章中的学校标签
    const universities = tags.filter(tag => isUniversityTag(tag));
    
    // 找出文章中的省份标签
    const provinces = tags
      .map(tag => matchProvince(tag))
      .filter(p => p !== undefined);
    
    // 将学校和省份关联
    if (universities.length > 0 && provinces.length > 0) {
      provinces.forEach(province => {
        if (!provinceUniversityMap.has(province.province)) {
          provinceUniversityMap.set(province.province, new Set());
        }
        universities.forEach(uni => {
          provinceUniversityMap.get(province.province).add(uni);
        });
      });
    }
  });
  
  // 构建最终的数据结构
  const result = allProvinces.map(province => {
    const universities = provinceUniversityMap.get(province.province);
    return {
      ...province,
      universities: universities 
        ? Array.from(universities).map(name => ({
            name,
            tag: name,
            desc: '' // 描述可以留空或从文章中提取
          }))
        : []
    };
  });
  
  // 将有大学的省份排在前面
  const withUniversities = result.filter(p => p.universities.length > 0);
  const withoutUniversities = result.filter(p => p.universities.length === 0);
  
  return [...withUniversities, ...withoutUniversities];
}

export default function UniversityLibrary() {
  // 从博客文件中提取所有文章及其标签
  const blogPosts = useMemo(() => {
    return getBlogPostsWithTags();
  }, []);
  
  // 动态生成大学数据
  const universityData = useMemo(() => {
    return generateDynamicUniversityData(blogPosts);
  }, [blogPosts]);
  
  // 状态：当前选中的省份，如果为 null 则显示省份列表，否则显示该省的大学列表
  const [selectedProvince, setSelectedProvince] = useState(null);

  // 处理点击省份
  const handleProvinceClick = (province) => {
    setSelectedProvince(province);
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理返回
  const handleBack = () => {
    setSelectedProvince(null);
  };

  return (
    <Layout
      title="院校指北"
      description="按省份查找大学文章">
      <div className={styles.container}>
        
        {/* 头部标题区 */}
        <div className={styles.header}>
          <h1>🏛️ 院校索引库</h1>
          <p>先选择省份，再找到你的目标院校</p>
        </div>

        {/* 导航/面包屑区域 */}
        <div className={styles.breadcrumbs}>
          {selectedProvince ? (
            <div>
              <button onClick={handleBack} className={styles.backButton}>
                ← 返回省份列表
              </button>
              <span style={{ margin: '0 10px' }}>/</span>
              <span>{selectedProvince.province}</span>
            </div>
          ) : (
            <span>📍 请选择地区：</span>
          )}
        </div>

        {/* 主要内容区域 */}
        <div className={styles.content}>
          {selectedProvince ? (
            // === 状态 B：显示该省份下的大学列表 ===
            <div className={styles.grid}>
              {selectedProvince.universities.map((uni, idx) => (
                <Link
                  key={idx}
                  // 这里是最关键的一步：构建标签链接
                  // 如果你的标签是中文，Docusaurus 通常会自动处理，直接拼接入 URL
                  to={`/blog/tags/${uni.tag}`}
                  className={styles.card}
                >
                  <div className={styles.uniName}>{uni.name}</div>
                  <div className={styles.uniDesc}>{uni.desc}</div>
                  <div style={{ marginTop: '1rem', color: 'var(--ifm-color-primary)' }}>
                    点击查看文章 →
                  </div>
                </Link>
              ))}
              
              {selectedProvince.universities.length === 0 && (
                <div className={styles.emptyState}>
                  该省份下暂无收录院校
                </div>
              )}
            </div>
          ) : (
            // === 状态 A：显示所有省份 ===
            <div className={styles.grid}>
              {universityData.map((item, idx) => (
                <div
                  key={idx}
                  className={styles.card}
                  onClick={() => handleProvinceClick(item)}
                >
                  <div className={styles.provinceName}>{item.province}</div>
                  <div className={styles.provinceDesc}>{item.description}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}