# normative-react



# Usage

The following commands are available:

```
# install node packages
npm install

# start the development server
npm start
npm run start

# run the linter for .js and .jsx
npm run lint

npm run test
npm run ftest
npm run sinit
```

# Documentation

## Javascript

* All React classes should be named with upper camel case naming convention (ReactComponent).
* All other files should use the lower camel case naming convention (reactComponent).
* All files in the `/src/client/containers` folder should end with Container.

## Sass

http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/

```
# single name variables
.block
.block__element
.block--modifier

# multiple name variables
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
