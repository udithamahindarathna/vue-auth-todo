/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from '@/plugins/vuetify'
import router from '@/plugins/router'
import pinia from './pinia'

export function registerPlugins(app) {
  app.use(vuetify)
  app.use(pinia)
  app.use(router)
}
