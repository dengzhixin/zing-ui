<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>


</template>
<script lang="ts">
    import './svg.js'

    export default {
        name: 'ZingIcon',
        props: {
            name: String,
            title: String
        }
    }
</script>
<style lang="scss" scoped>


    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
        position: relative;

        &.title {
            display: none;
        }

    }


</style>