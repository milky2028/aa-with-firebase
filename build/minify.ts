// import { minify } from 'html-minifier';
import { readdirSync, statSync } from 'fs';
import path from 'path';

// const minifierOptions = {
//   collapseWhitespace: true,
//   removeComments: true,
//   removeOptionalTags: true,
//   removeRedundantAttributes: true,
//   removeScriptTypeAttributes: true,
//   removeTagWhitespace: true,
//   removeAttributeQuotes: true,
//   collapseInlineTagWhitespace: true,
//   removeEmptyAttributes: true,
//   useShortDoctype: true,
//   minifyCSS: true,
//   minifyJS: true
// };


const cwd = process.cwd();
function recursiveDirRead(dirPath: string): string[] {
  return readdirSync(dirPath).flatMap((dirItem) => {
    const dStats = statSync(path.join(dirPath, dirItem))
    if (dStats.isFile()) {
      return path.join(dirPath, dirItem);
    } else {
      return recursiveDirRead(path.join(dirPath, dirItem));
    }
  })
}

// const result = minify('<p>Pizza</p>', minifierOptions);
const files = recursiveDirRead(path.join(cwd, 'public'));
console.log(files);
