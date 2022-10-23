const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index",
    devtool: "source-map",
    devServer: {
        port: 3000,
        hot: "only",
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
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {}
                }]
            }
        ]
    },
    resolve: {
        modules: ["src", "node_modules", "src/main", "src/common"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "home",
            filename: "remoteEntry.js",
            remotes: {
                editor: 'editor@http://localhost:5000/remoteEntry.js'
            },
            shared: {
                react: {
                    import: 'react',
                    shareKey: 'react',
                    shareScope: 'default',
                    singleton: true,
                },
                'react-dom': {
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
}