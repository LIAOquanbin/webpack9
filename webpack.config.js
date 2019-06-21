var path=require("path");
var htmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
    entry:{
        app:'./app/app.js'
    },
    output:{
        path:path.resolve(__dirname+'/public')
    },
    plugins:[
        new htmlWebpackPlugin({
            // 处理默认样式
            template:'./index.html',

            // inject:false 不要入口脚本 几乎用不上 
            // inject:true 表示将入口脚本插入body结束标签之前 默认为true
            // inject :head, 表示将入口脚本插入到head结束标签之前
            // inject:body 表示将入口脚本插入到body结束标签之前
            inject:"head",
            // 输出文件名称
            filename:'pro.html',

            // 压缩html
            minify:{
                // 移除html模板注释
                removeComments:true,

                // 移除属性 单双引号
                removeAttributeQuotes:true,

                // 移除空白字符
                collapseWhitespace:true
            }
        })
    ]
}