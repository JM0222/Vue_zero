const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode:'development',
    devtool: 'eval', //  속도 빨라짐 개발환경에서
    resolve: {
        extensions:['.js', '.vue'], // 확장자처리 main.js에서 뒤에 확장자 지워도된다
    },
    entry:{
        app: path.join(__dirname, 'main.js'),

    },
    module:{
        rules:[{
            test: /\.vue$/, // 끝이 vue로 끝나면 vue-loader를사용
            loader: 'vue-loader',
        }],
    },
    plugins: [
        new VueLoaderPlugin(),
    ],
    output:{
        filename: 'app.js',
        path: path.join(__dirname, 'dist'), // 현재경로에서 dist 폴더를 찾아줌
    },
};