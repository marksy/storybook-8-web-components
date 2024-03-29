/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TuiTest {
        /**
          * * Data Test ID for testing
         */
        "dataTestid": string;
    }
}
declare global {
    interface HTMLTuiTestElement extends Components.TuiTest, HTMLStencilElement {
    }
    var HTMLTuiTestElement: {
        prototype: HTMLTuiTestElement;
        new (): HTMLTuiTestElement;
    };
    interface HTMLElementTagNameMap {
        "tui-test": HTMLTuiTestElement;
    }
}
declare namespace LocalJSX {
    interface TuiTest {
        /**
          * * Data Test ID for testing
         */
        "dataTestid": string;
    }
    interface IntrinsicElements {
        "tui-test": TuiTest;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "tui-test": LocalJSX.TuiTest & JSXBase.HTMLAttributes<HTMLTuiTestElement>;
        }
    }
}
