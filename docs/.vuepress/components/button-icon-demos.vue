<template>
    <templateDemos title="图标" :code="code">
        <Button icon="print">图标按钮</Button>
        <Button icon="navigation">图标按钮</Button>
        <Button icon="home">图标按钮</Button>
        <Button icon="settings" loading>加载中</Button>
    </templateDemos>

</template>

<script>

    import Button from "../../../src/Button";
    import templateDemos from './template-demos'
    export default {
        name: 'button-icon-demos',
        components: {
            Button,
            templateDemos
        },
        data() {
            return {
                code:`
<Button icon="print">图标按钮</Button>
<Button icon="navigation">图标按钮</Button>
<Button icon="home">图标按钮</Button>
<Button icon="settings" loading>加载中</Button>`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
