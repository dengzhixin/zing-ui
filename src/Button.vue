<template>
    <button :class="{[`icon-${iconPosition}`]:true}">
        <Icon class="icon" :name="icon"></Icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script lang="ts">
    import Icon from './Icon.vue'
    export default {
        components:{
            Icon
        },
        props:{
            icon:String,
            iconPosition: {
                type:String,
                default:'left',
                validate(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color-primary:#d45b38;
    $color-text:#fff;
    $color-bg:#2a4257;
    $color-bg-hover:#172e40;
button {
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    align-items: center;
    background-color: $color-bg;
    padding: 10px 1em ;
    border: none;
    color: $color-text;
    border-radius: 4px;
    outline: none;
    transition: all 250ms;
    cursor: pointer;
    &:hover{
        color: $color-primary;
        background-color: $color-bg-hover;

    }
    > .icon{
        order: 1;
        margin-right: 4px;
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
            margin-left: 4px;
        }
    }
}
</style>