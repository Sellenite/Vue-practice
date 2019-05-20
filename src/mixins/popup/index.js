import Vue from 'vue';
import PopupManager from './popup-manager';

let idSeed = 1;

export default {
    data() {
        return {
            _popupId: idSeed,
            _opening: false
        }
    },
    watch: {
        // 需要约定所有进行显示的属性为以下这个
        visible(val) {
            if (val) {
                if(this._opening) return;
                Vue.nextTick(() => {
                    this.open();
                })
            } else {
                this.close();
            }
        }
    },
    beforeMount() {
        this._popupId = 'popup-' + idSeed++;
        // 把调用popup的那个全局组件实例存入去
        PopupManager.register(this._popupId, this);
    },
    beforeDestroy() {
        PopupManager.deregister(this._popupId);
    },
    methods: {
        open() {
            this._opening = true;
            PopupManager.openModal(PopupManager.nextZIndex());
            // 永远保证里面的元素在modal之上
            this.$el.style.zIndex = PopupManager.nextZIndex();
        },
        close() {
            this._opening = false;
            PopupManager.closeModal();
        }
    }
}