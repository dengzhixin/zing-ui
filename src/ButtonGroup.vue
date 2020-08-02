<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>
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
