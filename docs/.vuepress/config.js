module.exports = {
    base: '/SimpleUI/',
    title: 'Simple UI',
    description: 'Just playing around',
    postcss: {
        plugins: [
            // require('postcss-preset-env')({/*plugin options*/ })
            require('autoprefixer'),
        ],
    },
    themeConfig: {
        repo: 'oSIBERIAo/SimpleUI',
        sidebarDepth: 2,
        sidebar: [
            {
                title: '入门',
                collapsable: false,
                children: ['/install/', '/get-started/'],
            },
            {
                title: '组件',
                collapsable: false,
                children: [
                    '/component/gird.md',
                    '/component/layout.md',
                    '/component/button.md',
                    '/component/toast.md',
                    '/component/popover.md',
                    '/component/collapse.md',
                    '/component/slides.md',
                    '/component/cascader.md',
                    '/component/tab.md',
                    // '/component/demo.md',
                    // '/component/gird2.md',
                ],
            },
        ],
    },
    markdown: {
        lineNumbers: true,
    },
    palette: './styles/palette.styl',
}
