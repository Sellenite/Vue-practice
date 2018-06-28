<template>
    <div class="x-input">
        <input :value="value" @input="$emit('input', $event.target.value)">
    </div>
</template>
<script>
export default {
    name: 'xInput',
    props: {
        value: {
            type: String,
            default: 0
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
