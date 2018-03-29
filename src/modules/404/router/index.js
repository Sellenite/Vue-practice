export default [{
  path: '*',
  name: 'wrong_path',
  redirect: {
    name: 'modules_notFound'
  },
  component: resolve => require(['../App'], resolve),
  children: [{
    path: '/404',
    name: 'modules_notFound',
    component: resolve => require(['../pages/index'], resolve)
  }]
}]
