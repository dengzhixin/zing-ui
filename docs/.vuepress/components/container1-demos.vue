<template>
    <templateDemos title="常见页面布局
" :code="code">
        <h5>上下布局</h5>
        <Layout>
            <Header>Header</Header>
            <Main>Main</Main>
        </Layout>

        <h5>上中下布局</h5>
        <Layout>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Layout>

        <h5>左右布局</h5>
        <Layout>
            <Aside width="200px">Aside</Aside>
            <Main>Main</Main>
        </Layout>

        <h5>组合布局1</h5>
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Aside width="200px">Aside</Aside>
                <Main>Main</Main>
            </Layout>
        </Layout>
        <h5>组合布局2</h5>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Aside width="200px">Aside</Aside>
                <Layout>
                    <Main>Main</Main>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </Layout>
        <h5>组合布局3</h5>
        <Layout>
            <Aside width="200px">Aside</Aside>
            <Layout>
                <Header>Header</Header>
                <Main>Main</Main>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    </templateDemos>

</template>

<script>

    import templateDemos from './template-demos'
    import Layout from "../../../src/Layout";
    import Header from "../../../src/Header";
    import Main from "../../../src/Main";
    import Aside from "../../../src/Aside";
    import Footer from "../../../src/Footer";

    export default {
        name: 'button-simple-demos',
        components: {
            Layout,
            Header,
            Main: Main,
            Aside,
            Footer,
            templateDemos
        },
        data() {
            return {
                code: `
                <h5>上下布局</h5>
        <Layout>
            <Header>Header</Header>
            <Main>Main</Main>
        </Layout>

        <h5>上中下布局</h5>
        <Layout>
            <Header>Header</Header>
            <Main>Main</Main>
            <Footer>Footer</Footer>
        </Layout>

        <h5>左右布局</h5>
        <Layout>
            <Aside width="200px">Aside</Aside>
            <Main>Main</Main>
        </Layout>

        <h5>组合布局1</h5>
        <Layout>
            <Header>Header</Header>
            <Layout>
                <Aside width="200px">Aside</Aside>
                <Main>Main</Main>
            </Layout>
        </Layout>
        <h5>组合布局2</h5>

        <Layout>
            <Header>Header</Header>
            <Layout>
                <Aside width="200px">Aside</Aside>
                <Layout>
                    <Main>Main</Main>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        </Layout>
        <h5>组合布局3</h5>
        <Layout>
            <Aside width="200px">Aside</Aside>
            <Layout>
                <Header>Header</Header>
                <Main>Main</Main>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
<style lang="scss" scoped>
    .header, .footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .container {
        margin-bottom: 40px;
    }

    .container:nth-child(5) .aside,
    .container:nth-child(6) .aside {
        line-height: 260px;
    }

</style>
`
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header, .footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .container {
        margin-bottom: 40px;
    }

    .container:nth-child(5) .aside,
    .container:nth-child(6) .aside {
        line-height: 260px;
    }

</style>
