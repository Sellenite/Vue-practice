import './waves.scss';

const context = '@@wavesContext';

function handleClick(el, binding) {
    // binding.value，指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2

    // 这样也可以将event传进来，神奇
    function handle(e) {
        const type = binding.value || 'hit'; // 可输入center或hit
        const opts = {
            ele: el, // 波纹作用元素
            color: 'rgba(0, 0, 0, 0.15)', // 波纹颜色
            type
        };

        const target = opts.ele;

        console.log(target, e);

        if (target) {
            target.style.position = 'relative';
            target.style.overflow = 'hidden';
            const rect = target.getBoundingClientRect();
            let ripple = target.querySelector('.waves-ripple');
            if (!ripple) {
                ripple = document.createElement('span');
                ripple.className = 'waves-ripple';
                ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
                target.appendChild(ripple);
            } else {
                ripple.className = 'waves-ripple';
            }

            switch (opts.type) {
                case 'center':
                    // 访问offsetHeight可以重绘重新触发动画
                    // 为了使蒙层置于中间，注意是使用定位
                    ripple.style.top = rect.height / 2 - ripple.offsetHeight / 2 + 'px';
                    ripple.style.left = rect.width / 2 - ripple.offsetWidth / 2 + 'px';
                    break;
                default:
                    // offset[X|Y] 是相对于触发事件的对象左上角和鼠标之间的距离
                    // page[X|Y] 是相对于整个页面左上角和鼠标之间的距离
                    ripple.style.top = -(ripple.offsetHeight / 2 - e.offsetY) + 'px';
                    ripple.style.left = -(ripple.offsetWidth / 2 - e.offsetX) + 'px';
            }

            ripple.style.backgroundColor = opts.color;
            ripple.className = 'waves-ripple z-active';
            return false;
        }
    }

    // 单例
    if (!el[context]) {
        el[context] = {
            removeHandle: handle
        }
    } else {
        el[context].removeHandle = handle
    }

    return handle;
}

export default {
    // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
    bind(el, binding) {
        el.addEventListener('click', handleClick(el, binding), false);
    },
    // 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
    inserted(el) {

    },
    /**
     * 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。
     * 但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
     */
    update(el, binding) {
        el.removeEventListener('click', el[context].removeHandle, false)
        el.addEventListener('click', handleClick(el, binding), false)
    },
    // 指令所在组件的 VNode 及其子 VNode 全部更新后调用
    componentUpdated() {

    },
    // 只调用一次，指令与元素解绑时调用。
    unbind(el) {
        el.removeEventListener('click', el[context].removeHandle, false);
        el[context] = null;
        delete el[context];
    }
}