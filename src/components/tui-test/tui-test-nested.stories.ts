import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { Components } from '../../components';

const meta: Meta = {
    title: 'Components/TuiTest/Nested',
    component: 'demo-button',
};

export default meta;
type Story = StoryObj<Components.TuiTest>;

export const Default: Story = {
    args: {
        dataTestid: 'nested-example',
    },
    render: ({ dataTestid }) => html`<tui-test data-testid="${dataTestid}">
        <span>some example slotted content</span>
    </tui-test>`,
};
