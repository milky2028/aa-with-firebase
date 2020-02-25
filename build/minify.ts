// import { minify } from 'html-minifier';
import { readdir, stat } from 'fs';
import { promisify } from 'util';
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

async function main() {
  const cwd = process.cwd();
  const statAsync = promisify(stat);
  const readdirAsync = promisify(readdir);

  async function recursiveDirRead(dirPath: string): Promise<string[]> {
    const files = await readdirAsync(dirPath);
    const nestedFiles = await Promise.all(
      files.map(async (dirItem) => {
        const dStats = await statAsync(path.join(dirPath, dirItem));
        if (dStats.isFile()) {
          return path.join(dirPath, dirItem);
        } else {
          return recursiveDirRead(path.join(dirPath, dirItem));
        }
      })
    );

    return nestedFiles.flat(Infinity);
  }

  // const result = minify('<p>Pizza</p>', minifierOptions);
  const files = recursiveDirRead(path.join(cwd, 'public'));
  return files;
}

main()
  .then((res) => {
    console.log(res);
    process.exit(0);
  })
  .catch((e) => {
    process.exit(1);
    console.error(e);
  });
