import { App, Plugin } from 'vue';
import BuDialog from './src/index.vue';

export const BuDialogPlugin: Plugin = {
  install(app: App) {
    app.component('BuDialog', BuDialog);
  },
};

export {
  BuDialog,
};
