export default [
	{
		path: '/',
		name: 'modules_main',
		redirect: { name: 'modules_main_index'},
		component: resolve => require(['../App'], resolve),
		children: [
			{
				path: 'index',
				name: 'modules_main_index',
				component: resolve => require(['../pages/index'], resolve)
			}
		]
	}
]
