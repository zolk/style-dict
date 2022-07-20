# Style Dictionary Experimental Repo

This project uses
[Style Dictionary](https://amzn.github.io/style-dictionary/#/)
to parse design tokens.

## Implementation

### Organization Philosophy

Tokens are organized using the
[Category / Type / Item](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure)
method. I have not tested this structure in production, but wanted to
see how such a structure would be created in practice. The idea
behind this structure is to organize tokens in a predictable fashion based on:

- Category. What is the token's value? (size, color, font-family, etc)
- Type. How are we using this token? (text, background, border, etc)
- Item. What are we styling? (button, input, table, etc)

Names may further include a sub-item (such as primary, secondary, tertiary, etc)
and a state (such as base, active, hover, disabled, etc)

Let's say we want to get the background color of a secondary button's hover state:

```css
.button--secondary:hover {
  background-color: var(--color-background-button-secondary-hover);
}
```

### Pixel to REM Conversion

All size-related tokens are specified in pixels, however these will
be automatically converted to rem upon build.

### Output Formats

Tokens are output as CSS custom properties, SCSS variables, and JS variables.

## Installation & Building

Install this project with:

```shell
npm install
```

Build the token files with:

```shell
npm run build
```
