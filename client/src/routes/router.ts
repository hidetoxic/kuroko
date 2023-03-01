import { createRouter, createWebHashHistory } from 'vue-router'
import { omit, cloneDeep } from 'lodash-es'
import { routes as originRoutes } from './routes'

// 拍平路由表
const routesGenerator = ():Hidetoxic.Kuroko.Util.Route[] => {
  const getChildRoute = (originRoutes:Hidetoxic.Kuroko.Util.Route[] = [], flattedRoutes:Hidetoxic.Kuroko.Util.Route[]) => {
    const routes = cloneDeep(originRoutes)

    routes.forEach((originRoute:Hidetoxic.Kuroko.Util.Route) => {
      // 拍平之后不需要children 移除掉
      const route = omit(originRoute, 'children')

      flattedRoutes.push(route, ...getChildRoute(originRoute.children, []))
    })

    return flattedRoutes
  }

  return getChildRoute(originRoutes, [])
}

const routes = routesGenerator()

console.log('routes', routes)

export default createRouter({
  history: createWebHashHistory(),
  routes
})
