<template>
    <button
            @click="$emit('click')"
            :class="classes">
        <Icon class="icon" name="loading" v-if="loading"></Icon>
        <Icon class="icon" :name="icon" v-if="!loading && icon"></Icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>
<script lang="ts">
    import Icon from './Icon.vue'

    export default {
        name: 'ZingButton',
        components: {
            Icon
        },
        props: {
            type:{
                type:String,
                default:'default'
            },
            loading: {
                type: Boolean,
                default: false
            },
            icon: String,
            iconPosition: {
                type: String,
                default: 'left',
                validate(value) {
                    return !(value !== 'left' && value !== 'right');
                }
            },
            disabled:{
                type:Boolean,
                default:false
            },
        },

        computed:{
            classes(){
                return {
                    [`icon-${this.iconPosition}`]:true,
                    'loading':this.loading,
                    [`btn-${this.type}`]:true,
                    'disabled':this.disabled}
            }
        }
    }
</script>
<style lang="scss" scoped>
    $height: 36px;
    $color-primary: #2593fc;
    $color-default: #fff;
    $color-danger: #fd4f54;
    $color-warning:#f7b232;
    $color-success: #28bd6e;
    $color-info: #2593fc;

    $color-text: #fff;
    $color-grey: #d9d9d9;
    $color-black: #595959;
    $color-error: #fc396b;
    $border-radius: 4px;
    $spacing: 4px;

    @keyframes loading {
        from {
            transform: rotate(0);
        }
        from {
            transform: rotate(360deg);
        }
    }

    button {
        display: inline-flex;
        justify-content: center;
        vertical-align: middle;
        align-items: center;
        border: none;
        border-radius: $border-radius;
        outline: none;
        transition: all 500ms;
        cursor: pointer;
        height: 32px;
        padding-left: 1em;
        padding-right: 1em;
        margin: $spacing;

        &:focus {
            animation: primary-shadow 250ms linear;
            animation-fill-mode: forwards;

        }



        &.btn-default{
            background-color: $color-default;
            color: $color-black;
            border: 1px solid $color-grey;
            &:hover {
                border: 1px solid $color-primary;
            }

        }
        &.btn-primary{
            background-color: $color-primary;
            color: $color-primary;
            border: 1px solid transparent;
            &:hover {
                background-color: lighten($color-primary, 10%);
            }
        }
        &.btn-dashed{
            background-color: $color-default;
            color: $color-black;
            border: 1px dashed $color-grey;
            &:hover {
                border: 1px dashed $color-primary;
            }
        }
        &.btn-text{
            background-color: $color-text;
            color: $color-black;
            border: 1px solid transparent;
            &:hover {
                background-color: lighten($color-grey, 12%);
            }
            &:focus{
                animation: none;
            }
        }

        $btnColors:(danger:$color-danger,warning:$color-warning,success:$color-success,info:$color-info);
        @each $name,$btnColor in $btnColors{
            &.btn-#{$name}{
                background-color: $btnColor;
                color: $color-text;
                border: 1px solid transparent;
                &:hover {
                    background-color: lighten( $btnColor, 10%);
                }
                &:focus {
                    animation: #{$name}-shadow 250ms linear;
                    animation-fill-mode: forwards;
                }
            }
        }

        &.loading .icon {
            animation: loading 1s infinite linear;
        }
        &.disabled {
            animation: none;
            cursor: not-allowed;
            background-color: $color-grey;
            &:hover{
                border: 1px solid transparent;
            }
        }



        @keyframes primary-shadow {
            to {
                box-shadow: lighten($color-primary, 36%) 0px 0px 0px 2px;
            }
        }
        @keyframes danger-shadow {
            to {
                box-shadow: lighten($color-danger, 30%) 0px 0px 0px 2px;
            }
        }
        @keyframes warning-shadow {
            to {
                box-shadow: lighten($color-warning, 30%) 0px 0px 0px 2px;
            }
        }
        @keyframes success-shadow {
            to {
                box-shadow: lighten($color-success, 30%) 0px 0px 0px 2px;
            }
        }
        @keyframes info-shadow {
            to {
                box-shadow: lighten($color-info, 30%) 0px 0px 0px 2px;
            }
        }
        > .icon {
            order: 1;
            margin-right: 4px;
        }

        > .content {
            order: 2;
        }

        &.icon-right {
            .content {
                order: 1;
            }

            .icon {
                order: 2;
                margin-left: 4px;
                margin-right: 0;

            }
        }

    }
</style>
