<template>
    <div class="col"
         :class="colClass"
        :style="colStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        props:{
            span:{type:[String,Number]},
            offset:{type:[String,Number]}
        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colClass(){
                return [this.span && `col-${this.span}`,this.offset && `offset-${this.offset}`]
            },
            colStyle(){
                return {marginLeft:this.gutter/2+'px',marginRight:this.gutter/2+'px'}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col{
        $span-pre:col-;
        $offset-pre:offset-;
        @for $n from 1 through 24{
            &.#{$span-pre}#{$n} {
                width:($n / 24) * 100%;
            }
            &.#{$offset-pre}#{$n} {
                margin-left:($n / 24) * 100%;
            }
        }
    }
</style>