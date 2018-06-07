# WFSS Components

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## Setup

Configure your npmrc file by following [these](https://github.ibm.com/watson-finance/wfss-icons) intructions.

```sh
yarn add @fss/components
```

## General Styling

This repo provides a small set of SASS files that can be used for styling components.

```scss
@import "~@fss/components/dist/scss/styles.scss";
```

### Some Classes

| Class             | Use                |
| ----------------- | ------------------ |
| cap--type-alpha   | header 1 type face |
| cap--type-beta    | header 2 type face |
| cap--type-gamma   | header 3 type face |
| cap--type-delta   | header 4 type face |
| cap--type-epsilon | header 5 type face |

See the styles.scss files for other useful styles. Note that we did not make this apply to all `h1` (`h2`, etc) elements intentionally, as it conflicts with carbon's styling.

## Theming

Our themes are based on carbon themes, so you can import your custom theme file prior to our styles file. We've provided some example theme files.

```scss
@import "~@fss/components/dist/scss/themes/regulatory-compliance.scss";
@import "~@fss/components/dist/scss/styles.scss";
```

## Grid

We provide some utility components that are built upon [css-gridish](https://github.com/IBM/css-gridish)

To use the included grid, you need to import some custom CSS:

```js
import "@fss/components/dist/css/cap-grid.css";
```

or, if you need to support legacy browsers (IE11 and below):

```js
import "@fss/components/dist/css/cap-grid-legacy.css";
```

### Importing library

You can import the generated bundle to use the whole library:

```javascript
import { Grid } from "@fss/components";
```

### NPM scripts

* `npm t`: Run test suite
* `npm start`: Run `npm run build` in watch mode
* `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
* `npm run test:prod`: Run linting and generate coverage
* `npm run build`: Generate bundles and typings, create docs
* `npm run lint`: Lints code
* `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

### Git Hooks

There is already set a `precommit` hook for formatting your code with Prettier :nail_care:

### FAQ

#### `Array.prototype.from`, `Promise`, `Map`... is undefined?

TypeScript or Babel only provides down-emits on syntactical features (`class`, `let`, `async/await`...), but not on functional features (`Array.prototype.find`, `Set`, `Promise`...), . For that, you need Polyfills, such as [`core-js`](https://github.com/zloirock/core-js) or [`babel-polyfill`](https://babeljs.io/docs/usage/polyfill/) (which extends `core-js`).

For a library, `core-js` plays very nicely, since you can import just the polyfills you need:

```javascript
import "core-js/fn/array/find"
import "core-js/fn/string/includes"
import "core-js/fn/promise"
...
```

#### What if I don't want git-hooks, automatic releases or semantic-release?

Then you may want to:

* Remove `commitmsg`, `postinstall` scripts from `package.json`. That will not use those git hooks to make sure you make a conventional commit

## Credits

Built based on this startkit: https://github.com/alexjoverm/typescript-library-starter.git
