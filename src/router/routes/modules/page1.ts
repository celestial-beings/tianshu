const route: Router.Route = {
  path: '/page1',
  name: 'page1',
  component: () => import('@/views/Page1.vue')
}

export default route
