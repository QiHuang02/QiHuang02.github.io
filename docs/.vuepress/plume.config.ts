import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes/notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/favicon.svg',

  appearance: 'dark',
  aside: true,

  profile: {
    avatar: './images/avatar.svg',
    name: 'QiHuang02 的笔记本',
    description: '这里存放了我的研究笔记',
    // circle: true,
    // location: '',
    // organization: '',
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/QiHuang02' },
  ],

  autoFrontmatter: {
    title: true,
    createTime: true,
    permalink: true,
  },

  footer: {
    message: '𝓔𝔁𝓹𝓮𝓻𝓲𝓮𝓷𝓬𝓮 𝓲𝓼 𝓽𝓱𝓮 𝓫𝓮𝓼𝓽 𝓽𝓮𝓪𝓬𝓱𝓮𝓻.',
    copyright: 'Copyright © 2024 - QiHuang02'
  }
})
