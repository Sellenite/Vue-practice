export default [
	{
		path: '/promise',
		name: 'modules_promise',
		redirect: { name: 'modules_promise_index'},
		component: resolve => require(['../App'], resolve),
		children: [
			{
				path: 'index',
				name: 'modules_promise_index',
				component: resolve => require(['../pages/index'], resolve)
			}
		]
	}
]
