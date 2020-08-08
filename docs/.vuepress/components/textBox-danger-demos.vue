<template>

    <templateDemos title="错误提示" :code="code">
            <TextBox error="这是错误提示"></TextBox>
    </templateDemos>

</template>

<script>
    import TextBox from '../../../src/TextBox'
    import templateDemos from './template-demos'

    export default {
        name: 'textbox-danger-demo',
        components: {
            TextBox,
            templateDemos
        },
        data() {
            return {
                name: '',
                code: `
            <TextBox error="这是错误提示"></TextBox>
`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
