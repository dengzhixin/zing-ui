<template>
    <templateDemos title="类型" :code="code">
        <Button @click="showToast1" type="default">默认信息</Button>
        <Button @click="showToast2" type="success">成功信息</Button>
        <Button @click="showToast3" type="warning">警告信息</Button>
        <Button @click="showToast4" type="danger">错误信息</Button>
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
                this.$toast(`成功信息`,{type:'success'})
            },
            showToast3() {
                this.$toast(`警告信息`,{type:'warning'})
            },
            showToast4() {
                this.$toast(`错误信息`,{type:'danger'})
            }
        },
        data() {
            return {
                collapseSelected: ['item1'],
                code: `
this.$toast(\`默认信息\`,)
this.$toast(\`成功信息\`,{type:'success'})
this.$toast(\`警告信息\`,{type:'warning'})
this.$toast(\`错误信息\`,{type:'danger'})
`
            }
        },

    }
</script>

<style lang="scss" scoped>


</style>
