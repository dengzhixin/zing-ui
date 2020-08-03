<template>
    <div class="row"
         :class="rowClass"
        :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts" scoped>
    export default {
        props:{
            gutter:{
                type:[String,Number],
                default:0
            },
            align:String
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        },
        computed:{
            rowClass(){
                return [`align-${this.align}`]
            },
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
        &.align-left{
            justify-content: flex-start;
        }
        &.align-right{
            justify-content: flex-end;
        }
        &.align-center{
            justify-content: center;
        }
        &.align-around{
            justify-content: space-around;
        }
        &.align-between{
            justify-content: space-between;
        }
        &.align-evenly{
            justify-content: space-evenly;
        }
    }
</style>