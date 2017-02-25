module.exports = {
	entry: "./app/index.js",

	output: {
		filename: "bundle.js",
	},

	module: {
		loaders: [{
			test: /\.jsx?$/,
			include: /app/,
			loader: "babel-loader",
			query: {
				presets: ["react", "es2015"],
				plugins: ["transform-object-rest-spread"]
			}
		}]
	},

	devtool: "eval-source-map"
};
