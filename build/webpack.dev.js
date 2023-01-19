const webpack=require("webpack");
const { merge } = require("webpack-merge");
const base = require("./webpack.base.js")
module.exports = merge({
    mode: "development",
    devServer: {
        port: 9090,
        hot: true,
        open: true,
    },
    devtool: "inline-source-map",
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
}, base)