import { siteConfig } from './lib/site-config'

export default siteConfig({
  rootNotionPageId: '23188e8e18e080de9a23daa1e79b798e', // 메인 페이지
  rootNotionSpaceId: null,

  name: 'Woo’s Growth Archive Blog',
  domain: 'woogrowthachiveblog.vercel.app',
  author: 'Kwon Jae Woo',
  description: '데이터 분석가의 성장 기록 블로그',

  github: 'https://github.com/pado0054',

  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  isPreviewImageSupportEnabled: true,
  isRedisEnabled: false,

  notionDatabases: [
    { id: '29888e8e18e0801a98e1d54e82ec366f', name: "Woo’s Today I Learned" },
    { id: '29888e8e18e080909810ea585dbe5169', name: "Knowledge Warehouse" },
    { id: '29888e8e18e080f2b4f3eb8782ec2ef2', name: "Concept Collection" }
  ],

  navigationStyle: 'default'
})
