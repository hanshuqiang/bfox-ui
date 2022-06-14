import { App, Plugin } from 'vue';
import BuTable from './src/index.vue';

export const BuTablePlugin: Plugin = {
  install(app: App) {
    app.component('BuTable', BuTable);
  },
};

export {
  BuTable,
};
