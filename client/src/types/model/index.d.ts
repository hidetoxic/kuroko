declare namespace Hidetoxic {
        namespace Kuroko {
            namespace Util {
                interface Route {
                    /** 路由地址 */
                    path: string,
                    /** 是否在菜单中隐藏 */
                    hidden?: boolean
                    /** 对应组件 */
                    component: Component,
                    /** 菜单名 */
                    name: string,
                    /** 次级页面 */
                    children?: Route[]
                }
            }
        }
    }
