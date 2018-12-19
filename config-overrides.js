

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackMerge = require('webpack-merge');

module.exports = function override(config, env) {
	if (process.env.NODE_ENV === 'production') {
		return config
	}
	const customConfig = {
		plugins: [new BundleAnalyzerPlugin()]
	};
  return webpackMerge(config, customConfig);
}


// new webpack.DefinePlugin({
//         '__REACT_DEVTOOLS_GLOBAL_HOOK__': '({ isDisabled: true })'
//       })