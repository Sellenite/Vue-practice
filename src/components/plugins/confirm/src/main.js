import Confirm from './main.vue';

// 单例
let confirmInstance;

export default {
    install(vue) {
        vue.prototype.$confirm = (options) => {
            return new Promise((resolve, reject) => {

            });
        }
    }
}