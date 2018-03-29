export default [
	{
		path: '/result',
		name: 'modules_result',
		redirect: { name: 'modules_result_index'},
		component: resolve => require(['../App'], resolve),
		children: [
			{
				path: 'index',
				name: 'modules_result_index',
				component: resolve => require(['../pages/index'], resolve)
			}
		]
	}
]
