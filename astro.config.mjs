import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://mediumpurple-shark-884727.hostingersite.com', // Update this when you have your domain
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  },
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  }
});
