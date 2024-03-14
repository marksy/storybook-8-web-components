const config = {
    framework: '@storybook/web-components-webpack5',
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-webpack5-compiler-swc'],
    staticDirs: ['../dist', './static'],
    docs: {
        autodocs: true,
    },
};

export default config;
