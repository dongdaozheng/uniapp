module.exports = {
	root: true,
	parserOptions: {
		sourceType: 'module',
		parser: 'babel-eslint'
	},
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
	plugins: ['vue'],
	rules: {
		'no-debugger': 'error',
		'no-console': 'off',
		semi: ['error', 'always'],
		'vue/attributes-order': 'off'
	}
};
