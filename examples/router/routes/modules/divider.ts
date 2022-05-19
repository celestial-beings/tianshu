const route: Router.Route = {
  path: '/divider',
  name: 'divider',
  component: () => import('#/views/Divider/index.vue')
}

export default route
