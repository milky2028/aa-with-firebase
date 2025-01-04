import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-css-only';
import ts from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';

export default {
	input: './src/lib/index.ts',
	output: {
		format: 'esm',
		file: 'components/components.js'
	},
	plugins: [resolve({ browser: true }), ts(), svelte(), css({ output: 'components.css' })]
};
