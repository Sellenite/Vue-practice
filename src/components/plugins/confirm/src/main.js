import Confirm from './main.vue';

export default {
    install(vue) {
    	let ConfirmConstructor = vue.extend(Confirm);
    	let confirm;

        vue.prototype.$confirm = (options) => {
        	if (!confirm) {
        		let Instance = new ConfirmConstructor();
        		confirm = Instance.$mount();
        		document.body.appendChild(confirm.$el);
        	}

        	vue.nextTick(() => {
        		confirm.show();
        	});

            return new Promise((resolve, reject) => {
            	// 将resolve等传入去组件
            	confirm.callBack = {
            		resolve,
            		reject
            	}
            });
        }
    }
}