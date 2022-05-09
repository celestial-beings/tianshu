const route: Router.Route = {
  path: '/flexGrid',
  name: 'flexGrid',
  component: () => import('#/views/FlexGrid/index.vue')
}

export default route
