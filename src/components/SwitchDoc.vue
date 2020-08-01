<template>
    这是Switch的介绍
    <Switch :value="v1" @input="v1 = $event"></Switch>
    <Switch :value="v2" @input="v2 = $event"></Switch>
</template>
<script lang="ts">
    import Switch from "../lib/Switch.vue";
    import {ref} from 'vue'
    export default{
        components:{
            Switch
        },
        setup(){
            const v1 = ref(false)
            const v2 = ref(true)
            return {v1,v2}
        }

    }
</script>