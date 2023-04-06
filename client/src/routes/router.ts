import { createRouter, createWebHashHistory } from 'vue-router'
import { omit, cloneDeep, pick } from 'lodash-es'
import { routes as originRoutes } from './routes'

type Route = Hidetoxic.Kuroko.Utils.Route
// 拍平路由表
interface RoutesGeneratorOptions {
  originRoutes?:Route[],
  flattedRoutes:Route[],
  parentRoute?:Route
}

/** 实际路由表生成器
 * @desc 将原始路由拍平为一维数组
 */
const routesGenerator = ():Route[] => {
  const getParentRoutePath = (route:any, prefix = '') => {
    const { parent } = route

    if (parent) {
      prefix += getParentRoutePath(parent, prefix) || ''
      return `${prefix}${parent?.separatePath || ''}`
    }

    return ''
  }

  const getChildRoute = (options:RoutesGeneratorOptions) => {
    const { originRoutes = [], flattedRoutes, parentRoute = null } = options
    const routes = cloneDeep(originRoutes)

    routes.forEach((originRoute:Route) => {
      let route = {
        ...originRoute,
        separatePath: originRoute.path,
        parent: pick(parentRoute, 'separatePath', 'name', 'parent')
      }
      // 拍平之后不需要children 直接移除
      route = omit(route, 'children')

      // 组装父级路由的地址
      const prefixPath = getParentRoutePath(route)

      route.path = `${prefixPath}${route.path}`

      // 整合所有获取的路由
      flattedRoutes.push(route, ...getChildRoute({ originRoutes: originRoute.children, parentRoute: route, flattedRoutes: [] }))
    })

    return flattedRoutes
  }

  return getChildRoute({
    originRoutes,
    flattedRoutes: []
  })
}

const routes = routesGenerator()

export default createRouter({
  history: createWebHashHistory(),
  routes
})
