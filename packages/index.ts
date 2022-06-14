/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './components/Button';
import { ClipboardPlugin } from './components/Clipboard';
import { BuTablePlugin } from './components/BuTable';

const BfoxPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    ClipboardPlugin.install?.(app);
    BuTablePlugin.install?.(app);
  },
};

export default BfoxPlugin;

export * from './components/Button'
export * from './components/Clipboard'
export * from './components/BuTable'