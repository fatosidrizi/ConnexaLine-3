import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://fatosidrizi.github.io',
  base: '/ConnexaLine-3',
  integrations: [tailwind()],
  output: 'static',
  build: {
    format: 'directory'
  }
});
