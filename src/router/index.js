import notFound from '@/modules/404/router';
import mainRouter from '@/modules/main/router';
import resultRouter from '@/modules/result/router';
import routerRouter from '@/modules/router/router';
import promiseRouter from '@/modules/promise/router';

export default {
	routes: [
		...notFound,
		...mainRouter,
		...resultRouter,
		...routerRouter,
		...promiseRouter
	]
}