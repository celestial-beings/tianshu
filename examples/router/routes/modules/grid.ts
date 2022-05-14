const route: Router.Route = {
  path: '/grid',
  name: 'grid',
  component: () => import('#/views/Grid/index.vue')
}

export default route
