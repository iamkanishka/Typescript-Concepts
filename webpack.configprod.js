var path = require('path');
var cleanPlugin = require('clean-webpack-plugin');
module.exports ={
    entry:'./src/app.ts',
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname, 'dist'),
        publicPath:'dist'
    },
    mode: 'production',
    devtool:'none',
    module:{
        rules:[{
          test:/\.ts$/,
          use:'ts-loader',
          exclude:/node_modules/
        }]
    },
    resolve:{
        extensions:['.ts','.js'],
    },
    plugins:[new cleanPlugin.CleanWebpackPlugin()]
}