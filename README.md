# normative-react



# Usage

The following commands are available:

```
# install node packages
yarn

# run the development server
yarn dev

# compile the production build
yarn build

# start the production server
yarn start

# run the linter for .js, .jsx and .scss
yarn lint

# run mocha tests
yarn test

# run the functional test suite
yarn sinit && yarn ftest
```

# Documentation

## Javascript

* All React classes should be named with upper camel case naming convention (ReactComponent).
* All other files should use the lower camel case naming convention (reactComponent).
* All files in the `/src/client/containers` folder should end with Container.

## Sass

### File Structure

* Due to use of both webpack (no cascading variables/functions) and foundation (separation of utilities and css output), there's a few tricky parts to the sass structure.

* `src/client/app/_global.scss` is a file containing only utilities and variables, **it should never output css**. `_global.scss` can be included in any component scss file to give access to foundation utilities/variables and other custom variables. Additional custom variables should be added here (ex: color map).

* `src/client/app/App.scss` is the global css. It first loads `_global.scss` and then loads `_foundation-components.scss` which outputs the css of desired foundation components (add/remove foundation components here). App.scss should only be called once (inside App.jsx). Additional global css should be added here (ex: setting body background color).

### Class Naming
http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

```
# single name blocks
.block
.block__element
.block--modifier

# multiple name blocks
.block-grid
.block-grid__element
.block-grid--modifier

# multiple name modifiers and elements
.block
.block__element-name
.block--modifier-name
```

### Rules

* All `.scss` files should match 1:1 with a component.
* Non-component `.scss` files should be placed within the `/src/client/app` folder.
