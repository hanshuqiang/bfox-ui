import { App, Plugin } from 'vue';
import BuClipboard from './src/index.vue';

export const BuClipboardPlugin: Plugin = {
  install(app: App) {
    app.component('BuClipboard', BuClipboard);
  },
};

export {
  BuClipboard,
};
