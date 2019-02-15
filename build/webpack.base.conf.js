'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

/*
vueLoaderConfig 内容如下

{ loaders:{
  css: [ [Object], [Object], [Object] ],
  postcss: [ [Object], [Object], [Object] ],
  less: [ [Object], [Object], [Object], [Object] ],
  sass: [ [Object], [Object], [Object], [Object] ],
  scss: [ [Object], [Object], [Object], [Object] ],
  stylus: [ [Object], [Object], [Object], [Object] ],
  styl: [ [Object], [Object], [Object], [Object] ] },
  cssSourceMap: true,
  cacheBusting: true,
  transformToRequire:{
    video: [ 'src', 'poster' ],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}

*/



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    // 配置打包后生成的文件夹位置以及名字
    path: config.build.assetsRoot,
    // 入口js文件，打包后输入的文件名   [name]对应entry对象的键
    filename: '[name].js',
    // 打包后访问页面时的公共路径   参考：https://www.webpackjs.com/configuration/output/#output-publicpath
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  /*
  * 模块路径解析
  * extensions 表示告诉解析器，解析的路径能够接受哪些扩展名
  * alias   指定某些路径的简写    @/components/HelloWorld  相等于  按照相对路径或绝对路径定位HelloWorld文件路径
  * */
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [

      //解析所有.vue结尾的文件
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },

      //解析指定目录，/src,/test,/node_modules/webpack-dev-server/client文件夹下的js文件
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },

      //解析所有图片链接 eg: /static/img/1.jpg
      //根目录下的所有img链接都将被解析，不再局限于src目录。
      //所以 static目录下的图片也会被解析，再加上最终插件CopyWebpackPlugin会把static目录下的所有文件拷贝复制到打包生成的dist目录下一份。
      //所以，static目录下的图片资源首先会被解析放入dist/static/img下，其次同样的图片也会原封不动的放入打包后的dist目录下一份。
      //这样就使得static下同一个图片资源，在dist下有两份。（一份解析重命名后的图片，一份复制过来的图片）
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          //限制所要解析的文件的大小，操过则图片链接不会被解析为Data Url,即base64编码的字符串形式
          //在Data URL协议中，图片被转换成base64编码的字符串形式，并存储在URL中
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      //存放多媒体资源
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      //存放字体资源
      //存放font资源到assets目录下，随后在font中定义一个css,引入字体。随后在App.vue的style中引入即可
      //eg：在App.vue中引入  @import "./assets/font/styleFont.css";
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      //自定义的less解析
      {
        test:/\.less$/,
        loader:'style-loader!css-loader!less-loader'
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
