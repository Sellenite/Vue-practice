<template>
    <!-- 这里的emit一个input事件，是在组件传入v-model时的语法糖，简化代码 -->
    <div class="title" v-if="value" @click="$emit('input', false)">
        <p class="innerTitle">this is title</p>
    </div>
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
        .innerTitle {
            color: orange;
        }
    }
</style>
