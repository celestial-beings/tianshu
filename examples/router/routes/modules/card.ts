const route: Router.Route = {
  path: '/card',
  name: 'card',
  component: () => import('#/views/Card/index.vue')
}

export default route
