export default [{
    path: '/router',
    name: 'modules_router',
    redirect: {
        name: 'modules_router_index'
    },
    component: resolve => require(['../App'], resolve),
    children: [{
        path: 'index',
        name: 'modules_router_index',
        component: resolve => require(['../pages/index'], resolve)
    }, {
        path: 'another',
        name: 'modules_router_another',
        component: resolve => require(['../pages/another'], resolve)
    }, {
        path: 'query',
        name: 'modules_router_query',
        component: resolve => require(['../pages/query'], resolve)
    }, {
        path: 'params/:userid',
        name: 'modules_router_params',
        component: resolve => require(['../pages/params'], resolve)
    }]
}]
