<template>
    <transition name="fade">
        <div class="yh-confirm__wrapper" v-show="visible">
            <div class="yh-confirm">
                <div class="title">标题</div>
                <div class="content">内容</div>
                <div class="operate">
                    <div class="btn">
                        <span>确定</span>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .yh-confirm__wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .5);
        display: flex;
        justify-content: center;
        align-items: center;
        .yh-confirm {
            box-sizing: border-box;
            display: inline-block;
            width: 420px;
            background-color: #FFF;
            border-radius: 5px;
            padding: 15px;
            border: 1px solid #ebeef5;
            box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
            .title, .content {
                padding-bottom: 15px;
            }
            .title {
                font-size: 20px;
            }
            .operate {
                display: flex;
                justify-content: flex-end;
                .btn {
                    box-sizing: border-box;
                    padding: 0 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-width: 70px;
                    height: 31px;
                    background-color: #409eff;
                    color: #FFF;
                    border-radius: 3px;
                    cursor: pointer;
                }
            }
        }
    }
</style>
