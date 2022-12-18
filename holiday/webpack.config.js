const path = require('path');
const port = process.env.port || 3000;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    // externals: {
    //     'react': 'React'
    // },
    entry: "/src/index.js",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "main.js"
    },

    module: {

        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            // Second Rule
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localsConvention: 'camelCase',
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    },
    plugins: [

        new HtmlWebPackPlugin({


            template: './public/index.html',
            filename: './index.html',
           
        }),

        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new CleanWebpackPlugin(),
    ],

    // performance: {
    //     hints: false,
    //     maxEntrypointSize: 512000,
    //     maxAssetSize: 512000
    // },
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        static: __dirname,
      }

}