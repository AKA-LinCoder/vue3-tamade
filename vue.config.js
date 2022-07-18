// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })
const path = require('path')

module.exports = {
  //npm run build 后生成的文件
  outputDir: 'build',
  //解决跨域问题
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  // publicPath: './',
  //配置方式2，和webpack属性完全一致，最后会进行合并
  configureWebpack: {
    resolve: {
      alias: {
        views: '@/views'
      }
    }
  }
  //通过configureWebpack修改webpack的配置
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  //配置方式3
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, 'src'))
  //     .set('views', '@/views')
  // }
}
