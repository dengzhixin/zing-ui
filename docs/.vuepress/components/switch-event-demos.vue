<template>
    <templateDemos title="事件监听" :code="code">
        <ZSwitch v-model="value" @change="switchChange"></ZSwitch>
        <p>{{value}}</p>
    </templateDemos>

</template>

<script>
    import Switch from "../../../src/Switch";
    import templateDemos from './template-demos'
    import Toast from "../../../src/Toast.js";
    import Vue from 'vue'
    Vue.use(Toast)
    export default {
        name: 'switch-event--demos',
        components: {
            ZSwitch:Switch,
            templateDemos
        },
        data() {
            return {
                value:false,
                code:`
        <ZSwitch v-model="value" @change="switchChange"></ZSwitch>
`
            }
        },
        methods:{
            switchChange(){
                this.$toast('当前开关状态为'+this.value)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>
