<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {ref,provide} from 'vue'
import router from "./router";
export default {
  name: 'App',
  components: {

  },
  setup(){
    const deviceWidth = document.documentElement.clientWidth
    const menuVisible = ref(deviceWidth>500)
    provide('menuVisible',menuVisible)
    // return
    router.afterEach(()=>{
      if(deviceWidth<=500){
        menuVisible.value=false

      }
    })
  }
}
</script>

