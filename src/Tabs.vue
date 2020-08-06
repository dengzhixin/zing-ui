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
            this.eventBus.$emit('update:selected',this.selected)
        }
    }
</script>
<style lang="scss" scoped>
    @import "style.scss";
.tabs{

}
</style>
