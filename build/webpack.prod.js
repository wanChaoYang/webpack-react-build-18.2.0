const { merge } = require("webpack-merge");
const base = require("./webpack.base")
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports=merge({
    mode: "production",
    devtool: "inline-source-map",
    plugins:[
       new CleanWebpackPlugin(),
       new BundleAnalyzerPlugin()
    ]
},base)