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
            justify: String
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowClass() {
                return [
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

    }
</style>