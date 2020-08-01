<template>
    <Topnav></Topnav>
    <div class="doc">
        <aside v-if="menuVisible">
            <ul>
                <h2>Doc</h2>
                <li>快速开始</li>
                <li>安装</li>
            </ul>
            <h3>组件</h3>
            <ul>
                <router-link to="/doc/switchDoc"><li>Switch</li></router-link>
                <router-link to="/doc/buttonDoc"><li>Button</li></router-link>
            </ul>
        </aside>
        <main>
            <router-view></router-view>
        </main>
    </div>

</template>

<script lang="ts" scoped>
    import Topnav from '../components/Topnav.vue'
    import {inject, Ref} from "vue";

    export default {
        components: {Topnav},
        setup() {
            const menuVisible = inject<Ref<Boolean>>('menuVisible')
            return {menuVisible}
        }
    }
</script>
<style lang="scss" scoped>
    @import "../assets/defaultTheme.scss";

    .doc {
        display: flex;
        flex-grow: 1;
        height: calc(100% - 64px);

        aside {
            width: 260px;
            /*padding-left: 10px;*/
            /*padding-top: 10px;*/
            &.small{
                width: 70px;
            }
            height: 100%;
            overflow-y: auto;
            h2,h3,li{
                padding-left: 20px;
            }
            li{
                color: white;
                padding: 10px;
                &:hover,&:visited{
                    background-color: $color-primary;
                }
            }
        }


        main {
            flex-grow: 1;
            background-color: $color-black-bg;
            padding: 10px;
        }
        @media (max-width:500px) {
            aside{
                position: fixed;
                background-color: $color-bg;
            }
        }
    }
</style>