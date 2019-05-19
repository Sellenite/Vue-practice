import Confirm from './main.vue';

export default {
    install(vue) {
    	let ConfirmConstructor = vue.extend(Confirm);
    	let confirm;

        vue.prototype.$confirm = (options) => {
        	if (!confirm) {
        		/**
        		 * 由于传入props在这里只能通过new Constructor的时候传入propsData，但是这里由于是单例设计
        		 * 传入一次后再执行就不会执行以下代码，有两种解决方法
        		 * 第一是学ElementUI，遍历options，将所有选项写到实例的data里
        		 * 第二是判断判断options是否与上次记录的一样，如果不是的话就重新new一个
        		 * 这里我们使用ElementUI的方法
        		 */
        		let Instance = new ConfirmConstructor();
        		confirm = Instance.$mount();
        		document.body.appendChild(confirm.$el);
        	}

        	for (let prop in options) {
        		if (options.hasOwnProperty(prop)) {
        			confirm[prop] = options[prop];
        		}
        	}

        	// 保证dom渲染完毕
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