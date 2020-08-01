<template>
    <section class="content">
        <div class="showMenuBtn" @click="toggleMenu">菜单</div>
        <router-link to="/">
            <div class="logo" >Zing-UI</div>
        </router-link>
        <ul class="menu">
            <router-link to="/">
                <li>主页</li>
            </router-link>

            <router-link to="/doc/switchDoc">
                <li>文档</li>
            </router-link>
            <router-link to="#">
                <li>过多</li>
            </router-link>

        </ul>
    </section>
</template>
<script lang="ts">
    import {inject, Ref} from "vue";
    export default {
        setup() {
            const menuVisible = inject<Ref<Boolean>>('menuVisible')
            const toggleMenu = ()=>{
                menuVisible.value = !menuVisible.value
            }
            console.log("topnav", menuVisible)
            return {toggleMenu,menuVisible}
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/defaultTheme.scss";

    .content {
        display: flex;
        justify-content: space-between;
        padding: 10px;
        height: 64px;
        position: relative;
        .showMenuBtn{
            display: none;
        }
        .logo {
            font-width: bold;
            font-size: 40px;
            color: $color-primary;
        }

        .menu {
            display: flex;
            font-size: 16px;
            font-width: bold;

            li {
                line-height: 54px;
                margin-right: 2em;
                color: white;

                &:hover {
                    color: lighten($color-primary, 10%);
                }
            }


        }
        @media (max-width: 500px) {
            &{
                display: block;
                justify-content: center;
            }
            .showMenuBtn{
                display: block;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
            .logo{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }

            .menu{
                background-color: red;
                display: none;
            }
        }

    }


</style>