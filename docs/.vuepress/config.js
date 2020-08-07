module.exports = {
    title: 'Zing-UI',
    description: '一个好看的Vue2UI库',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            { text: '文档', link: '/guide/introduction' },
            { text: '建议', link: 'https://github.com/dengzhixin/zing-ui/tree/vue2' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/guide/introduction',
                    '/guide/install'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
            },
        ]
    }
}
