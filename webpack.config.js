var webpack = require('webpack');
var path = require("path")

module.exports = {
	entry:[
		// hot loader
		"webpack-dev-server/client?http://localhost:8080",
		"webpack/hot/only-dev-server",
		// app入口
		"./src/client/index.js"
	],
	module:{
		loaders:[{
			test:/\.jsx?$/,
			include: path.join(__dirname,"src"),
			loaders: ["react-hot-loader","babel-loader"],
		}]
	},
	resolve:{
		extensions:[".js",".jsx"]
	},
	output:{
		path: __dirname + "/public/build",
		filename:"boundle.js",
		publicPath:"http://localhost:8080/build",
	},
	devServer: {
		contentBase: "./public",
		hot: true,
		host:"localhost",
		proxy:{
			"*": "http://localhost:"+3000
		}
	},
	plugins:[
		new webpack.HotModuleReplacementPlugin()
	]
}
