<template>
    <div class="item" @click="selectItem" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'ZingTabsHeadItem',
        inject: ['eventBus'],
        props: {
            name: {
                type: String,
                require: true
            },
            disabled: {
                type:Boolean,
                default:false
            }
        },
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (name) => {
                this.active = this.name === name;
            })
        },
        data() {
            return {
                active: false
            }
        },
        computed: {
            classes() {
                return [{'active': this.active},{'disabled':this.disabled}]
            }
        },
        methods: {
            selectItem() {
                !this.disabled && this.eventBus.$emit('update:selected', this.name)
            }
        },

    }
</script>
<style lang="scss" scoped>
    $color-primary: #2593fc;
    $color-grey: #d9d9d9;

    .item {
        margin-right: 2em;
        cursor: pointer;
        &:hover{
            color: $color-primary;
        }
        &.disabled{
            cursor: not-allowed;
            color: $color-grey;
            &:hover{
                color: $color-grey;
            }
        }
    }
</style>
