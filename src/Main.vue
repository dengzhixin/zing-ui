<template>
    <div class="main">
        <slot></slot>

    </div>
</template>
<script lang="ts">
    export default {
        name:'ZingContent'
    }
</script>
<style scoped>
    .main {
        flex-grow: 1;
    }
</style>
