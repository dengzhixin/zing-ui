<template>
    <div class="content">
        <slot></slot>

    </div>
</template>
<script lang="ts">
    export default {
        name:'ZingContent'
    }
</script>
<style scoped>
    .content {
        flex-grow: 1;
    }
</style>
