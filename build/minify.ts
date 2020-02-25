import { readdir, stat, readFile, writeFile, exists, mkdir } from 'fs';
import { promisify } from 'util';
import path from 'path';
import { minify } from 'html-minifier';
import rimraf from 'rimraf';

rimraf.sync('dist');

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

async function main() {
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

  const readFileAsync = promisify(readFile);
  const writeFileAsync = promisify(writeFile);
  const existsAsync = promisify(exists);
  const mkdirAsync = promisify(mkdir);
  const dist = path.join(cwd, 'public/dist');

  const files = await recursiveDirRead(path.join(cwd, 'public'));
  const distExists = await existsAsync(dist);
  if (!distExists) {
    await mkdirAsync(dist);
  }

  for (const file of files.slice(0, 2)) {
    const fileContents = await readFileAsync(file, 'utf-8');
    const minifiedContents = minify(fileContents, minifierOptions);
    console.log(dist);
    console.log(minifiedContents);
    console.log(writeFileAsync);
  }

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
