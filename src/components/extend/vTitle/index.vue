<template>
    <!-- 这里的emit一个input事件，是在组件传入v-model时的语法糖，简化代码 -->
<transition name="fade">
    <div class="title" v-if="value" @click="$emit('input', false)">
        <div class="icon"></div>
        <p class="innerTitle">this is title</p>
    </div>
</transition>
</template>

<script>
export default {
    name: 'vTitle',
    props: {
        value: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss">
    .title {
        font-size: 30px;
        &.fade-enter-active, &.fade-leave-active {
            transition: opacity 0.3s;
        }
        &.fade-enter, &.fade-leave-to {
            opacity: 0;
        }
        .icon {
            width: 80px;
            height: 80px;
            background: url('~@/assets/logo.svg') no-repeat center center;
            background-size: cover;
        }
        .innerTitle {
            color: orange;
        }
    }
</style>
