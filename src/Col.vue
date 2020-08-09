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
            widePc: {
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
                let {span, offset, justify, align, ipad, narrowPc, pc, widePc} = this
                let x = (obj,device='')=>{
                    if(typeof obj === "number"){
                        obj={
                            span:obj
                        }
                    }
                    let arr = []
                    if(!obj){return arr
                    }
                    if(obj.span){
                        arr.push(`col-${device}${obj.span}`)
                    }
                    if(obj.offset){
                        arr.push(`offset-${device}${obj.offset}`)
                    }
                    return arr

                }
                return [
                    justify && `justify-${justify}`,
                    align && `align-${align}`,
                    ...x({span,offset}),
                    ...x(ipad,'ipad-'),
                    ...x(narrowPc,'narrowPc-'),
                    ...x(pc,'pc-'),
                    ...x(widePc,'widePc-')

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

        $justifyList: (left: flex-start, right: flex-end,
                center: center,around:space-around,
                between:space-between,evenly:space-evenly,
        );
        @each $name, $value in $justifyList {
            &.justify-#{$name} {
                justify-content: $value ;
            }
        }
        $alignList: (top: flex-start, bottom: flex-end,
                center: center);
        @each $name, $value in $alignList {
            &.align-#{$name} {
                align-items: $value ;
            }
        }

    }
</style>
