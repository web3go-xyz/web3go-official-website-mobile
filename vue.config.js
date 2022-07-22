const { options } = require('less')
    // 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 16
})
module.exports = {
    lintOnSave: false,
    configureWebpack: {
        devtool: 'source-map',
        // module: {
        //     rules: [{
        //         test: /\.js$/,
        //         loader: require.resolve('@open-wc/webpack-import-meta-loader'),
        //     }, {
        //         test: /\.js$/,
        //         loader: require.resolve('babel-loader'),
        //     }, ],

        // },
        plugins: [
            require('unplugin-element-plus/webpack')({
                // options
            }),
        ],
    },
    // configureWebpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.js$/,
    //         use: [{
    //             loader: require.resolve('@open-wc/webpack-import-meta-loader'),
    //         }]
    //     });
    //     config.module.rules.push({
    //         test: /\.js$/,
    //         use: [{
    //             loader: require.resolve('babel-loader'),
    //         }]
    //     });
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            },
            less: {
                modifyVars: {
                    'arcoblue-6': '#4318FF',
                },
                javascriptEnabled: true,
            },
        }
    },
    // chainWebpack: config => {
    //     const imagesRule = config.module.rule('less')
    //     imagesRule
    //         .use('less-loader')
    //         .tap(options => {
    //             options.lessOptions = {
    //                 modifyVars: {
    //                     'arcoblue-6': 'red',
    //                 },
    //                 javascriptEnabled: true,
    //             }
    //             return options;
    //         })

    // }
}