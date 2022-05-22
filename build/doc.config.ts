import baseConfig from './base.config';
import { defineConfig } from 'vite';

export default defineConfig({
  ...baseConfig,
  base: '/bfox-ui',
  build: {
    outDir: 'docs',
  },
});
