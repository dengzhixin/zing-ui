<template>
    <templateDemos title="图标" :code="code">
        <Tabs selected="item1">
            <TabsHead>
                <TabsHeadItem name="item1"><Icon name="home"></Icon>Tab1</TabsHeadItem>
                <TabsHeadItem name="item2" ><Icon name="electronics"></Icon>Tab2</TabsHeadItem>
                <TabsHeadItem name="item3"><Icon name="layers"></Icon>Tab3</TabsHeadItem>
                <TabsHeadItem name="item4"><Icon name="setting"></Icon>Tab4</TabsHeadItem>
            </TabsHead>
            <TabsBody>
                <TabsBodyPane name="item1">Tab1</TabsBodyPane>
                <TabsBodyPane name="item2">Tab2</TabsBodyPane>
                <TabsBodyPane name="item3">Tab3</TabsBodyPane>
                <TabsBodyPane name="item4">Tab4</TabsBodyPane>
            </TabsBody>
        </Tabs>
    </templateDemos>

</template>

<script>

    import templateDemos from './template-demos'

    import Tabs from "../../../src/Tabs";
    import TabsHead from "../../../src/TabsHead";
    import TabsHeadItem from "../../../src/TabsHeadItem";
    import TabsBody from "../../../src/TabsBody";
    import TabsBodyPane from "../../../src/TabsBodyPane";
    import Button from "../../../src/Button";
    import Icon from "../../../src/Icon";
    export default {
        name: 'collapse-demos',
        components: {
            Tabs,
            TabsHead,
            TabsHeadItem,
            TabsBody,
            TabsBodyPane,
            templateDemos,
            Button,
            Icon
        },
        data() {
            return {
                collapseSelected: ['item1'],
                code: `
<Tabs selected="item1">
    <TabsHead>
        <TabsHeadItem name="item1"><Icon name="home"></Icon>Tab1</TabsHeadItem>
        <TabsHeadItem name="item2" ><Icon name="electronics"></Icon>Tab2</TabsHeadItem>
        <TabsHeadItem name="item3"><Icon name="layers"></Icon>Tab3</TabsHeadItem>
        <TabsHeadItem name="item4"><Icon name="setting"></Icon>Tab4</TabsHeadItem>
    </TabsHead>
    <TabsBody>
        <TabsBodyPane name="item1">Tab1</TabsBodyPane>
        <TabsBodyPane name="item2">Tab2</TabsBodyPane>
        <TabsBodyPane name="item3">Tab3</TabsBodyPane>
        <TabsBodyPane name="item4">Tab4</TabsBodyPane>
    </TabsBody>
</Tabs>
`
            }
        }
    }
</script>

<style lang="scss" scoped>

.icon{
    margin-right: 4px;
}
</style>
