const route: Router.Route = {
  path: '/page1',
  name: 'page1',
  component: () => import('@/components/BasicLayout.vue')
}

export default route
