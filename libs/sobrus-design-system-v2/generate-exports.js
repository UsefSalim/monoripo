// generate-exports.js
import fs from 'fs';
import path from 'path';

const basePath = path.resolve(process.cwd());
const packageJsonPath = path.join(basePath, 'package.json');
const srcPath = path.join(basePath, 'src/components');

const componentEntries = (basePath, directory) => {
    const entries = {};

    const files = fs.readdirSync(path.resolve(basePath, directory), { withFileTypes: true });

    files.forEach((file) => {
        const filePath = path.join(directory, file.name);
        const exportPath = `./dist/${filePath.replace(/\\/g, '/')}`;

        if (file.isDirectory()) {
            Object.assign(entries, componentEntries(basePath, filePath));
        } else if (file.isFile() && /\.(tsx|ts|js)$/.test(file.name)) {
            const exportKey = `./${filePath.replace(/\.(tsx|ts|js)$/, '')}`;
            if (exportKey.endsWith('.stories') || exportPath.endsWith('index.ts')) return;
            const splitData = exportKey.split('/');
            entries['./' + splitData[splitData.length - 1]] = `${exportPath.replace("src/", "").replace(".tsx", ".js")}`;
        }
    });

    return entries;
};

// Generate and update package.json
const exportsEntries = {
    '.': './dist/main.js',
    './actions': './dist/components/actions/index.js',
    './animations': './dist/components/animations/index.js',
    './config': './dist/components/config/index.js',
    './contentDisplay': './dist/components/contentDisplay/index.js',
    './containers': './dist/components/containers/index.js',
    './dataEntry': './dist/components/dataEntry/index.js',
    './feedbacks': './dist/components/feedbacks/index.js',
    './grid': './dist/components/grid/index.js',
    './navigation': './dist/components/navigation/index.js',
    './typography': './dist/components/typography/typography/typography.js',
    ...componentEntries(basePath, 'src/components/actions'),
    ...componentEntries(basePath, 'src/components/animations'),
    ...componentEntries(basePath, 'src/components/contentDisplay'),
    ...componentEntries(basePath, 'src/components/containers'),
    ...componentEntries(basePath, 'src/components/dataEntry'),
    ...componentEntries(basePath, 'src/components/exemple'),
    ...componentEntries(basePath, 'src/components/feedbacks'),
    ...componentEntries(basePath, 'src/components/grid'),
    ...componentEntries(basePath, 'src/components/navigation'),
};

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
packageJson.exports = exportsEntries;
fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

console.log('Exports generated successfully in package.json');
