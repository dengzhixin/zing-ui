<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]"
        :style="{marginLeft:gutter/2+'px',marginRight:gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        props:{
            span:[String,Number],
            offset:[String,Number]
        },
        data(){
            return{
                gutter:0
            }
        }
    }
</script>
<style lang="scss">
    .col{
        border: 1px solid red;
        min-height: 100px;
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