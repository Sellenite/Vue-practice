<template>
    <!-- 知识点：具名插槽，插槽传递props，传递methods -->
    <div class="v-slot">
        <slot name="defaultSlot" :user="user">{{ user.lastName }}</slot>
        <slot name="button" :close="close"></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                lastName: 'Satellite'
            }
        }
    },
    methods: {
        close() {
            alert('close method from inner')
        }
    }
}
</script>

<style lang="scss" scoped>
.v-slot {
    
}
</style>

