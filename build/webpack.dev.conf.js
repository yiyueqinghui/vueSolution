'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  // 结合package.json中scripts中的dev配置，触发devServer
  //启动本地服务 参考链接https://webpack.docschina.org/configuration/dev-server
  devServer: {
    //当当使用内联模式(inline mode)时，会在开发工具(DevTools)的控制台(console)显示消息，例如：在重新加载之前，在一个错误之前，或者模块热替换(Hot Module Replacement)启用时。这可能显得很繁琐
    //可能的值有 none, error, warning 或者 info（默认值）
    clientLogLevel: 'warning',
    //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html
    historyApiFallback: {
      rewrites: [
        {
          from: /.*/,
          to: path.posix.join(config.dev.assetsPublicPath, 'index.html')
        },
      ],
    },
    //启用 webpack 的模块热替换特性
    hot: true,
    //contentBase告诉服务器从哪个目录中提供内容。只有在你想要提供静态文件时才需要。
    //devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    //域名
    host: HOST || config.dev.host,
    //端口
    port: PORT || config.dev.port,
    //启用 open 后，dev server 会打开浏览器。
    open: config.dev.autoOpenBrowser,
    //当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认false禁用,不显示错误。
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    //从哪里提供 bundle
    publicPath: config.dev.assetsPublicPath,
    //代理信息，参考https://webpack.docschina.org/configuration/dev-server
    proxy: config.dev.proxyTable,
    //启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。
    //这也意味着来自 webpack 的错误或警告在控制台不可见。
    //necessary for FriendlyErrorsPlugin
    quiet: true,
    //监控文件变更,从而自动变更浏览器页面
    //详细watchOptions配置参考 https://webpack.docschina.org/configuration/watch
    watchOptions: {
      poll: config.dev.poll,
    }
  },
  plugins: [
    //DefinePlugin 允许创建一个在编译时可以配置的全局常量。在代码中直接访问process.env即可访问到
    // 这可能会对开发模式prod和发布模式dev的构建允许不同的行为非常有用
    //开发和生产模式的区别定义
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    //模块热替换(HMR)
    new webpack.HotModuleReplacementPlugin(),
    //启用模块热替换(HMR)时，此插件将显示模块的相对路径。建议用于开发。
    // HMR shows correct file names in console on update.
    new webpack.NamedModulesPlugin(),
    //当编译出错时，不会跳过错误继续编译
    new webpack.NoEmitOnErrorsPlugin(),
    //参考链接  https://github.com/ampedandwired/html-webpack-plugin
    //该插件将为你生成一个 HTML5 文件， 其也会引入你打包生成后的js文件
    //如果你有任何CSS assets 在webpack的输出中（例如， 利用ExtractTextPlugin提取CSS）， 那么这些将被包含在HTML head中的<link>标签内。
    //一般情况下，你在.vue组件中写入的样式，会直接使用style标签写入index页面。
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      //当inject为true时，打包生成的所有js,都将注入到body元素的底部
      inject: true
    }),
    // 复制文件或文件夹到指定目录
    // 参考链接  https://webpack.docschina.org/plugins/copy-webpack-plugin/#src/components/Sidebar/Sidebar.jsx
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../static'),
        to: config.dev.assetsSubDirectory,
        ignore: ['.*']
      }
    ])
  ]
})

module.exports = new Promise((resolve, reject) => {
  //portfinder 搜索查询端口  参考链接 https://www.npmjs.com/package/portfinder
  //basePort 指定默认端口
  portfinder.basePort = process.env.PORT || config.dev.port
  //获取端口，如果已被占用,则重新创建一个新的端口。
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      //如果端口已被占用，则重新设定一个新端口
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port
      // add port to devServer config
      devWebpackConfig.devServer.port = port

      // Add FriendlyErrorsPlugin 报错提示插件
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))
      resolve(devWebpackConfig)
    }
  })
})
