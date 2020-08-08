<template>

    <templateDemos title="警告提示" :code="code">
        <TextBox warning="这是警告提示"></TextBox>
    </templateDemos>

</template>

<script>
    import TextBox from '../../../src/TextBox'
    import templateDemos from './template-demos'

    export default {
        name: 'textbox-warning-demo',
        components: {
            TextBox,
            templateDemos
        },
        data() {
            return {
                code: `
            <TextBox warning="这是警告提示"></TextBox>
`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
