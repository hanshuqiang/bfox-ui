/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './components/Button';
import { BuClipboardPlugin } from './components/BuClipboard';
import { BuTablePlugin } from './components/BuTable';
import { BuDialogPlugin } from './components/BuDialog';

const BfoxPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    BuClipboardPlugin.install?.(app);
    BuTablePlugin.install?.(app);
    BuDialogPlugin.install?.(app);
  },
};

export default BfoxPlugin;

export * from './components/Button'
export * from './components/BuClipboard'
export * from './components/BuTable'
export * from './components/BuDialog'