module.exports = {
    base: '/SimpleUI/',
    title: 'Hello VuePress',
    description: 'Just playing around',
    postcss: {
        plugins: [
            // require('postcss-preset-env')({/*plugin options*/ })
            require('autoprefixer')
        ],
    },
    themeConfig: {
        sidebar: [
            {
                title: '入门',
                collapsable: true,
                children: [
                    '/install/',
                    '/get-started/',
                ]
            },
            {
                title: '组件',
                collapsable: true,
                children: [ 
                    '/component/button.md',
                ]
            }
        ]
        
    },
    markdown: {
        lineNumbers: true
    },
    palette: './styles/palette.styl',
}