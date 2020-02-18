import { minify } from 'html-minifier';

const minifierOptions = {
  collapseWhitespace: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeTagWhitespace: true,
  removeAttributeQuotes: true,
  collapseInlineTagWhitespace: true,
  removeEmptyAttributes: true,
  useShortDoctype: true,
  minifyCSS: true,
  minifyJS: true
};

const result = minify('<p>Pizza</p>', minifierOptions);

console.log(result);
