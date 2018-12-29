module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    // chainWebpack: config => {
    //     config.module
    //         .loader('sass-loader')
    //         .end()
    // },
    postcss: {
        plugins: [
            // require('postcss-preset-env')({/*plugin options*/ })
            require('autoprefixer')
        ],
    },
    themeConfig: {
        // nav: [
        //     // {
        //     //     text: 'Languages',
        //     //     items: [
        //     //         { text: 'Chinese', link: '/language/chinese/' },
        //     //         { text: 'Japanese', link: '/language/japanese/' }
        //     //     ]
        //     // },
        //     { text: 'Guide', link: '/guide/' },
        //     { text: 'External', link: 'https://google.com' },
        // ],
        // sidebar: [
        //     '/install/',
        //     '/get-started/',
        //     '/component/',
        //     // '/page-a',
        //     // ['/page-b', 'Explicit link text']
        // ],
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
        
    }
}