import { createRouter, createWebHashHistory } from 'vue-router'
import { routes as originRoutes } from './routes'

const routesGenerator = () => {
  return originRoutes
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: routesGenerator()
})

export default router
