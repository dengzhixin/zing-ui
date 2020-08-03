<template>
    <div class="row"
        :style="{marginLeft:gutter/-2+'px',marginRight:gutter/-2+'px'}">
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
        }
    }
</script>
<style lang="scss">
    .row{
        display: flex;
        flex-direction: row;
    }
</style>