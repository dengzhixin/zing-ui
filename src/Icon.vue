<template>
    <svg aria-hidden="true" v-if="name">
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
<style>

</style>