<template>
    <div>
        <section>
            <h3>按钮类型</h3>
            <Button >默认按钮</Button>
            <Button type="danger">危险按钮</Button>
            <Button type="warning">警告按钮</Button>
            <Button type="success">成功按钮</Button>
            <Button type="info">信息按钮</Button>
            <Button type="dashed">虚线按钮</Button>
            <Button type="text">文字按钮</Button>
            <Button disabled>禁用按钮</Button>

        </section>
        <section>
            <h3>按钮图标</h3>
            <Button icon="print">图标按钮</Button>
            <Button icon="navigation">图标按钮</Button>
            <Button icon="home">图标按钮</Button>
            <Button icon="settings" loading>加载中</Button>

            <br>

            <Button icon="fabulous" icon-position="right">图标按钮</Button>
            <Button icon="settings" icon-position="right">图标按钮</Button>
            <Button icon="help" icon-position="right">图标按钮</Button>
            <Button icon="settings" icon-position="right"  loading>加载中</Button>
        </section>
        <section>
            <h3>组合按钮</h3>
            <ButtonGroup>
                <Button icon="arrow-left-bold">上一页</Button>
                <Button icon="arrow-right-bold" icon-position="right">下一页</Button>
                <Button >全部</Button>
            </ButtonGroup>
        </section>

    </div>
</template>
<script lang="ts">
    import ButtonGroup from "../../../src/ButtonGroup.vue";
    import Button from "../../../src/Button";
    export default {
        components:{

            Button,
            ButtonGroup
        },
        methods:{
            click(){
                alert(1)
            }
        }
    }
</script>
