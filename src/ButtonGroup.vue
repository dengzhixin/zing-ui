<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    export default {
        mounted() {
            for(let node of this.$el.children){
                if (node.tagName.toLocaleLowerCase() !== 'button') {
                    console.warn("ButtonGroup的子元素应该全部是Button")
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    .buttonGroup{
        display: inline-flex;
        vertical-align: center;
        button{
            border-radius: 0;
            &:first-child{
                border-bottom-left-radius: var(--border-radius);
                border-top-left-radius: var(--border-radius);
            }
            &:last-child{
                border-bottom-right-radius: var(--border-radius);
                border-top-right-radius: var(--border-radius);
            }
        }
    }
</style>
