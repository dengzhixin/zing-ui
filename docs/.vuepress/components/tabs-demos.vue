<template>
    <templateDemos title="基本用法" :code="code">
        <Tabs selected="item1">
            <TabsHead>
                <TabsHeadItem name="item1">Tab1</TabsHeadItem>
                <TabsHeadItem name="item2" >Tab2</TabsHeadItem>
                <TabsHeadItem name="item3">Tab3</TabsHeadItem>
                <TabsHeadItem name="item4">Tab4</TabsHeadItem>
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
    export default {
        name: 'collapse-demos',
        components: {
            Tabs,
            TabsHead,
            TabsHeadItem,
            TabsBody,
            TabsBodyPane,
            templateDemos,
            Button
        },
        data() {
            return {
                collapseSelected: ['item1'],
                code: `
<Tabs selected="item1">
    <TabsHead>
        <TabsHeadItem name="item1">Tab1</TabsHeadItem>
        <TabsHeadItem name="item2" >Tab2</TabsHeadItem>
        <TabsHeadItem name="item3">Tab3</TabsHeadItem>
        <TabsHeadItem name="item4">Tab4</TabsHeadItem>
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


</style>
