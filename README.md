# Style Dictionary Experimental Repo

This project uses
[Style Dictionary](https://amzn.github.io/style-dictionary/#/)
to parse design tokens.

## Implementation

### Organization Philosophy

Tokens are organized using the
[Category / Type / Item](https://amzn.github.io/style-dictionary/#/tokens?id=design-token-structure)
method. I have not tested this structure in production, but wanted to
see how such a structure would be created in practice.

### Pixel to REM Conversion

All size-related tokens are specified in pixels, however these will
be automatically converted to rem upon build.

### Output Formats

Tokens are output as CSS custom properties and JS variables.

## Installation & Building

Install this project with:

```shell
npm install
```

Build the token files with:

```shell
npm run build
```
