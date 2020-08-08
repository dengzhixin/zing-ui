<template>
    <templateDemos title="组合" :code="code">
        <ButtonGroup>
            <Button icon="arrow-left-bold">上一页</Button>
            <Button icon="arrow-right-bold" icon-position="right">下一页</Button>
            <Button>全部</Button>
        </ButtonGroup>
    </templateDemos>

</template>

<script>

    import Button from "../../../src/Button";
    import ButtonGroup from "../../../src/ButtonGroup";
    import templateDemos from './template-demos'
    export default {
        name: 'button-group-demos',
        components: {
            Button,
            ButtonGroup,
            templateDemos
        },
        data() {
            return {
                code:`
<ButtonGroup>
    <Button icon="arrow-left-bold">上一页</Button>
    <Button icon="arrow-right-bold" icon-position="right">下一页</Button>
    <Button>全部</Button>
</ButtonGroup>`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
