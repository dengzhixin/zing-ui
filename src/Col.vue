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
            offset:{type:[String,Number]},
            justify: String,
            align: String
        },
        data(){
            return{
                gutter:0
            }
        },
        computed:{
            colClass(){
                return [
                    this.span && `col-${this.span}`,
                    this.offset && `offset-${this.offset}`,
                    this.justify && `justify-${this.justify}`,
                    this.align && `align-${this.align}`,
                ]
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
        display: flex;
        @for $n from 1 through 24{
            &.#{$span-pre}#{$n} {
                width:($n / 24) * 100%;
            }
            &.#{$offset-pre}#{$n} {
                margin-left:($n / 24) * 100%;
            }
        }
        &.justify-left {
            justify-content: flex-start;
        }

        &.justify-right {
            justify-content: flex-end;
        }

        &.justify-center {
            justify-content: center;
        }

        &.justify-around {
            justify-content: space-around;
        }

        &.justify-between {
            justify-content: space-between;
        }

        &.justify-evenly {
            justify-content: space-evenly;
        }

        &.align-top{
            align-items: flex-start;
        }
        &.align-center{
            align-items: center;
        }
        &.align-bottom{
            align-items: flex-end;
        }
    }
</style>