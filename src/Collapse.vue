<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>
<script lang="ts">
    import Vue from "vue";

    export default {
        name: 'ZingCollapse',
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            return {'eventBus': this.eventBus}
        },
        props: {
            selected: Array,
            single: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected', this.selected)
            this.eventBus.$on('push:selected', (name) => {
                let copy = JSON.parse(JSON.stringify(this.selected))
                if (this.single) {
                    copy = [name]
                } else {
                    copy.push(name)
                }
                this.eventBus.$emit('update:selected', copy)
                this.$emit('update:selected', copy)
            })

            this.eventBus.$on('remove:selected', (name) => {
                if (this.selected) {
                    let copy = JSON.parse(JSON.stringify(this.selected))
                    let index = copy.indexOf(name)
                    copy.splice(index, 1)
                    this.eventBus.$emit('update:selected', copy)
                    this.$emit('update:selected', copy)
                }

            })
        }
    }
</script>
<style lang="scss" scoped>
    .collapse {
    }
</style>
