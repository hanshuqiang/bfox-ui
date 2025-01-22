import { App, Plugin } from 'vue'
import BuButton from './src/index.vue'

export const ButtonPlugin: Plugin = {
  install(app: App) {
    app.component('BuButton', BuButton)
  },
}
export { BuButton }
