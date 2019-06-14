<template>
    <ul class="v-menu">
        <menu-item v-for="(item, index) in menu" :menuItem="item" :key="index"></menu-item>
    </ul>
</template>

<script>
import MenuItem from '../menu-item/index.vue';
import { deepCopy } from '@/utils/deepCopy.js';

export default {
    name: 'v-menu',
    components: {
        MenuItem
    },
    props: {
        menu: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            cloneMenu: []
        }
    },
    watch: {
        data() {
            this.rebuildData()
        }
    },
    created() {
        this.rebuildData()
    },
    methods: {
        rebuildData() {
            this.cloneMenu = deepCopy(this.menu);
        }
    }
}
</script>

<style lang="scss" scoped>
.v-menu {
    list-style: none;
    width: 200px;
    background-color: #666;
}
</style>
