const common = require('./webpack.common.js')
const { merge } = require("webpack-merge")
const path = require("path");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: false,
    },
    devtool: "source-map",
    devServer: {
        proxy: {
            "/api/*":{
                target:"http://localhost:8080/",
                secure:"false"
            }
        }
    }
})