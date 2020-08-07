<template>
    <div class="collapseItem">
        <h4 @click="toggle">
            <span class="title">{{title}}</span>
            <div class="blank"></div>
            <Icon :name="open?'down':'right'"></Icon>
        </h4>
        <transition name="fade">
            <div v-if="open" class="itemContent">
                <slot ></slot>
            </div>
        </transition>
    </div>
</template>
<script lang="ts">
    import Icon from "./Icon.vue";
    export default {
        name: 'ZingCollapseItem',
        inject: ['eventBus'],
        components:{
            Icon
        },
        data() {
            return {
                open: false
            }
        },
        props: {
            title: {
                type: String,
                require: true
            },
            name: {
                type: String,
                require: true
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (selected) => {
                if (selected.indexOf(this.name) > -1) {
                    this.open = true
                } else {
                    this.open = false
                }
            })
        },
        methods: {
            toggle() {
                if (this.open === false) {
                    this.eventBus.$emit('push:selected', this.name)
                } else {
                    this.eventBus.$emit('remove:selected', this.name)
                }
            }
        }
    }
</script>
<style lang="scss" scoped>
    $color-grey: #d9d9d9;

    .collapseItem {
        margin: 1em;
        padding: 1em 0;
        border-bottom: 1px solid $color-grey;

        > h4 {
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            > .blank{
                flex-grow: 1;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity 100ms;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
