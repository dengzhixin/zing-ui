<template>
    <div class="head" >
        <div class="items">
            <slot></slot>
            <div class="line" ref="line"></div>
        </div>
        <div class="blank"></div>
        <div class="actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ZingTabsHead',
        inject: ['eventBus'],
        props:{

        },
        mounted() {
            this.eventBus.$on('update:selected', (name) => {
                this.$children.forEach((childvm) => {
                    if (childvm.name == name) {
                        this.$refs.line.style.width = childvm.$el.clientWidth+'px'
                        this.$refs.line.style.left = childvm.$el.offsetLeft+'px'
                    }
                })
            })
        }
    }
</script>
<style lang="scss">
    $border-color: #d9d9d9;
    $line-color: #2593fc;
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid $border-color;
        position: relative;
        margin-bottom: 4px;

        .items {
            display: flex;

            .line {
                position: absolute;
                bottom: 0;
                border-bottom: 1px solid $line-color;
                transition: all 250ms;
            }
        }

        .blank {

        }

        .actions {
        }
    }
</style>
