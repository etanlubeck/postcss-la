# postcss-la
A little talk about postCSS

## What is it?
 - PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.

## What does that even mean?
postcss itself creates an AST of the file(s) passed to it, if no plugins or processors are passed as an argument then the file remains unchanged.

