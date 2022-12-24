const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

const pkgTitle = "bRando";

module.exports = {
	entry: "./src/index.ts",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	output: {
		filename: `${pkgTitle}.js`,
		path: path.resolve(__dirname, "dist"),
		clean: true,
		globalObject: "this",
		library: {
			name: "bRando",
			type: "umd",
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: `${pkgTitle}.js - Demo`,
			template: "src/index.html",
		}),
		new CopyPlugin({
			patterns: [
				{ from: "src/style.css", to: "style.css" },
				{ from: "src/img", to: "img" },
			],
		}),
	],
	devServer: {
		static: path.join(__dirname, "dist"),
		compress: true,
		open: true,
		hot: true,
		port: 4000,
		historyApiFallback: true,
	},
};