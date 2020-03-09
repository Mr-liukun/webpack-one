const webpack = require("webpack"); //用于访问内置插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入插件

module.exports = {
  devtool: 'eval-source-map', //配置source map,方便调试

  // webpack4需要添加这个配置，development为开发环境，production为生产环境
  mode: "development",
  
  // 之前提到的唯一入口文件，__dirname是node.js中的一个全局变量，它指向当前执行脚本所在的目录
  entry:  __dirname + "/app/main.js", 

  //若不设置，主要输出文件，默认./dist/main.js,其他文件输出./dist文件夹中
  // output: {
  //     path: __dirname + "/public", // 打包后的文件存放的地方
  //     filename: "index.js" // 打包后输出文件的文件名
  // },

  //本地服务器
  devServer: {
    //contentBase: "./dist", // 本地服务器所加载的页面所在的目录,默认加载目录为./dist
    historyApiFallback: true, // 不跳转
    inline: true, // 实时刷新
    port : 9000
  },

  //Babel是一个广泛使用的转码器，它可以帮你实现以下操作：
  //它可以帮你将（ES6、ES7...）转换为现浏览器支持的ES5，这样你就不用考虑新标准是否被浏览器识别了。
  //让你能使用基于JavaScript进行了拓展的语言，比如React的JSX。
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
            loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules
            // 指定css的嘻哈类名格式
            // localIdentName: '[name]__[local]--[hash:base64:5]'
            }
          }
        ]
      }, 
      {
        test: /\.less$/,
        use:[
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader",
            options: {
              modules: true, // 指定启用css modules，这里使用less，必需指定，不指定，less不起作用
            }
          },
          {
            loader: "less-loader",
          },
          
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'), 
    new HtmlWebpackPlugin({
      template: './app/index.html' //模板文件
    })
  ],


}