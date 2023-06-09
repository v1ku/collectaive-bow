

module.exports = {
	presets: ['module:metro-react-native-babel-preset','babel-preset-expo'],
	plugins: [
		['@babel/plugin-proposal-decorators', { legacy: true }],
		'react-native-reanimated/plugin',
		'@babel/plugin-transform-named-capturing-groups-regex'
	],
	env: {
		production: {
			plugins: ['transform-remove-console']
		}
	}
};

