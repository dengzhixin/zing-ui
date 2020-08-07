<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default {
        name:'ZingTabs',
        props:{
            selected:{
                type:String,
                require:true
            }
        },
        data(){
            return {
                eventBus:new Vue()
            }
        },
        provide(){
            return {'eventBus':this.eventBus}
        },
        mounted() {
            if(this.$children.length===0){
                console && console.warn && console.warn('tabs的子组件不应该为空')
            }
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>
<style lang="scss" scoped>
.tabs{

}
</style>
