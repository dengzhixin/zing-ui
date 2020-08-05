<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        props: {},
        data() {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {

                if (vm.$options.name === 'ZingSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>
<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-grow: 1;
        flex-direction: column;

    &
    .hasSider {
        flex-direction: row;
    }

    }
</style>