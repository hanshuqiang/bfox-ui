import { App, Plugin } from 'vue';
import Clipboard from './src/index.vue';

export const ClipboardPlugin: Plugin = {
  install(app: App) {
    app.component('bfox-clipboard', Clipboard);
  },
};

export {
  Clipboard,
};
