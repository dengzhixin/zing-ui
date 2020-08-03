<template>
    <div class="row"
        :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        props:{
            gutter:{
                type:[String,Number],
                default:0
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        },
        computed:{
            rowStyle(){
                return {
                    marginLeft:this.gutter/-2+'px',
                    marginRight:this.gutter/-2+'px'}
            }
        }
    }
</script>
<style lang="scss">
    .row{
        display: flex;
        flex-direction: row;
    }
</style>