# Another Bun/NPM Overhaul

You might remember a [story](./2026-01-28-bun.md) I wrote about upgrading from `npm` to `bun` for more features and stability. Well, 2 days ago, Bun version 1.4 was released. This was the "Rust rewrite" which got most of the attention in their promotional video. I don't really care about any of that stuff, but something caught my ear which made me do a double-take.

It was mentioned as an aside in the video that Bun now supports generating standalone HTML files. Which means that *everyting* is embedded into a single HTML file - including media and other assets that are encoded in base64. I immediately started looking into this, because this is really cool. It can compress your output and also reduce the artifacts needed to be deployed to your website.

This is particularly interesting for me, because my custom tools and games are hosted in another monorepo, much like my [NPM projects](./2024-12-07-npm-monorepo.md) and I had a complex workflow for building and deploying them.

1. Typecheck with `tsc`
1. Lint source code with `eslint`
1. Compile TypeScript into JavaScript with `bun` (in-place)
1. Delete `node_modules`, TypeScript source code, and any JSON or documentation files so they don't get deployed
1. Deploy the remaining files (e.g. `index.html`, `dist/main.js`, `assets/index.css`, `media/...`) from the project folder(s)

For reference, the `bun` command looked something like:

```sh
bun build --outfile=dist/main.js src/index.ts
```

But now with Bun v1.4, my plan was to simplify this and only deploy a single file per project.

1. Typecheck with `tsc`
1. Lint source code with `eslint`
1. Compile standalone HTML with `bun` (compile to output directory)
1. Deploy the output directory

The `bun` command might look a bit more complicated now, but it's basically creating a single output in a separate directory, and that entire directory will be deployed online.

```sh
bun build --compile --target=browser ./index.html --outfile="${outdir}/index.html"
```