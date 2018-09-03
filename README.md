# WFSS Components

Components to support the Watson Financial Services [Capital Design System](https://ibm.biz/capital-design-system).

Please see our [wiki](https://github.ibm.com/watson-finance/wfss-components/wiki) for important links and information about the WFSS development organization

## Libraries

### 🛠 Component Library

- [Storybook](https://pages.github.ibm.com/watson-finance/wfss-components/)
- [Repo](https://github.ibm.com/watson-finance/wfss-components/)

### 😬 Icon Library

- [Storybook](https://pages.github.ibm.com/watson-finance/wfss-icons/)
- [Repo](https://github.ibm.com/watson-finance/wfss-icons/#/)

## Setup

Configure your npmrc file be running this:

```sh
node scripts/setup-npmrc.js
```

And then add this dependency:

```sh
yarn add @fss/components
```

## General Styling

This repo provides a small set of SASS files that can be used for styling components.

```scss
@import "~@fss/components/styles/scss/carbon-components.scss";
@import "~@fss/components/styles/scss/styles.scss";
```

```js
import "@fss/components/styles/css/carbon-components.css";
import "@fss/components/styles/css/styles.css";
```

We use CSS styling for a few elements (grid, font sizing, base carbon styles) for the sake of a shared reference point with
other projects.

## Emotion Styling

We use the emotion library to provide dynamic styling combined with low configuration support. Using emotion allows anyone using
this library to only have the emotion dependency but not worry about webpack config or loader specifics. It also allows our
package to be relatively small and prevent including a lot of unused CSS.

Using emotion also allows developers to control scope like no other CSS framework.

Learn more [here](https://emotion.sh)

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
@import "~@fss/components/styles/scss/themes/regulatory-compliance.scss";
@import "~@fss/components/styles/scss/styles.scss";
```

However, we also use emotion theming to get dynamic theme colors (or other theme properties). To take advantage of many of our components,
you need to wrap your app with the Theme Provider:

```js
import { ThemeProvider, Theme } from '@fss/components/dist/support/theme';
import theme from '@fss/components/dist/support/themes/other-products';

...

<ThemeProvider theme={theme}>
    <App />
</ThemeProvider>
```

## Spacing

We use a standardized spacing scheme built (details in [src/layout/spacing](https://github.ibm.com/watson-finance/wfss-components/blob/master/src/layout/spacing.ts))

The suggestion is to use the `buildSpacingFromString` method to determine how much padding an element should have. This method works on a string
like "top md bottom md" which replaces the `md`s with the appropriate spacing size and applies that to the associated direction.

Please see the [test](https://github.ibm.com/watson-finance/wfss-components/blob/master/src/layout/spacing.test.ts) file for more detailed use cases.

## Grid

We provide some utility components that are built upon [css-gridish](https://github.com/IBM/css-gridish)

To use the included grid, you need to import some custom CSS:

```js
import "@fss/components/styles/css/cap-grid.css";
```

or, if you need to support legacy browsers (IE11 and below):

```js
import "@fss/components/styles/css/cap-grid-legacy.css";
```

### React Component Usage

```js
import { Grid, Col } from "@fss/components";
```

### Vertical Spacing

Grid (and Col) elements control their horizontal spacing because they are grid elements. Sometimes you do want to specify padding on the vertical axis.
Like spacing, we provide a prop on Grid/Col elements called `verticalPadding` which takes a string and translates that to standard padding.

Unlike the spacing function, this prop can only apply padding to top or bottom. Please see the [test](https://github.ibm.com/watson-finance/wfss-components/blob/master/src/layout/grid.test.ts) file for more detailed use cases.

### Importing library

You can import the generated bundle to use the whole library:

```javascript
import { Grid } from "@fss/components";
```

### NPM scripts

- `npm t`: Run test suite
- `npm start`: Run `npm run build` in watch mode
- `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
- `npm run test:prod`: Run linting and generate coverage
- `npm run build`: Generate bundles and typings, create docs
- `npm run lint`: Lints code
- `npm run commit`: Commit using conventional commit style ([husky](https://github.com/typicode/husky) will tell you to use it if you haven't :wink:)

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

- Remove `commitmsg`, `postinstall` scripts from `package.json`. That will not use those git hooks to make sure you make a conventional commit

## Credits

Built based on this startkit: https://github.com/alexjoverm/typescript-library-starter.git
