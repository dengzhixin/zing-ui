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
        name:'ZingButton',
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
        background-color: var(--color-bg);
        border: none;
        color: var(--color-text);
        border-radius: var(--border-radius);
        outline: none;
        transition: all 250ms;
        cursor: pointer;
        height: 32px;
        padding-left: 1em;
        padding-right: 1em;
        &.loading .icon {
            animation: loading 1s infinite linear;
        }

        &:hover {
            color: var(--color-primary);
            background-color: var(--color-bg-hover);

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