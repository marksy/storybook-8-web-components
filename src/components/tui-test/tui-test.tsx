import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
    tag: 'tui-test',
    styleUrl: 'tui-test.scss',
    shadow: true,
})
export class TuiTest {
    @Element() public hostEl: HTMLTuiTestElement;

    /***
     * Data Test ID for testing
     */
    @Prop() public dataTestid!: string;

    render() {
        return (
            <Host
                class={{
                    'tui-test': true,
                }}
                data-testid={this.dataTestid}
            >
                <slot></slot>
            </Host>
        );
    }
}
