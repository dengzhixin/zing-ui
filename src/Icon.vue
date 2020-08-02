<template>
    <svg class="icon" aria-hidden="true" v-if="name">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script lang="ts">
    export default {
        name:'Icon',
        props:{
            name:String
        }
    }
</script>
<style scoped>
    .icon {
        width: 1em;
        height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>