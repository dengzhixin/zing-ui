module.exports = {
    base:'/zing-ui/',
    title: 'Zing-UI',
    description: '一个好看的Vue2UI库',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/introduction' },
            { text: 'GitHub', link: 'https://github.com/dengzhixin/zing-ui/tree/vue2' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/guide/introduction',
                    '/guide/install',
                    '/guide/quickStart',
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/flexLayout',
                    '/components/container',
                    '/components/button',
                    '/components/textbox',
                    '/components/switch',
                    '/components/icon',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/toast',
                    '/components/popover',

                ]
            },
        ]
    }
}
