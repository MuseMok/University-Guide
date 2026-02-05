import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from '../css/university-library.module.css'; // 引入刚才写的样式
import { universityData } from '../data/universityData';   // 引入刚才写的数据

export default function UniversityLibrary() {
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