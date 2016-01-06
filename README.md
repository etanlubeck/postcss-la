# postcss-la
A little talk about postCSS

## What is it?
 - PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.
 postcss is not a postprocessor. The idea behind is that CSS should be able to be written without a user having to learn some meta language and it's syntax (SASS, LESS).
 We should be future proofing.

postcss is an ecosystem of plugins that transforms CSS.

## What does that even mean?
 - postcss itself creates an AST of the file(s) passed to it, if NO plugins or processors are passed as an argument then the file remains unchanged.

Example:


if you use autoprefixer, you're using postcss.


## Configuration Types
 - Vanilla ```npm run postcss```
 - Webpack ```npm run webpack```
 - Browserify ```npm run browserify```
 - Gulp ```npm run gulp```

 
