<template>
    <div class="aside" :style="styles">
        <slot></slot>

    </div>
</template>
<script lang="ts">
    export default {
        name:"ZingAside",
        props:{
            width:[String,Number]
        },
        computed:{
            styles(){
                let {width} = this
                if(width){
                    if(typeof width === 'number'){
                        width +='px'
                    }
                    return {width}
                }
            }
        }
    }
</script>
<style scoped>

</style>
