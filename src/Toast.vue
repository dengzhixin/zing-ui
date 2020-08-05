<template>
    <transition name="fade" @after-leave="afterLeave">
        <div class="toast" v-show="show" :class="toastClass" ref="toast">

            <div class="content">
                <slot></slot>
            </div>
            <div class="closeButton" @click="clickCloseButton">
                <zing-icon class="icon" v-if="closeButton.type==='icon'" name="circleClose"></zing-icon>
                <div class="text" v-else ref="text">
                    <div class="line" ref="line"></div>
                    <span>{{closeButton.text}}</span></div>
            </div>
        </div>
    </transition>

</template>
<script lang="ts">
    import ZingIcon from "./Icon.vue";

    export default {
        components: {ZingIcon},
        data() {
            return {
                show: false
            }
        },
        props: {
            type: {
                type: String,
                default: 'default'
            },
            position: {
                type: String,
                default: 'top'
            },
            autoClose: {
                type: Boolean,
                default: true
            },
            closeDelay: {
                type: Number,
                default: 300000
            },
            closeButton: {
                type: Object,
                default: () => {
                    return {
                        type: 'icon',
                        text: undefined,
                        callback: undefined
                    }
                }
            }
        },
        computed: {
            toastClass() {
                let {type, position} = this
                return [type, position]
            }
        },
        mounted() {
            this.autoClose && setTimeout(() => {
                this.close()
            }, this.closeDelay)
            if (this.closeButton.text) {
                this.closeButton.type = 'text'
            }
            this.show = true
            this.initLineHeight()

        },
        methods: {
            initLineHeight() {
                this.$nextTick(() => {
                    let height = (this.$refs.toast.getBoundingClientRect().height - 10) + 'px';
                    this.$refs.line.style.height = height
                })
            },
            close(callback = undefined) {
                this.show = false
                callback && callback()
            },
            afterLeave() {
                this.$el.remove()
                this.$destroy()
            },
            clickCloseButton() {
                this.close()
                this.closeButton && this.closeButton.callback && this.closeButton.callback()
            }
        }
    }
</script>
<style lang="scss">
    $height: 36px;
    $color-primary: #2593fc;
    $color-default: #fff;
    $color-danger: #fd4f54;
    $color-warning: #f7b232;
    $color-success: #28bd6e;
    $color-text: #fff;
    $color-grey: #d9d9d9;
    $color-black: #595959;
    $color-error: #fc396b;
    $border-radius: 4px;
    $spacing: 4px;
    .toast {
        background-color: $color-black;
        color: $color-text;
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px 16px;
        margin: 4px;
        border-radius: $border-radius*4;
        font-size: 14px;
        transition: all 300ms linear;
        max-width: 60vw;
        display: flex;
        align-items: center;
        $types: (default:$color-black, danger:$color-danger, warning:$color-warning, success:$color-success);
        @each $name, $color in $types {
            &.#{$name} {
                background-color: #{$color};
            }
        }

        &.top {
            top: 0;
        }

        &.bottom {
            top: auto;
            bottom: 0;
        }
        &.center{
            top:50%;
            transform: translate(-50%,-50%);
        }

        .content {
            display: flex;
            word-break: break-word;
            flex-grow: 1
        }

        .closeButton {
            cursor: pointer;
            flex-shrink: 0;

            .text {
                display: flex;
                align-items: center;

                .line {
                    width: 1px;
                    background-color: white;
                    margin: 8px;
                }
            }

        }

    }



    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>
