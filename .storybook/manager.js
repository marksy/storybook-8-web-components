import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
    theme: create({
        base: 'light',

        // Typography
        fontBase: `Lato, -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif`,
        fontCode: "Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",

        brandTitle: 'Test',
        brandUrl: '/',
    }),
});
