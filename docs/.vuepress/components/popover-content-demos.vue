<template>
    <templateDemos title="嵌套内容" :code="code">
        <Popover trigger="click"  position="bottom">
            <div slot="content" >
                这是一段内容,这里可以嵌套内容，比如按钮
                <Button>这个是嵌套的按钮</Button>
            </div>
            <Button>嵌套内容</Button>
        </Popover>

        <Popover trigger="click"  position="bottom">
            <div slot="content" slot-scope="{close}">
                这是一段内容,这里获取按到暴露出来的close
                <Button @click="close">这个是关闭按钮</Button>
            </div>
            <Button>内部关闭</Button>
        </Popover>
    </templateDemos>

</template>

<script>
    import Popover from "../../../src/Popover";
    import templateDemos from './template-demos'
    import Button from "../../../src/Button";

    export default {
        name: 'collapse-demos',
        components: {
            templateDemos,
            Button,
            Popover
        },
        mounted() {
        },
        methods: {

        },
        data() {
            return {

                code: `
<Popover trigger="click"  position="bottom">
    <div slot="content" >
        这是一段内容,这里可以嵌套内容，比如按钮
        <Button>这个是嵌套的按钮</Button>
    </div>
    <Button>嵌套内容</Button>
</Popover>

<Popover trigger="click"  position="bottom">
    <div slot="content" slot-scope="{close}">
        这是一段内容,这里获取按到暴露出来的close
        <Button @click="close">这个是关闭按钮</Button>
    </div>
    <Button>内部关闭</Button>
</Popover>
`
            }
        },

    }
</script>

<style lang="scss" scoped>


</style>
