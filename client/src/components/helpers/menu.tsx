/* eslint-disable @typescript-eslint/no-unused-vars */

/** 路由遍历访问栈 */
const visitStack:any[] = []

/** 根据访问栈获取完整路由地址 */
const getFullPath = (stack:any):string => {
  return stack.map((route:any) => {
    return route.path
  }).join('')
}

/** 生成边栏菜单选项 */
export const getMenu = (routes:Hidetoxic.Kuroko.Utils.Route[] = [], isRoot = true):any => {
  return routes.map((route:Hidetoxic.Kuroko.Utils.Route) => {
    // 当前访问的路由入栈
    visitStack.push(route)

    // 通过当前的访问栈去组装完整路径
    const navigatePath = getFullPath(visitStack)

    // 获取子路由
    const children = getMenu(route?.children, false)
    const hasChild = children.length > 0

    // 遍历到当前路由之后直接出栈
    visitStack.pop()

    // 设置为菜单内不展示的就去除
    if (route.hidden) {
      return null
    }

    return {
      label: () => {
        // 如果有子菜单 渲染为普通标签
        if (hasChild) {
          return <div>{route.name}</div>
        }

        // 如果是最后一级标签 渲染为路由组件
        return (
          <>
            <router-link to={ navigatePath }>{ route.name }</router-link>
          </>
        )
      },
      key: navigatePath,
      ...(children.length > 0 ? { children } : {})
    }
  })
    .filter(Boolean)
}
