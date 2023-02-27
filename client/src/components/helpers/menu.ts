/** 生成边栏菜单 */
export const getMenu = (routes:Duiba.StormRage.Util.Route[] = [], isRoot = true):any => {
  return routes.map((route:Duiba.StormRage.Util.Route) => {
    const children = getMenu(route?.children, false)

    // 设置为菜单内不展示的就去除
    if (route.hidden) {
      return null
    }

    return {
      label: route.name,
      key: route.path,
      ...(children.length > 0 ? { children } : {})
    }
  })
  // 过滤下不要的
    .filter(Boolean)
}
