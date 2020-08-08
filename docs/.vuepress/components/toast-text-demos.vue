<template>
    <templateDemos title="自定义关闭按钮" :code="code">
        <Button @click="showToast1" type="default">默认信息</Button>
        <Button @click="showToast2">自定义文字</Button>
        <Button @click="showToast3">关闭按钮回调函数</Button>
        <Button @click="showToast4">设置自动关闭时间</Button>
    </templateDemos>

</template>

<script>
    import Toast from "../../../src/Toast.js";
    import templateDemos from './template-demos'
    import Button from "../../../src/Button";
    import Vue from 'vue'

    Vue.use(Toast)
    export default {
        name: 'collapse-demos',
        components: {
            templateDemos,
            Button
        },
        mounted() {
        },
        methods: {
            showToast1() {
                this.$toast(`默认信息`, {closeButton: {type: 'icon'}})
            },
            showToast2() {
                this.$toast(`自定义文字`, {closeButton: {text: '关闭'}})
            },
            showToast3() {
                this.$toast(`携带关闭回调函数`, {
                    closeButton:
                        {
                            callback: () => {
                                this.$toast(`我是回调函数的Toast`)
                            }
                        }
                })
            },
            showToast4() {
                this.$toast(`我将在2秒后关闭`, {closeDelay: 2000})
            },
        },
        data() {
            return {

                code: `
this.$toast(\`默认信息\`, {closeButton: {type: 'icon'}})
this.$toast(\`自定义文字\`, {closeButton: {text: '关闭'}})
this.$toast(\`携带关闭回调函数\`, {
    closeButton:
        {
            callback: () => {
                this.$toast(\`我是回调函数的Toast\`)
            }
        }
})
this.$toast(\`我将在2秒后关闭\`, {closeDelay: 2000})
`
            }
        },

    }
</script>

<style lang="scss" scoped>


</style>
