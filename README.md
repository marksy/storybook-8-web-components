# Example of Storybook 8 not displaying code snipped (via "Show code" button) in the MDX docs.

This instance of Storybook uses the Web Component flavour and uses StencilJS to generate web components.

## Problem

Storybook 8 is no longer displaying the code snippet (via "Show code" button) on the MDX docs.

## Reproduction

1. clone this repo
2. install dependencies
3. run `yarn start` to start
4. navigate to Components>TuiTest>Docs
5. click "Show code" in the story preview

### Observe

-   no code snippet shows

### Expect

-   code snippet to show as per usual

## autodocs works and shows the code snippet

I've included a nested story (`Components>TuiTest>Nested`) to show that the autodocs code snippet works as per usual. (IDK if it's using MDX behind the scenes though).
