<template>
    <div :class="`pages ${$route.name}`">
        <v-title v-model="isShow"></v-title>
        <p v-for="(item, index) in list" @click="handleClick(index)" :class="{active: ind === index}">{{item.title}}</p>
    </div>
</template>

<script>
import Title from '@/components/title';
export default {
    name: 'index',
    data() {
        return {
            list: [
                {title: 'AAA'},
                {title: 'BBB'},
                {title: 'CCC'}
            ],
            isShow: true,
            ind: 0
        }
    },
    methods: {
        handleClick(index) {
            this.ind = index
        }
    },
    components: {
        'v-title': Title
    }
}
</script>

<style lang="css" scoped>
    .active {
        color: red
    }
</style>
