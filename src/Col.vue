<template>
    <div class="col" :class="[span && `col-${span}`,offset && `offset-${offset}`]">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        props:{
            span:[String,Number],
            offset:[String,Number]
        }
    }
</script>
<style lang="scss">
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