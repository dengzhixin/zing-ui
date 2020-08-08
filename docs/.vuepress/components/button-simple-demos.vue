<template>
    <templateDemos title="基本用法" :code="code">
        <Button>默认按钮</Button>
        <Button type="danger">危险按钮</Button>
        <Button type="warning">警告按钮</Button>
        <Button type="success">成功按钮</Button>
        <Button type="info">信息按钮</Button>
        <Button type="dashed">虚线按钮</Button>
        <Button type="text">文字按钮</Button>
        <Button disabled>禁用按钮</Button>
    </templateDemos>

</template>

<script>

    import Button from "../../../src/Button";
    import templateDemos from './template-demos'
    export default {
        name: 'button-simple-demos',
        components: {
            Button,
            templateDemos
        },
        data() {
            return {
                code:`
<Button>默认按钮</Button>
<Button type="danger">危险按钮</Button>
<Button type="warning">警告按钮</Button>
<Button type="success">成功按钮</Button>
<Button type="info">信息按钮</Button>
<Button type="dashed">虚线按钮</Button>
<Button type="text">文字按钮</Button>
<Button disabled>禁用按钮</Button>`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
