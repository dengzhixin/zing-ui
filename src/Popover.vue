<template>
    <div class="popover" ref="popover">
        <div ref="content" class="popoverContent" :class="position" v-show="show">
            <slot name="content"></slot>
        </div>
        <div ref="triggerWrapper" class="triggerWrapper" @click="onClick">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        props: {
            position: {
                type: String,
                default: 'right'
            }
        },
        methods: {
            documentEventHandle(e) {
                if (!this.$refs.content.contains(e.target) && !this.$refs.triggerWrapper.contains(e.target)) {
                    this.show = false
                    document.removeEventListener('click', this.documentEventHandle)
                }
            },
            initPosition() {

                let {triggerWrapper, content} = this.$refs
                document.body.appendChild(content)
                this.$nextTick(() => {
                    let {left, x, top, width, height} = triggerWrapper.getBoundingClientRect()
                    let rectContent = content.getBoundingClientRect()
                    let width2 = rectContent.width
                    let height2 = rectContent.height
                    left += window.scrollX
                    top += window.scrollY
                    switch (this.position) {
                        case 'left':
                            content.style.left = left - width2 + 'px'
                            content.style.top = top + 'px'
                            break;
                        case 'right':
                            content.style.left = left + width + 'px'
                            content.style.top = top + 'px'
                            break;
                        case 'top':
                            content.style.left = left + 'px'
                            content.style.top = top - height2 + 'px'
                            break;
                        case 'bottom':
                            content.style.left = left + 'px'
                            content.style.top = top + height + 'px'
                            break;

                    }
                })


            },
            onShow() {
                this.initPosition()
                document.addEventListener('click', this.documentEventHandle)
            },
            onClick(e) {
                this.show = !this.show
                this.onShow(e)
            }
        },
        mounted() {
            document.addEventListener('click', this.documentEventHandle)
        }
    }
</script>
<style lang="scss" scoped>
    @import "style.scss";

    .popover {
        display: inline-flex;
    }

    .popoverContent {
        position: absolute;
        border: 1px solid $color-grey;
        border-radius: $border-radius;
        padding: 0.5em 1em;
        transition: all 0.3s linear;
        word-break: break-all;
        filter: drop-shadow(0px 1px 1px $color-grey);
        background-color: white;

        &::before, &::after {
            content: '';
            display: block;
            position: absolute;
        }


        &.top {
            &::before, &::after {
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
            }
        }

        &.top {
            margin-top: -6px;
            &::before {
                top: 100%;
                left: 1em;
                border-top: 6px solid $color-grey;
                border-bottom: 6px solid transparent;
            }

            &::after {
                top: calc(100% - 1px);
                left: 1em;
                border-top: 6px solid white;
                border-bottom: 6px solid transparent;
            }
        }

        &.bottom {
            &::before, &::after {
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
            }
        }

        &.bottom {
            margin-top: 6px;
            &::before {
                bottom: 100%;
                left: 1em;
                border-bottom: 6px solid $color-grey;
                border-top: 6px solid transparent;
            }

            &::after {
                bottom: calc(100% - 1px);
                left: 1em;
                border-bottom: 6px solid white;
                border-top: 6px solid transparent;
            }
        }

        &.left {
            &::before, &::after {
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
            }
        }

        &.left {
            margin-left: -6px;
            &::before {
                left: 100%;
                top: 0.5em;
                border-left: 6px solid $color-grey;
                border-right: 6px solid transparent;
            }

            &::after {
                /*bottom: calc(100% - 1px);*/
                left:calc(100% - 1px) ;
                top: 0.5em;

                border-left: 6px solid white;
                border-right: 6px solid transparent;
            }
        }
        &.right {
            &::before, &::after {
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
            }
        }

        &.right {
            margin-left: 6px;
            &::before {
                right: 100%;
                top: 0.5em;
                border-right: 6px solid $color-grey;
                border-left: 6px solid transparent;
            }

            &::after {
                /*bottom: calc(100% - 1px);*/
                right:calc(100% - 1px) ;
                top: 0.5em;

                border-right: 6px solid white;
                border-left: 6px solid transparent;
            }
        }

    }
</style>
