const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "js/[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader" ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, // *业务代码里面可能会引入node_modules外部js，这些js不需要babel-loader编译，因此需要排除掉
        use: {
          loader: 'babel-loader', // *引入babel-loader
          options: {
            presets: [ '@babel/preset-env','@babel/preset-react' ],// *引入预设
            plugins: [
              [
                '@babel/plugin-transform-runtime' // *配置插件信息
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../public/index.html"),
      filename: "index.html",
      title: "测试"
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[hash:8].css"
    }),
    new FriendlyErrorsWebpackPlugin(),
    new OptimizeCssAssetsPlugin(),
    new HappyPack({
      id: "babal",
      loaders: [ 'babel-loader?cacheDirectory=true' ],
      threadPool: happyThreadPool, //共享进程池
      verbose: true//允许happypack输出日志
    }),
    new HappyPack({
      id: 'styles',
      loaders: [ 'style-loader', 'css-loader', 'less-loader' ],
      threadPool: happyThreadPool, //共享进程池
    })
  ],
}