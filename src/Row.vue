<template>
    <div class="row"
         :class="rowClass"
         :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script lang="ts" scoped>
    export default {
        props: {
            gutter: {
                type: [String, Number],
                default: 0
            },
            justify: String,
            align:String
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowClass() {
                return [
                    !this.gutter && 'wrap',
                    this.justify && `justify-${this.justify}`,
                    this.align && `align-${this.align}`,
                ]
            },
            rowStyle() {
                return {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                }
            }
        }
    }
</script>
<style lang="scss">
    .row {
        display: flex;
        flex-direction: row;
        &.wrap{
            flex-wrap: wrap;
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
