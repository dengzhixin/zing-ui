<template>
    <div class="switch" :class="{checked:value}"
         @click="changeStatus"
        >
        <span class="dot" ></span>
    </div>
</template>

<script lang="ts">
    export default {
        name:'ZingSwitch',
        props:{
            value:Boolean,
            color:String
        },
        methods:{
            changeStatus(){
                this.$emit('input',!this.value)
                this.$emit('change',!this.value)
            }
        },mounted() {

        }
    }
</script>
<style lang="scss" scoped>
    $color-primary: #2593fc;
    $h: 22px;
    $h2:$h - 4px;
    .switch {
        width: 2*$h;
        height: $h;
        position: relative;
        background-color: white;
        border: 1px solid $color-primary;
        border-radius: 20px;
        transition: all 250ms ease-in;
        display: inline-block;
        cursor: pointer;
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
            background-color:$color-primary;
            position: absolute;
            left: 2px;
            top: 2px;
            border-radius: 50%;
        }
    }
</style>
