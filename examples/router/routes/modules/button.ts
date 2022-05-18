const route: Router.Route = {
  path: '/button',
  name: 'button',
  component: () => import('#/views/Button/index.vue')
}

export default route
