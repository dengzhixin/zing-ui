<template>
    <div class="pane" v-show="active">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name:'ZingTabsBodyPane',
        inject:['eventBus'],
        props: {
            name: {
                type: String,
                require: true
            }
        },
        data(){
            return {
                active:false
            }
        },
        mounted() {
            this.eventBus.$on('update:selected',(name)=>{
                this.active = this.name === name;
            })
        }
    }
</script>
<style lang="scss">
.pane{
    padding-top: 0.5em;
}
</style>
