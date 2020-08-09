<template>
    <templateDemos title="位置" :code="code">

        <Popover trigger="click"  position="top">
            <div slot="content">
                这是一段内容
            </div>
            <Button>top</Button>
        </Popover>
        <Popover trigger="click"  position="bottom">
            <div slot="content">
                这是一段内容
            </div>
            <Button>bottom</Button>
        </Popover>
        <Popover trigger="click"  position="left">
            <div slot="content">
                这是一段内容
            </div>
            <Button>left</Button>
        </Popover>
        <Popover trigger="click"  position="right">
            <div slot="content">
                这是一段内容
            </div>
            <Button>right</Button>
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
    <div slot="content">
        这是一段内容
    </div>
    <Button>默认点击激活</Button>
</Popover>
<Popover trigger="hover"  position="bottom">
    <div slot="content">
        这是一段内容
    </div>
    <Button>默认hover激活</Button>
</Popover>
                `
            }
        },

    }
</script>

<style lang="scss" scoped>


</style>
