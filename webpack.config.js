const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line no-unused-vars
const webpack = require('webpack');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/assets/index.html`,
	filename: 'index.html',
	inject: 'body',
});

const extractSass = new ExtractTextPlugin({
	filename: '[name].[contenthash].css',
	disable: process.env.NODE_ENV === 'local',
});
const { version } = require('./package.json');

module.exports = {
	entry: {
		app: path.resolve('src/signIn.jsx'),
	},
	output: {
		publicPath: '/',
		path: path.resolve('dist'),
		filename: `[name].${version}.js`,
		pathinfo: process.env.NODE_ENV === 'local',
		sourceMapFilename: '[name].js.map',
		chunkFilename: '[name].bundle.js',
	},
	devtool: process.env.NODE_ENV !== 'local' ? 'cheap-module-source-map' : 'eval',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.jsx$/,
				include: /src/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
						},
						{
							loader: 'resolve-url-loader',
						},
						{
							loader: 'sass-loader?sourceMap',
						},
					],
					// use style-loader in development
					fallback: 'style-loader',
				}),
			},
			{
				test: /\.css$/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader',
						},
					],
					// use style-loader in development
					fallback: 'style-loader',
				}),
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg|otf)$/,
				loader: 'url-loader?limit=100000',
			},
		],
	},
	resolve: {
		modules: [
			path.resolve('src'),
			'node_modules',
		],
		extensions: ['.js', '.jsx', '.json'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		HTMLWebpackPluginConfig,
		extractSass,
	],
};
