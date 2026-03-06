import * as path from 'node:path'
import { defineConfig } from '@rspress/core'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Lancet-TS-Docs',
  icon: '/Tools.svg',
  logo: {
    light: '/Tools.svg',
    dark: '/Tools.svg',
  },
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/web-infra-dev/rspress',
      },
    ],
  },
})
