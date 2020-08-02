<template>
    <!--        <span class="title" v-if="title">{{title}}</span>-->

    <div class="textBox">
        <input type="text" :value="value" :disabled="disabled"
               :readonly="readonly" :placeholder="placeholder"
                @change="$emit('change')"
               @input="$emit('input')">
        <template v-if="error">
            <Icon class="icon" name="error"></Icon>
<!--            <span class="errorMsg">{{error}}</span>-->
        </template>
    </div>


</template>
<script lang="ts">
    import Icon from "./Icon.vue";

    export default {
        name: 'ZingTextBox',
        components: {
            Icon
        },
        props: {
            value: String,
            disabled:Boolean,
            readonly:Boolean,
            error: String,
            title: String,
            placeholder:String
        },
        mounted() {
            console.log(Icon);
        }
    }

</script>
<style lang="scss" scoped>
    $height: 32px;
    $color-primary: #1787fc;
    $color-text: #fff;
    $color-bg: #d1dae0;
    $color-bg-hover: #fff;
    $color-error: #fc396b;
    $border-radius: 4px;
    $spacing: 4px;

    .textBox {
        display: inline-flex;
        vertical-align: middle;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: $spacing;
        input {
            vertical-align: middle;
            height: $height;
            padding: 1em;
            border-radius: $border-radius;
            background-color: $color-bg;
            border: 1px solid transparent;
            outline: none;
            transition: all 100ms;
            &:disabled,&:read-only{
                cursor: no-drop;
                &:hover, &:focus {
                    background-color: $color-bg;
                    border: 1px solid transparent;
                }
            }
            &:hover, &:focus {
                background-color: $color-bg-hover;
                border: 1px solid $color-primary;
            }

            &:focus {
                box-shadow: inset lighten($color-primary,40%) -1px -1px 10px;
            }
        }

        .icon {
            margin: 0px 4px;
            color: $color-error;
            cursor: pointer;
        }

        .errorMsg {

        }
    }
</style>