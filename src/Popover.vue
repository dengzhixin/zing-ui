<template>
    <div class="popover" @click="onClick">
        <div ref="content" class="popoverContent" v-show="show">
            <slot name="content"></slot>
        </div>
        <div ref="triggerWrapper" class="triggerWrapper">
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
            onShow(e) {
                let {triggerWrapper, content} = this.$refs
                let {left, top, width, height} = triggerWrapper.getBoundingClientRect()
                left += +window.scrollX
                top += window.scrollY
                switch (this.position) {
                    case 'left':
                        content.style.left = left  - width + 'px'
                        content.style.top = top + 'px'
                        break;
                    case 'right':
                        content.style.left = left + width  + 'px'
                        content.style.top = top + 'px'
                        break;
                    case 'top':
                        content.style.left = left + 'px'
                        content.style.top = top -height + 'px'
                        break;
                    case 'bottom':
                        content.style.left = left + 'px'
                        content.style.top = top + height + 'px'
                        break;

                }

                document.body.appendChild(content)
                document.addEventListener('click', this.documentEventHandle)
            },
            onClick(e) {
                if (this.$refs.triggerWrapper.contains(e.target)) {
                    this.show = !this.show
                    this.onShow(e)
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.documentEventHandle)
        }
    }
</script>
<style lang="scss" scoped>
    .popover {
        display: inline-flex;
    }

    .popoverContent {
        position: absolute;
        border: 1px solid red;
        padding: 8px 16px;
        transition: all 0.3s linear;
    }
</style>
