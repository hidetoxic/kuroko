import _import from './_import'

export const routes: Hidetoxic.Kuroko.Util.Route[] = [
  {
    path: '/',
    name: '首页',
    component: _import('home/index')
  },
  {
    path: '/push-manage',
    name: '推送管理',
    component: _import('push-manage/index'),
    children: [
      {
        path: '/push-manage/custom',
        name: '自定义推送控制',
        component: _import('push-manage/custom/index')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    name: '错误页面',
    hidden: true,
    component: _import('error/index')
  }
]
