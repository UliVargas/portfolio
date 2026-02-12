// @ts-check
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import tsParser from '@typescript-eslint/parser';

export default [
	// TypeScript recommended rules
	...tseslint.configs.recommended,
	// Astro recommended rules
	...eslintPluginAstro.configs.recommended,
	{
		files: ['**/*.astro'],
		languageOptions: {
			parserOptions: {
				parser: tsParser,
				extraFileExtensions: ['.astro'],
				sourceType: 'module',
			},
		},
	},
	{
		rules: {
			// Personalizaciones de reglas
			'@typescript-eslint/no-unused-vars': [
				'warn',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^_',
				},
			],
			'@typescript-eslint/triple-slash-reference': 'off',
		},
	},
	{
		ignores: ['dist', 'node_modules', '.astro'],
	},
];
