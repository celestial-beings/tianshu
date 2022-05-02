import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'
import routes from './routes'

const routerConfig: RouterOptions = {
  history: createWebHashHistory(),
  routes
}

const router = createRouter(routerConfig)

export default router
