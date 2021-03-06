module.exports = {
    base:'/zing-ui/',
    title: 'Zing-UI',
    description: '一个好看的Vue2UI库',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/introduction' },
            { text: 'GitHub', link: 'https://github.com/dengzhixin/zing-ui/tree/vue2' },
            { text: 'Gitee', link: 'https://gitee.com/dengzhixin/zing-ui' },
        ],
        sidebar: [
            {
                title: '入门',
                collapsable:false,
                children: [
                    '/guide/introduction',
                    '/guide/quickStart',
                ]
            },
            {
                title: '组件',
                collapsable:false,

                children: [
                    '/components/flexLayout',
                    '/components/container',
                    '/components/button',
                    '/components/textbox',
                    '/components/switch',
                    '/components/tabs',
                    '/components/collapse',
                    '/components/toast',
                    '/components/popover',
                    '/components/icon',


                ]
            },
        ]
    }
}
