import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '504'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/gansu-lzu-1',
    component: ComponentCreator('/blog/gansu-lzu-1', '502'),
    exact: true
  },
  {
    path: '/blog/guangdong-jnu-1',
    component: ComponentCreator('/blog/guangdong-jnu-1', '395'),
    exact: true
  },
  {
    path: '/blog/guangdong-sysu-1',
    component: ComponentCreator('/blog/guangdong-sysu-1', 'c0c'),
    exact: true
  },
  {
    path: '/blog/hubei-whu-1',
    component: ComponentCreator('/blog/hubei-whu-1', '7bc'),
    exact: true
  },
  {
    path: '/blog/hubei-whu-2',
    component: ComponentCreator('/blog/hubei-whu-2', '771'),
    exact: true
  },
  {
    path: '/blog/shandong-sdu-1',
    component: ComponentCreator('/blog/shandong-sdu-1', 'c44'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/保研',
    component: ComponentCreator('/blog/tags/保研', '829'),
    exact: true
  },
  {
    path: '/blog/tags/法学院',
    component: ComponentCreator('/blog/tags/法学院', 'ee7'),
    exact: true
  },
  {
    path: '/blog/tags/个人感悟',
    component: ComponentCreator('/blog/tags/个人感悟', '461'),
    exact: true
  },
  {
    path: '/blog/tags/广州',
    component: ComponentCreator('/blog/tags/广州', '9a0'),
    exact: true
  },
  {
    path: '/blog/tags/计算机',
    component: ComponentCreator('/blog/tags/计算机', '644'),
    exact: true
  },
  {
    path: '/blog/tags/暨南大学',
    component: ComponentCreator('/blog/tags/暨南大学', '14b'),
    exact: true
  },
  {
    path: '/blog/tags/酒店管理',
    component: ComponentCreator('/blog/tags/酒店管理', 'f19'),
    exact: true
  },
  {
    path: '/blog/tags/考研',
    component: ComponentCreator('/blog/tags/考研', '417'),
    exact: true
  },
  {
    path: '/blog/tags/兰州',
    component: ComponentCreator('/blog/tags/兰州', '849'),
    exact: true
  },
  {
    path: '/blog/tags/兰州大学',
    component: ComponentCreator('/blog/tags/兰州大学', 'e88'),
    exact: true
  },
  {
    path: '/blog/tags/临床医学',
    component: ComponentCreator('/blog/tags/临床医学', '97e'),
    exact: true
  },
  {
    path: '/blog/tags/旅游管理',
    component: ComponentCreator('/blog/tags/旅游管理', '422'),
    exact: true
  },
  {
    path: '/blog/tags/青岛',
    component: ComponentCreator('/blog/tags/青岛', '9b4'),
    exact: true
  },
  {
    path: '/blog/tags/山东大学',
    component: ComponentCreator('/blog/tags/山东大学', '66c'),
    exact: true
  },
  {
    path: '/blog/tags/武汉',
    component: ComponentCreator('/blog/tags/武汉', '0a8'),
    exact: true
  },
  {
    path: '/blog/tags/武汉大学',
    component: ComponentCreator('/blog/tags/武汉大学', 'f4d'),
    exact: true
  },
  {
    path: '/blog/tags/校园生活',
    component: ComponentCreator('/blog/tags/校园生活', 'c55'),
    exact: true
  },
  {
    path: '/blog/tags/中山大学',
    component: ComponentCreator('/blog/tags/中山大学', '288'),
    exact: true
  },
  {
    path: '/blog/tags/珠海',
    component: ComponentCreator('/blog/tags/珠海', '5b0'),
    exact: true
  },
  {
    path: '/blog/tags/转专业',
    component: ComponentCreator('/blog/tags/转专业', '053'),
    exact: true
  },
  {
    path: '/tags-filter',
    component: ComponentCreator('/tags-filter', '67f'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '184'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'ba7'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'c42'),
            routes: [
              {
                path: '/docs/contact',
                component: ComponentCreator('/docs/contact', '0a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/developer',
                component: ComponentCreator('/docs/developer', 'b11'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/reading',
                component: ComponentCreator('/docs/reading', '8ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/writing',
                component: ComponentCreator('/docs/writing', '559'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '070'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
