/**
 * Created by lpw on 2017/4/17.
 */
var webpack = require("webpack")
var Html = require("html-webpack-plugin")

module.exports={
    // __dirname是node.js里的一个全局变量，指的是我们项目的根目录
    entry:__dirname+"/app/main.js",//文件入口文件
    output:{
        path:__dirname+"/public",//打包后文件放置位置
        filename:"webpack.js"//打包后文件名
    },

    module:{
        loaders:[
            {
                test:/\.json$/,
                loaders:"json-loader"
            },
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader!postcss-loader"
            },

            {
                test:/\.js$/,
                loaders:"babel-loader",
                exclude:/(node_modules|bower_components)/,
                query: {
                    presets: ['react', 'es2015']
                }

            },
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react',"stage-1"]
                }
            }

        ]
    },
    plugins:[
        new webpack.BannerPlugin("圣诞节比赛的妇科病"),
        new Html({
            template:__dirname+"/app/index.html"
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: function(){
                    return [
                        require("autoprefixer")
                    ]
                }
            }
        })

    ],
    performance: {
        hints: false
    }

}