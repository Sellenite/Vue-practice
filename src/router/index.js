import notFound from '@/modules/404/router';
import mainRouter from '@/modules/main/router';
import resultRouter from '@/modules/result/router';

export default {
	routes: [
		...notFound,
		...mainRouter,
		...resultRouter
	]
}