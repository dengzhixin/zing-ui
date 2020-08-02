<template>
    <button :class="{[`icon-${iconPosition}`]:true}">
        <svg class="icon"  aria-hidden="true" v-if="icon">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script lang="ts">
    export default {
        props:{
            icon:String,
            iconPosition:String
        }
    }
</script>
<style lang="scss" scoped>
button {
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    > .icon{
        order: 1;
    }
    > .content{
        order: 2;
    }
    &.icon-right{
        .content{
            order: 1;
        }
        .icon{
            order: 2;
        }
    }
}
</style>