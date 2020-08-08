<template>
    <templateDemos title="基本用法" :code="code">
        <ZSwitch v-model="value"></ZSwitch>
        <p>{{value}}</p>
    </templateDemos>

</template>

<script>
    import Switch from "../../../src/Switch";
    import templateDemos from './template-demos'
    export default {
        name: 'button-group-demos',
        components: {
            ZSwitch:Switch,
            templateDemos
        },
        data() {
            return {
                value:false,
                code:`
<ZSwitch v-model="value"></ZSwitch>
`
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
