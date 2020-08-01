<template>
    <Topnav></Topnav>
    <div class="banner">
        <h1>Zing-UI</h1>
        <h2>一个基于Vue3 + TypeScript + Sass 的拟态化UI</h2>

        <div>
            <router-link to="/doc/switchDoc">
                <div class="button">Quick Start</div>
            </router-link>
        </div>
    </div>
</template>
<script lang="ts">
    import Topnav from '../components/Topnav.vue'
    import {inject,Ref} from 'vue'
    export default {
        components: {
            Topnav
        },
        setup(){
            const menuVisible = inject<Ref<Boolean>>('menuVisible')
            console.log("home",menuVisible)
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/defaultTheme.scss";

    .banner {
        margin: 0 auto;
        width: 80vw;
        max-width: 1024px;
        height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .button{
            background-color: $color-primary;
            padding: 6px 12px;
            margin-top: 4px;
            border-radius: 4px;
            cursor: pointer;
            &:hover{
                background-color: darken($color-primary,5%);
            }
        }
    }
</style>