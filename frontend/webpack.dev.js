const common = require('./webpack.common.js')
const { merge } = require("webpack-merge")
const path = require("path");

const PORT = process.env.PORT || 3000;

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    devServer: {
        port: PORT,
        hot: "only",
        allowedHosts: "all",
        historyApiFallback: true,
        open: true,
        proxy: {
            "/api/*":{
                target:"http://localhost:8080/",
                secure:"false"
            }
        },
        static: {
            directory: path.resolve(__dirname, "public"),
            watch: true,
        },
        client: {
            overlay: {
                warnings: false,
                errors: true,
            },
        }
    }
})