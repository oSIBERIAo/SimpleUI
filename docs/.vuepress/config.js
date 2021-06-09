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
        sidebar: [
            {
                title: '入门',
                collapsable: true,
                children: ['/install/', '/get-started/'],
            },
            {
                title: '组件',
                collapsable: true,
                children: [
                    '/component/button.md',
                    '/component/gird.md',
                    '/component/layout.md',
                    '/component/demo.md',
                    '/component/gird2.md',
                ],
            },
        ],
    },
    markdown: {
        lineNumbers: true,
    },
    palette: './styles/palette.styl',
}
