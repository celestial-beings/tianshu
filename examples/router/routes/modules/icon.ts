const route: Router.Route = {
  path: '/icon',
  name: 'icon',
  component: () => import('#/views/Icon/index.vue')
}

export default route
