<template>
    <div class="switch" :class="{checked:value}" @click="changeStatus">
        <span class="dot"></span>
    </div>
</template>

<script lang="ts">
    import {ref} from 'vue'
    export default {
        props:{
            value:Boolean
        },
        setup(props,context){
            const changeStatus = ()=>{
                context.emit('input',!props.value)
            }

            return {changeStatus}
        }
    }
</script>
<style lang="scss">
    @import "../assets/defaultTheme.scss";
    $h: 22px;
    $h2:$h - 4px;
    .switch {
        width: 2*$h;
        height: $h;
        border:none;
        position: relative;
        background-color: #1a2735;
        border-radius: 20px;
        transition: all 250ms ease-in;
        display: inline-block;
        &.checked{
            background-color: $color-primary;
            .dot{
                background-color: white;
                position: absolute;
                left: calc(#{2*$h - $h2 - 4px});
            }
        }
        .dot{
            display: block;
            width:$h2;
            height: $h2;
            background-color: #2a4257;
            position: absolute;
            left: 2px;
            top: 2px;
            border-radius: 50%;
        }
    }
</style>