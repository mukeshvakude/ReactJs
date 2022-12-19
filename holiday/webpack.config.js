const path = require('path');
const port = process.env.port || 3000;
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {

    // externals: {
    //     'react': 'React'
    // },
    entry: {
        
       main :  "/src/index.js",
       vendor : "/src/component/Counter.js"
    },
    resolve: {
        extensions: ['.js', '.css', '.scss','.jsx']
      },
    output: {
        path: path.join(__dirname, '/dist'),
        filename: "[name].js"
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
            minify :{
                removeComments : true,
                collapseWhitespace : true,
                removeAttributeQuotes :true,
                minifyJS:true,
                minifyCSS :true
            }
           
        }),

        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new CleanWebpackPlugin(),
    ],

    
    devServer: {
        host: 'localhost',
        port: port,
        historyApiFallback: true,
        open: true,
        static: __dirname,
      }

}