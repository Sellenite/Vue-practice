import { addClass, removeClass } from '@/utils/dom';

let instances = {};
let hasModal = false;
let zIndex = 2000;

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
    nextZIndex() {
        // Element是设置了一个全局变量，可以在外面进行对里面进行配置，这里就不做这一步了
        return zIndex++;
    },
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
	openModal(zIndex) {
		/* 渐隐动画配合定义的过度样式触发，时间也是相对应的 */
		const modalDom = getModal();
        modalDom.style.zIndex = zIndex;
		addClass(modalDom, 'v-modal');
        /* zIndex每次赋值都从popManager的index++ */
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