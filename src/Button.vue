<template>
    <button
            @click="$emit('click')"
            :class="{[`icon-${iconPosition}`]:true,
    'loading':loading}">
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
        components: {
            Icon
        },
        props: {
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
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color-primary: #d45b38;
    $color-text: #fff;
    $color-bg: #2a4257;
    $color-bg-hover: #172e40;
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
        background-color: $color-bg;
        padding: 10px 1em;
        border: none;
        color: $color-text;
        border-radius: 4px;
        outline: none;
        transition: all 250ms;
        cursor: pointer;

        &.loading .icon {
            animation: loading 1s infinite linear;
        }

        &:hover {
            color: $color-primary;
            background-color: $color-bg-hover;

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
            }
        }

    }
</style>