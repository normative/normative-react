# normative-react



# Usage

The following commands are available:

```
# install node packages
npm install

# run the development server
npm run dev

# compile the production build
npm run build

# start the production server
npm start

# run the linter for .js, .jsx and .scss
npm run lint

# run mocha tests
npm run test

# run the functional test suite
npm run sinit && npm run ftest
```

# Documentation

## Javascript

* All React classes should be named with upper camel case naming convention (ReactComponent).
* All other files should use the lower camel case naming convention (reactComponent).
* All files in the `/src/client/containers` folder should end with Container.

## Sass

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
