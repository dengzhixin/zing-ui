<template>
    这是Switch的介绍
    <Switch v-model:value="v1"></Switch>
    <Switch v-model:value="v2" ></Switch>
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