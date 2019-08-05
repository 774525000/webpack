const merge = require('webpack-merge')
const common = require('./webpack.config')


module.exports = merge(common, {
	devtool: 'inline-source-map',
	devServer: {
		contentBase: '../dist'
	}
})