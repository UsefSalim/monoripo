import { defineConfig } from 'vite';
import path, { extname, relative, resolve } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import tsConfigPaths from 'vite-tsconfig-paths';
import autoprefixer from 'autoprefixer';
import terser from '@rollup/plugin-terser';
import checker from 'vite-plugin-checker';
import * as packageJson from './package.json';
import fs from 'fs';

const componentEntries = (path: string) => {
    return fs
        .readdirSync(resolve(__dirname, path))
        .filter((name) => fs.lstatSync(resolve(__dirname, path, name)).isDirectory())
        .reduce((entries, name) => {
            entries[name] = resolve(__dirname, `${path}/${name}.tsx`);
            return entries;
        }, {});
};

const entrys = {
    main: resolve(__dirname, 'src/components/main.ts'),
    actions: resolve(__dirname, 'src/components/actions/index.ts'),
    animations: resolve(__dirname, 'src/components/animations/index.ts'),
    config: resolve(__dirname, 'src/components/config/index.ts'),
    contentDisplay: resolve(__dirname, 'src/components/contentDisplay/index.ts'),
    containers: resolve(__dirname, 'src/components/containers/index.ts'),
    dataEntry: resolve(__dirname, 'src/components/dataEntry/index.ts'),
    feedbacks: resolve(__dirname, 'src/components/feedbacks/index.ts'),
    grid: resolve(__dirname, 'src/components/grid/index.ts'),
    navigation: resolve(__dirname, 'src/components/navigation/index.ts'),
    typography: resolve(__dirname, 'src/components/typography/typography/typography.tsx'),
    ...componentEntries('src/components/actions'),
    ...componentEntries('src/components/animations'),
    ...componentEntries('src/components/contentDisplay'),
    ...componentEntries('src/components/containers'),
    ...componentEntries('src/components/dataEntry'),
    ...componentEntries('src/components/exemple'),
    ...componentEntries('src/components/feedbacks'),
    ...componentEntries('src/components/grid'),
    ...componentEntries('src/components/navigation'),
};

const alias = [
    {
        find: '@/',
        replacement: path.resolve(__dirname, 'src'),
    },
    {
        find: '@/actions',
        replacement: path.resolve(__dirname, 'src/components/actions'),
    },
    {
        find: '@/animations',
        replacement: path.resolve(__dirname, 'src/components/animations'),
    },
    {
        find: '@/containers',
        replacement: path.resolve(__dirname, 'src/components/containers'),
    },
    {
        find: '@/contentDisplay',
        replacement: path.resolve(__dirname, 'src/components/contentDisplay'),
    },
    {
        find: '@/dataEntry',
        replacement: path.resolve(__dirname, 'src/components/dataEntry'),
    },
    {
        find: '@/exemple',
        replacement: path.resolve(__dirname, 'src/components/exemple'),
    },
    {
        find: '@/feedbacks',
        replacement: path.resolve(__dirname, 'src/components/feedbacks'),
    },
    {
        find: '@/grid',
        replacement: path.resolve(__dirname, 'src/components/grid'),
    },
    {
        find: '@/navigation',
        replacement: path.resolve(__dirname, 'src/components/navigation'),
    },
    {
        find: '@/typography',
        replacement: path.resolve(__dirname, 'src/components/typography/typography/typography.tsx'),
    },
];

export default defineConfig({
    resolve: {
        alias,
    },
    plugins: [
        react(),
        dts({
            include: ['src'],
        }),
        checker({
            typescript: true,
        }),
        tsConfigPaths(),
        libInjectCss(),
    ],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        lib: {
            entry: entrys,
            name: 'ui',
            formats: ['es'],
            fileName: (_, entryName) => `${entryName}.js`,
        },
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
        rollupOptions: {
            external: [...Object.keys(packageJson.peerDependencies), 'react/jsx-runtime'],
            input: Object.fromEntries(
                glob
                    .sync('src/components/**/*.{ts,tsx}', {
                        ignore: ['src/**/*.d.ts', 'src/**/*.stories.tsx', 'src/types.ts', 'src/index.tsx'],
                    })
                    .map((file) => [
                        relative('src/components', file.slice(0, file.length - extname(file).length)),
                        fileURLToPath(new URL(file, import.meta.url)),
                    ]),
            ),
            plugins: [terser()],
            output: {
                assetFileNames: 'assets/[name][extname]',
                entryFileNames: '[name].js',
            },
        },
    },
    css: {
        postcss: {
            plugins: [autoprefixer()],
        },
    },
});
