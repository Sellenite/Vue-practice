<template>
    <div class="search-wrapper-box">
        <div class="search-wrapper">
            <div class="left">
                <input type="text" ref="input" :placeholder="placeholder" @keyup.enter="handleSearch" @input="handleInput" @change="handleChange" @compositionstart="handleCompositionStart" @compositionend="handleCompositionEnd" />
            </div>
            <div class="right" @click="handleSearch">
                搜索
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            placeholder: {
                type: [String, Number],
                default: '搜索'
            },
            value: {
                type: [String, Number],
                default: ''
            }
        },
        data() {
            return {
                nativeInputValue: '',
                isComposing: false
            }
        },
        watch: {
            value: {
                immediate: true,
                handler(val) {
                    this.nativeInputValue = val === null || val === undefined ? '' : String(val);
                }
            },
            nativeInputValue() {
                this.setNativeInputValue();
            }
        },
        mounted() {
            this.setNativeInputValue();
        },
        methods: {
            getInput() {
                return this.$refs.input;
            },
            setNativeInputValue() {
                const input = this.getInput();
                if (!input) return;
                if (input.value === this.nativeInputValue) return;
                input.value = this.nativeInputValue;
            },
            handleInput(event) {
                if (this.isComposing) return;
                if (event.target.value === this.nativeInputValue) return;
                this.$emit('input', event.target.value);
                this.$nextTick(this.setNativeInputValue);
            },
            handleChange(event) {
                this.$emit('change', event.target.value);
            },
            handleSearch() {
                this.$emit('search', this.nativeInputValue);
            },
            handleCompositionStart() {
                this.isComposing = true;
            },
            handleCompositionEnd(event) {
                this.isComposing = false;
                this.handleInput(event);
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-color: #eee;
    $primary-color: #738d91;
    @mixin center {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-wrapper-box {
        display: flex;
    }
    .search-wrapper {
        width: 600px;
        height: 42px;
        background-color: #FFF;
        border-radius: 4px;
        display: flex;
        border: 1px solid $border-color;
        .left {
            flex: 1;
            input {
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
                padding: 0 20px;
                font-size: 16px;
                &::-webkit-input-placeholder {
                    color: #91a8b0;
                }
                &::-moz-placeholder {
                    color: #91a8b0;
                }
                &:-ms-input-placeholder {
                    color: #91a8b0;
                }
            }
        }
        .right {
            width: 80px;
            cursor: pointer;
            border-left: 1px solid $border-color;
            background-color: $primary-color;
            color: #FFF;
            @include center;
        }
    }
</style>
