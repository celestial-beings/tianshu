const route: Router.Route = {
  path: '/flex',
  name: 'flex',
  component: () => import('@/views/Flex/index.vue')
}

export default route
