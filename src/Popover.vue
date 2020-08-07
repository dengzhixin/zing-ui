<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="popoverContent" :class="position" v-show="show">
            <slot name="content" :close="onHide"></slot>
        </div>
        <div ref="triggerWrapper" class="triggerWrapper">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name:'ZingPopover',
        data() {
            return {
                show: false,
                hideTimeId:undefined,
            }
        },
        props: {
            position: {
                type: String,
                default: 'right'
            },
            trigger:{
                type:String,
                default:'click'
            }
        },
        methods: {
            documentEventHandle(e) {
                //点击的是外面的
                if (!this.$refs.contentWrapper.contains(e.target) && !this.$refs.triggerWrapper.contains(e.target)) {
                    this.show = false
                    document.removeEventListener('click', this.documentEventHandle)
                }
            },
            initPosition() {

                const {triggerWrapper, contentWrapper} = this.$refs
                document.body.appendChild(contentWrapper)
                this.$nextTick(() => {
                    let {left, top, width, height} = triggerWrapper.getBoundingClientRect()
                    let rectContent = contentWrapper.getBoundingClientRect()
                    let width2 = rectContent.width
                    let height2 = rectContent.height
                    left += window.scrollX
                    top += window.scrollY

                    let hashPosition ={
                        left:{
                            left: left - width2,
                            top:top
                        },
                        right:{
                            left:  left + width ,
                            top:top
                        },
                        top:{
                            left: left,
                            top: top - height2
                        },
                        bottom:{
                            left: left,
                            top: top + height
                        }
                    }
                    contentWrapper.style.left = hashPosition[this.position].left +'px'
                    contentWrapper.style.top = hashPosition[this.position].top +'px'

                })


            },
            onClick(){
                this.show = !this.show
                this.initPosition()
                if(this.trigger==='click'){
                    document.addEventListener('click', this.documentEventHandle)
                }
            },
            onShow() {
                this.clearHideTimeout()
                this.show =true
                this.initPosition()
                if(this.trigger==='click'){
                    document.addEventListener('click', this.documentEventHandle)
                }
            },
            onHide(){
                this.hideTimeId = setTimeout(()=>{
                    this.show = false
                },200)
            },
            clearHideTimeout(){
                if(this.hideTimeId){
                    clearTimeout(this.hideTimeId)
                }
            }

        },
        mounted() {
            if(this.trigger==='click'){
                this.$refs.triggerWrapper.addEventListener('click',this.onClick)
            }else{
                this.$refs.triggerWrapper.addEventListener('mouseenter',this.onShow)
                this.$refs.triggerWrapper.addEventListener('mouseleave',this.onHide)
                this.$refs.contentWrapper.addEventListener('mouseenter',this.clearHideTimeout)
                this.$refs.contentWrapper.addEventListener('mouseleave',this.onHide)
            }

        },
        destroyed() {
            const {triggerWrapper,contentWrapper} = this.$refs
            if(this.trigger==='click'){
                triggerWrapper && triggerWrapper.removeEventListener('click', this.onClick);
                document.removeEventListener('click', this.documentEventHandle)
            }else{
                triggerWrapper && triggerWrapper.removeEventListener('mouseenter',this.onShow)
                triggerWrapper && triggerWrapper.removeEventListener('mouseleave',this.onHide)
                contentWrapper && contentWrapper.removeEventListener('mouseenter',this.clearHideTimeout)
                contentWrapper && contentWrapper.removeEventListener('mouseleave',this.onHide)
            }
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
        max-width: 20em;
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
                border-bottom: none

            }
        }

        &.top {
            margin-top: -6px;
            &::before {
                top: 100%;
                left: 1em;
                border-top: 6px solid $color-grey;
            ;
            }

            &::after {
                top: calc(100% - 1px);
                left: 1em;
                border-top: 6px solid white;
            }
        }

        &.bottom {
            &::before, &::after {
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top:none;

            }
        }

        &.bottom {
            margin-top: 6px;
            &::before {
                bottom: 100%;
                left: 1em;
                border-bottom: 6px solid $color-grey;
            }

            &::after {
                bottom: calc(100% - 1px);
                left: 1em;
                border-bottom: 6px solid white;
            }
        }

        &.left {
            &::before, &::after {
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
                border-right:none;

            }
        }

        &.left {
            margin-left: -6px;
            &::before {
                left: 100%;
                top: 0.5em;
                border-left: 6px solid $color-grey;
            }

            &::after {
                left:calc(100% - 1px) ;
                top: 0.5em;
                border-left: 6px solid white;
            }
        }
        &.right {
            &::before, &::after {
                border-bottom: 6px solid transparent;
                border-top: 6px solid transparent;
                border-left:none;

            }
        }

        &.right {
            margin-left: 6px;
            &::before {
                right: 100%;
                top: 0.5em;
                border-right: 6px solid $color-grey;
            }

            &::after {
                right:calc(100% - 1px) ;
                top: 0.5em;
                border-right: 6px solid white;
            }
        }

    }
</style>
