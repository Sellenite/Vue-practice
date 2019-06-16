<template>
    <li class="menu-item" :class="[classObj, { 'checked': menuItem.isChecked }]">
        <a href="#" @click="handleClick">{{ menuItem.label }}</a>
        <ul v-show="menuItem.isChecked" class="sub-menu">
            <menu-item v-for="(item, index) in menuItem.children" :menuItem="item" :key="index"></menu-item>
        </ul>
    </li>
</template>

<script>
import { findBrothersComponents, findComponentsDownward } from '@/utils/findComponents.js';

export default {
    name: 'menu-item',
    props: {
        menuItem: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {

        }
    },
    computed: {
        classObj() {
            return `level-${this.menuItem.level}`;
        }
    },
    methods: {
        handleClick() {
            let siblings = findBrothersComponents(this, 'menu-item');
            let children = findComponentsDownward(this, 'menu-item');

            this.$set(this.menuItem, 'isChecked', !this.menuItem.isChecked);

            for (let vm of siblings) {
                this.$set(vm.menuItem, 'isChecked', false);
            }

            for (let vm of children) {
                this.$set(vm.menuItem, 'isChecked', false);
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-item {
    list-style: none;
    a {
        color: #FFF;
        text-decoration: none;
        display: inline-block;
        height: 50px;
        line-height: 50px;
        padding-left: 6px;
        box-sizing: border-box;
        width: 100%;
    }
    .sub-menu {
        background-color: #444;
    }
    &.checked > a{
        color: yellow;
    }
}
</style>
