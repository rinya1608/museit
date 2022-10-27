const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const MIDI_EDITOR_URL = process.env.MIDI_EDITOR_URL || 'http://localhost:5000'

module.exports = {
    mode: "production",
    entry: "./src/index",
    output: {
        path: path.resolve(__dirname, 'build'),
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
                editor: 'editor@' + MIDI_EDITOR_URL + '/remoteEntry.js'
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