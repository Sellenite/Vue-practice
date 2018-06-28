export default [{
    path: '/router',
    name: 'modules_router',
    redirect: {
        name: 'modules_router_index'
    },
    component: resolve => require(['../App'], resolve),
    children: [{
        path: 'index/:userid',
        name: 'modules_router_index',
        component: resolve => require(['../pages/index'], resolve)
    }]
}]
