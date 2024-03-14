import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { inlineSvg } from 'stencil-inline-svg';
import { sass } from '@stencil/sass';

const { distDirs } = require('./package.json');

export const config: Config = {
    namespace: 'tui',
    buildEs5: 'prod',
    taskQueue: 'async',
    globalStyle: 'src/global.css',
    devServer: {
        reloadStrategy: 'hmr',
        openBrowser: false,
    },
    plugins: [inlineSvg(), sass()],
    outputTargets: [
        {
            type: 'dist-hydrate-script',
        },
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        // one file in es6
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
            footer: '',
        },
        // create components(.d.ts|json) into dist
        {
            type: 'docs-json',
            file: `${distDirs.stencil}/components.json`,
        },
        reactOutputTarget({
            componentCorePackage: '../types',
            proxiesFile: `${distDirs.stencil}/react/index.ts`,
        }),
    ],
    testing: {
        // args passed to chromium when puppeteer launches a browser instance
        browserArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
        testPathIgnorePatterns: ['./.scripts', 'dist', './dist-storybook', './dist', 'node_modules'],
        moduleNameMapper: {
            // Jest can't deal with ES6 modules, so tell it to use `lodash` instead of `lodash-es` during tests
            '^lodash-es$': 'lodash',
        },
        // // If we want to have a minimum threshold of test coverage, we can use this config:
        // coverageThreshold: {
        //     './src/components/*/*.tsx': {
        //         branches: 80,
        //         functions: 80,
        //         lines: 80,
        //         statements: 80,
        //     },
        // },
    },
};
