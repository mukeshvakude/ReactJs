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
        
       hotel :  "/src/index.js"
      
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
    //Below code  is used to reduce the file size 
      optimization: {
        splitChunks: {
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/, ///< put all used node_modules modules in this chunk
              name: "nodeMudulesChunk", ///< name of bundle
              chunks: "all" ///< type of code to put in this bundle
            }
          }
        }
      },
      performance: {
        hints: false,
        maxEntrypointSize: 1024000,
        maxAssetSize: 1024000
    }
}