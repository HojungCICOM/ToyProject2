var path = require('path');
var fs = require('fs');

var appBasePath = './Scripts/'; 
var publicPath = '../bundle/'; 

var jsEntries = {}; // listing to compile


fs.readdirSync(appBasePath).forEach(function (name) {

 
    var indexFile = appBasePath + name + '/index.js'
    if (fs.existsSync(indexFile)) {
        jsEntries[name] = indexFile
    }
});

module.exports = {
    entry: jsEntries,
    output: {
        path: path.resolve(__dirname, './wwwroot/bundle/'),
        publicPath: publicPath,
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, appBasePath)
        }
    },
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            }
        ]
    },
    devtool: '#source-map', 
}
