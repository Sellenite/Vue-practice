import { addClass, removeClass } from '@/utils/dom';

let instances = {};
let hasModal = false;

let getModal = () => {
	let modalDom = PopupManager.modalDom;
	if (modalDom) {
		hasModal = true;
	} else {
		hasModal = false;
		modalDom = document.createElement('div');
		PopupManager.modalDom = modalDom;
	}

	return modalDom;
}

let PopupManager = {
	register(id, context) {
		if (id && context) {
			instances[id] = context;
		}
		console.log(instances);
	},
	deregister(id) {
		if (id) {
			instances[id] = null;
			delete instances[id];
		}
		console.log(instances);
	},
	openModal() {
		/* 渐隐动画配合定义的过度样式触发，时间也是相对应的 */
		const modalDom = getModal();
		addClass(modalDom, 'v-modal');
        /* zIndex应该是需要动态计算获取比较好，这里modal和confirm都写死算了 */
        modalDom.style.zIndex = 998;
		if (!hasModal) {
			addClass(modalDom, 'v-modal-enter');
		}
		setTimeout(() => {
			removeClass(modalDom, 'v-modal-enter');
		}, 200);
		document.body.appendChild(modalDom);
	},
	closeModal() {
		const modalDom = getModal();
		addClass(modalDom, 'v-modal-leave');
		setTimeout(() => {
			removeClass(modalDom, 'v-modal-leave');
			if (modalDom.parentNode) modalDom.parentNode.removeChild(modalDom);
            PopupManager.modalDom = undefined;
		}, 200);
	}
};

export default PopupManager;