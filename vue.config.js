module.exports = {
    devServer: {
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:8010',// 要跨域的域名
                changeOrigin: true, // 是否开启跨域
                pathRewrite: {
                    '^/api': '/api' // 在请求的时候 凡是/api开头的地址都可以跨域
                }
            },
        }
    }
};