export default class {
	constructor( router, store ){

		this.goBack = false;

		window.client.goBack = (step = -1) => {
			this.goBack = true;
			router.go(step);
		};

		router.afterEach((to, from) => {
			// 第一个页面不需要动画，直接加载
			if(from.name){
				this._pageAnimation(to, from, store);
			}
		});
	}

	_pageAnimation(to, from, store){
		// store的模块写法的commit等，需要这么写
		store.commit('transitionStore/setTransition', this.goBack ? 'turn-off' : 'turn-on');
		this.goBack = false;
	}
}