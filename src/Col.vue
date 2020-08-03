<template>
    <div class="col"
         :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    const deviceValidate = (value) => {

        let keys = Object.keys(value)
        let validKeys = ['span', 'offset']
        let valid = true
        keys.forEach((key) => {
            if (validKeys.indexOf(key) === -1) {
                valid = false
            }
        })
        return valid
    }
    export default {
        props: {
            span: {type: [String, Number]},
            offset: {type: [String, Number]},
            justify: String,
            align: String,
            ipad: {
                type: [Number, Object],
                validator: deviceValidate
            },
            narrowPc: {
                type: [Number, Object],
                validator: deviceValidate
            },
            pc: {
                type: [Number, Object],
                validator: deviceValidate
            },
            widthPc: {
                type: [Number, Object],
                validator: deviceValidate
            },
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, justify, align, ipad, narrowPC, pc, widePc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,
                    justify && `justify-${justify}`,
                    align && `align-${align}`,
                    ...(ipad ? [`col-ipad-${ipad.span}`] : []),
                    ...(narrowPC ? [`col-narrow-pc-${narrowPC.span}`] : []),
                    ...(pc ? [`col-pc-${pc.span}`] : []),
                    ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),

                ]
            },
            colStyle() {
                return {paddingLeft: this.gutter / 2 + 'px', paddingRight: this.gutter / 2 + 'px'}
            }
        }
    }
</script>
<style lang="scss" scoped>
    .col {
        $span-pre: col-;
        $span-phone-pre: col-phone;
        $offset-pre: offset-;

        display: flex;
        @for $n from 1 through 24 {
            &.#{$span-pre}#{$n} {
                width: ($n / 24) * 100%;
            }
            &.#{$offset-pre}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
        @media (min-width: 576px) {
            @for $n from 1 through 24 {
                $span-pre: 'col-ipad-';
                &.#{$span-pre}#{$n} {
                    width: ($n / 24) * 100%;

                }
            }
        }
        @media (min-width: 769px)  {
            @for $n from 1 through 24 {
                $span-pre: 'col-narrow-pc-';
                &.#{$span-pre}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 993px)  {
            @for $n from 1 through 24 {
                $span-pre: 'col-pc-';
                &.#{$span-pre}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }
        @media (min-width: 1201px) {
            @for $n from 1 through 24 {
                $span-pre: 'col-wide-pc-';
                &.#{$span-pre}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }
        }

        &.justify-left {
            justify-content: flex-start;
        }

        &.justify-right {
            justify-content: flex-end;
        }

        &.justify-center {
            justify-content: center;
        }

        &.justify-around {
            justify-content: space-around;
        }

        &.justify-between {
            justify-content: space-between;
        }

        &.justify-evenly {
            justify-content: space-evenly;
        }

        &.align-top {
            align-items: flex-start;
        }

        &.align-center {
            align-items: center;
        }

        &.align-bottom {
            align-items: flex-end;
        }
    }
</style>