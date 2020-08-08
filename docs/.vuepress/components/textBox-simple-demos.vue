<template>

    <templateDemos title="基本用法" :code="code">
        <TextBox v-model="name" title="姓名" placeholder="请输入姓名"></TextBox>
    </templateDemos>

</template>

<script>
    import TextBox from '../../../src/TextBox'
    import templateDemos from './template-demos'

    export default {
        name: 'textbox-simple-demo',
        components: {
            TextBox,
            templateDemos
        },
        data() {
            return {
                name: '',
                code: `
                <TextBox v-model="name" title="姓名" placeholder="请输入姓名"></TextBox>`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .items {
        display: flex;
        flex-direction: column;
    }
</style>
