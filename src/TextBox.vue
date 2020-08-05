<template>
    <div class="textBox" :class="error?'danger':(warning?'warning':'')">
        <input type="text" :value="value" :disabled="disabled"
               :readonly="readonly" :placeholder="placeholder"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @focus="$emit('focus',$event.target.value)"
               @blur="$emit('blur',$event.target.value)">
        <template v-if="error || warning">
            <Icon class="icon" name="error"></Icon>
            <span class="msg">{{error || warning}}</span>
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
            disabled: Boolean,
            readonly: Boolean,
            error: String,
            warning: String,
            title: String,
            placeholder: String,
        },
        mounted() {
        }
    }

</script>
<style lang="scss" scoped>
    $height: 36px;
    $color-primary: #2593fc;
    $color-default: #fff;
    $color-danger: #fd4f54;
    $color-warning: #f7b232;
    $color-text: #fff;
    $color-grey: #d9d9d9;
    $color-black: #595959;
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
        color: $color-black;

        input {
            vertical-align: middle;
            height: $height;
            padding: 1em;
            border-radius: $border-radius;
            background-color: $color-default;
            border: 1px solid transparent;
            outline: none;
            transition: all 100ms;
            border: 1px solid $color-primary;

            &:disabled, &:read-only {
                cursor: no-drop;
                background-color: transparent;
                border: 1px solid $color-grey;
                color: $color-grey;

                &:hover, &:focus {
                    border: 1px solid $color-grey;
                }
            }

            &:hover, &:focus {
                border: 1px solid lighten($color-primary, 10%);
            }

            &:focus {
                animation: shawdow 250ms linear alternate;
                animation-fill-mode: forwards;
            }
        }

        @keyframes shawdow {
            to {
                box-shadow: lighten($color-primary, 40%) 0px 0px 0px 2px;
            }
        }

        .icon {
            margin: 0px 4px;
            color: $color-error;
            cursor: pointer;
        }

        &.danger {
            .icon,
            .msg {
                color: $color-danger;
            }
        }

        &.warning {
            .icon,.msg {
                color: $color-warning;
            }
        }

    }
</style>