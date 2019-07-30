<template>
    <div class="x-input">
        <input :value="value" v-clickoutside="handleClose" @input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
import Clickoutside from '@/directive/clickoutside/clickoutside.js';

export default {
    name: 'xInput',
    directives: { Clickoutside },
    props: {
        value: {
            type: String,
            default: 0
        }
    },
    methods: {
        handleClose() {
            console.log(`检测到点击document的时候没有点到设定组件【${this.$options.name}】本身，可以进行菜单收起等设置`);
        }
    }
}

</script>
<style lang="scss" scoped>
.x-input {
    border: 1px solid #CCC;
    width: 90%;
    margin: 10px auto;
    input {
        box-sizing: border-box;
        display: inline-block;
        margin: 10px 0;
        padding: 0 10px;
        border: 0;
        outline: none;
        height: 100%;
        width: 100%;
    }
}

</style>
