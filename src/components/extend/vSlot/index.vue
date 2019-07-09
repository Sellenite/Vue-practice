<template>
    <!-- 知识点：具名插槽，插槽传递props -->
    <div class="v-slot">
        <slot name="defaultSlot" :user="user">{{ user.lastName }}</slot>
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
    }
}
</script>

<style lang="scss" scoped>
.v-slot {
    
}
</style>

