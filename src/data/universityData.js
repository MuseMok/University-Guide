/**
 * src/data/universityData.js
 */

export const universityData = [
  {
    province: '北京市',
    shortName: '京',
    description: '政治中心，名校云集',
    universities: [
      { name: '北京大学', tag: '北京大学', desc: '燕园' },
      { name: '清华大学', tag: '清华大学', desc: '水木清华' },
      // 新增：北京师范大学
      { name: '北京师范大学', tag: '北京师范大学', desc: '学为人师，行为世范' },
    ]
  },
  {
    province: '湖北省',
    shortName: '鄂',
    description: '九省通衢，教育重镇',
    universities: [
      // 注意：我在原有对象里加了一个 customLink 属性
{ name: '武汉大学', tag: '武汉大学', desc: '珞珈山人民公园', customLink: '/wuhan-university' },
      { name: '华中科技大学', tag: '华中科技大学', desc: '关山口职业技术学院' },
    ]
  },
  {
    province: '广东省',
    shortName: '粤',
    description: '改革前沿，美食天堂',
    universities: [
      { name: '中山大学', tag: '中山大学', desc: '双鸭山大学' },
      { name: '华南理工大学', tag: '华南理工大学', desc: '五山禅寺' },
      // 新增：暨南大学
      { name: '暨南大学', tag: '暨南大学', desc: '华侨最高学府' },
    ]
  },
  {
    province: '山东省',
    shortName: '鲁',
    description: '齐鲁大地，孔孟之乡',
    universities: [
      { name: '山东大学', tag: '山东大学', desc: '学无止境，气有浩然' },
      { name: '中国海洋大学', tag: '中国海洋大学', desc: '海大' },
    ]
  },
  // 新增：甘肃省
  {
    province: '甘肃省',
    shortName: '甘',
    description: '丝路重镇，黄河明珠',
    universities: [
      { name: '兰州大学', tag: '兰州大学', desc: '自强不息，独树一帜' },
    ]
  },
];