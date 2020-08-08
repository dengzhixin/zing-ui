<template>
    <templateDemos title="基本用法" :code="code">
        <Button @click="showToast1">默认信息</Button>
        <Button @click="showToast2">顶部信息</Button>
        <Button @click="showToast3">底部信息</Button>
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
                this.$toast(`默认信息`,)
            },
            showToast2() {
                this.$toast(`顶部信息`, {position: 'top', zIndex: 30})
            },
            showToast3() {
                this.$toast(`底部信息`, {position: 'bottom'})
            }
        },
        data() {
            return {
                code: `
this.$toast('默认信息',)
this.$toast('顶部信息', {position: 'top', zIndex: 30})
this.$toast('底部信息', {position: 'bottom'})
 `


            }
        },

    }
</script>

<style lang="scss" scoped>


</style>
