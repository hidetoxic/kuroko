import _import from './_import'

export const routes: Hidetoxic.Kuroko.Utils.Route[] = [
  {
    path: '/',
    name: '使用指南',
    component: _import('home/index')
  },
  {
    path: '/push-manage',
    name: '推送管理',
    component: _import('push-manage/index'),
    children: [
      {
        path: '/custom',
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
