# Markup

p2p-factory pages markups.

## Installation

1. Use node 16.15.X.
2. Execute `npm install`.
3. Execute `npm run prepare`.
4. Execute `npm run gulp:build` and `npm run webpack:build` just in case.
5. To start working, run `npm run gulp:watch`. That should open a new tab in your browser that will be automatically
   refreshed once a template or an SCSS file is updated.
6. Execute `npm run format:fix` before committing and `npm test` to ensure you are ready.

## How to build SCSS?

That should automatically happen if you ran `npm run gulp:watch` and update some SCSS files. You can also run the build
process manually using the `npm run gulp:build` command.

## Where should I add a new HTML page?

Use the `templates` folder to add a new page. The `templates/components` folder contains components you often use.
Initially, it contains header and footer files, preventing you from copying them from file to file.

We use [this library](https://www.npmjs.com/package/gulp-file-include) to inject components into the final HTML that
you can find in the `_dist` folder. It also supports variables.

Please, don't forget to commit all generated files since they are the final result we're gonna use, and they are tested
by CI.

**Never directly update files in the `dist` directory!**

## What if I want to add a font?

Please, download the font from [this service](https://gwfh.mranftl.com/fonts) and don't forget about
fallbacks both in the `@font-face` and `font-family`. Don't use any fonts except for the ones you see in Figma.

## How can I add some JS logic?

If you need something, you can use `main.js` or create a module and import it there and then run
`npm run webpack:build` which automatically runs eslint and builds a minified file that you are already included in the
footer.

## How to access generated templates?

Use the project directory structure!

E. g.: `http://localhost:3000/_dist/index.html` or `http://localhost:3000/_dist/404.html`.

## Working flow (if u use git)

Your regular flow could be described like this:

Let's say you want to work on the login screen. Your steps:

1. Create a branch from `main` with a meaningful name (e.g. `feature/main-screen`) and checkout to it.
2. Do some work
3. Run `npm test` to ensure you are ready to commit. Fix errors, if any.
4. Commit your changes with a meaningful message. Make a few commits if it makes sense in your situation.
5. Push your branch.
6. Open an MR from your branch (`feature/main-screen` in that example) to `main` and assign anybody as
   reviewers. Wait until one of us reviews your branch and fix comments if we leave any. We'll merge the branch when
   everything is green.
7. Create a new branch from the `main` and repeat these steps for the new page.
8. ???
9. PROFIT!!!
