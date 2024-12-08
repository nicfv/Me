---
date:
  created: 2024-12-07
categories:
  - Project
tags:
  - tech
---
# Working with an NPM Monorepo

It's no secret that I'm developing a series of [npm packages](https://www.npmjs.com/~nicfv). The primary reason I'm doing this is for code reuse. I want to build up more complex programs using as much of my own software as possible. Second, the packages I'm developing might also benefit other developers. Also, the secret third reason I'm doing this is just for fun. Although there have been times where I really questioned my secret third reason. One of those recent times was when I changed my development strategy from maintaining several independent repositories to maintaining just one [monorepo](https://github.com/nicfv/npm) containing all my packages.

<!-- more -->

## The Naive Approach

Originally, I did this a very naive way, by simply merging all the packages into one repository, but keeping each workspace separated from one another.

```
smath/
  package.json
  tsconfig.json
  src/
    index.ts
    ...
viridis/
  package.json
  tsconfig.json
  src/
    index.ts
    ...
README.md
LICENSE
```

That way, I needed to build, test, and update dependencies of each package individually.

```shell
cd smath
npm i
npm run build
npm test
```

Additionally, I could not have packages depend on another package's latest version. For example, let's say the latest published version of `smath` is `1.0.0` and I am developing `1.0.1`. I cannot have `viridis` depend on `smath@1.0.1` until it has been published. So I'd need to create 2 pull requests, the first one to publish `smath@1.0.1`, and the second to publish the next version of `viridis` that depends on `smath@1.0.1`. In general, this was much cleaner than developing several different repositories, although still felt very messy.

## NPM Workspaces

I recently learned about [NPM workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces). That way, I can create a base package which contains workspaces for each one of my packages. Additionally, I can consolidate scripts and common dependencies in the base package. Furthermore, [TypeDoc](https://typedoc.org/), my documentation generator, has recently had major updates that support workspaces very well.

```
packages/
  smath/
    package.json
    tsconfig.json
    src/
      index.ts
      ...
  viridis/
    package.json
    tsconfig.json
    src/
      index.ts
      ...
  tsconfig.json
README.md
LICENSE
package.json
```

```shell
npm i
npm run build --workspaces
npm test --workspaces
```

Now, automatically, packages will depend on each other via a `link`, if applicable. In my previous example, I could now develop `smath@1.0.1` at the same time as `viridis@latest` that depends on `smath@1.0.1`! This, however, was not without its own difficulties.

## Rising Issue

In my [naive approach](#the-naive-approach), I would build packages on demand via a custom `npm run build` script. This compiles the source TypeScript code into JavaScript, which could be run by `node` or in browser. I would only need to build the packages I was currently working on, leaving the rest as uncompiled TypeScript source code. This made perfect sense; even though all my packages were in a single repository, they were essentially totally separated into different workspaces. Their dependencies would be installed directly from the [NPM registry](https://www.npmjs.com/), instead of being linked.

It might be beginning to make sense why this method doesn't work for linked packages. Let's say I'm developing `viridis`, which has a linked dependency on `smath`, which is not compiled, since I'm not working on it. When I compile and run or test `viridis`, I get an error saying that my `smath` dependency is not found! So I came up with 5 possible solutions to this problem. Before I get to my [solution](#solution), which one do you think I used?

### Older-Dependency Solution

Dependencies are only linked when you have the correct package name *and version* in one of your workspaces. I could simply force `npm` to download the packages directly from the registry by depending on an older version of the package that's been published already. This way, `npm` doesn't "see" it in my workspaces when building the dependency tree.

This would actually be a downgrade than what I have before, because not only I lose all the benefits of the workspace environment, I would never be able to have any package depend on the latest version of another one of my packages. Also, I would only be able to develop and publish packages one-by-one if I want to cascade version updates to dependents.

> For example, this workflow would take 3 separate pull requests:
>
> Initial assumptions; currently published:
> * `t6@1.0.2` (with no dependencies)
> * `smath@1.0.1` (dependent on `t6@1.0.1`)
> * `viridis@1.0.0` (dependent on `smath@1.0.0`, which is dependent on `t6@1.0.0`)
>
> Package update procedure:
>
> 1. Update and publish `t6@1.0.3` (no dependencies)
> 1. Update and publish `smath@1.0.2` to use `t6@1.0.2` dependency
> 1. Update and publish `viridis@1.0.1` to use `smath@1.0.1` dependency
>
> Final assumptions; currently published:
> * `t6@1.0.3` (with no dependencies)
> * `smath@1.0.2` (dependent on `t6@1.0.2`)
> * `viridis@1.0.1` (dependent on `smath@1.0.1`, which is dependent on `t6@1.0.1`)
>
> Notice how the latest version of `viridis` has a dependency of `t6` that is 2 versions behind the latest!

### Not-The-Workspace-You're-Looking-For Solution

A minor improvement to the previous idea, I could trick `npm` into not "seeing" any of my packages by temporarily changing the version number by adding a `-local` label to it, for instance. E.g. `smath@1.0.1-local`. The label would be removed on the publish workflow.

The reason why this is slightly better, is that I *could* have packages depend on the latest version of other packages, since `npm` would be downloading them from the registry. I would still face the issue of having to develop and update packages one-by-one in a cascade fashion. So, I would still need to perform the previous example in 3 separate pull requests, *but* at least it would solve the older dependency issue.

This method would introduce more complexity in the workflow. It would be more difficult to maintain and increase the barrier to entry for other developers.

### Preinstall Solution

One of my solutions was to simply just make sure that packages are compiled before installing them as dependencies. Luckily, `npm` supports a script that runs before any installation of the package. I tried something like this.

```json
{
  "scripts": {
    "preinstall": "tsc"
  }
}
```

Unfortunately `viridis` depends on `smath` which in turn depends on `t6`. These dependencies may also have other dependencies of their own and `tsc` cannot run until *their* dependencies have been installed. Therefore I tried to make sure those were installed before compile time.

```json
{
  "scripts": {
    "preinstall": "npm i && tsc"
  }
}
```

If you look closely, you'll notice something very wrong with this script. `preinstall` calls `install`, which calls `preinstall` first. I've created an endless loop, which crashed my computer.

### Megapackage Solution

Another idea I had was to ditch the idea of publishing several different packages, in favor of one giant, single package. I wouldn't need workspaces at all (there would be no point to that anymore) and would drastically simplify my workflow.

This would miss the point, though. I wanted to publish small-scale packages that build off of each other, so I could install only the ones I needed for my personal projects. With this method, I would only need one dependency for my projects, but it would be a massive dependency with all my code, and way more functionality and complexity than I would need in most cases.

### We-Must-Go-Back Solution

Workspaces seemed like an extremely elegant solution to begin with, but were causing me a headache. I had a slow, but functioning workflow while using isolated workspaces, so I could just revert to that.

## Solution

It was sort of a trick question! The solution turned out to be so simple, but included some of my own updates. I changed my workflow to incorporate a build order, then install dependencies and build each one in sequence. So, if you guessed the [Preinstall Solution](#preinstall-solution), you'd be right! The build order is rather easy to achieve in the base `package.json` file.

```json
{
  "scripts": {
    "build": "npm i && npm run build --workspaces",
    "clean": "# clean up my workspaces"
  },
  "workspaces": [
    "packages/t6",
    "packages/smath",
    "packages/*"
  ],
  ...
}
```

This way, any build scripts run to completion first in my `packages/t6` directory, then `packages/smath`, and then all the others, in alphabetical order. I didn't actually end up needing to add a `preinstall` script based on the way this works. Let's step through it.

1. For package `t6`
    1. Install dependencies (for which there are none, so this step is skipped)
    1. Compile the source code (this works perfectly fine, because of no dependencies)
    1. Check to make sure the changelog is up-to-date, and run tests and examples
1. For package `smath`
    1. Install dependencies (automatically runs an `npm link` to `t6`)
    1. Compile the source code (this works perfectly fine, because `t6` has already been compiled)
    1. Check to make sure the changelog is up-to-date, and run tests and examples
1. For package `viridis`
    1. You get the idea!

I was really surprised that `npm` didn't alter the build order based on the dependency tree automatically, but specifying it manually turned out to be a very simple fix. The main drawback of this method is that I *have* to run the `npm run build` script from the base directory to build all the packages before I start developing any single one. But after that, I can run my build scripts directly in the workspace I am working in.

## Ongoing Issues

Did you notice this command in the `build` script in my `package.json` file?

```shell
npm run build --workspaces
```

This is what's running `npm run build` in each workspace, in the order specified. I figured, why not extend this to publishing as well? So, I put together something that would make perfect sense.

```shell
npm publish --workspaces
```

This, in fact, will go through packages one-by-one in the order specified and run the `npm publish` command on each one. So, what's the problem? There's actually a minor behavioral difference between `publish` and `build`, specifically, how each one will fail.

If the build script fails in one workspace, it will continue to iterate through each subsequent workspace and attempt to build each one. This *may* lead to a cascade of failures, but not necessarily. If any one build script fails, the command will return a nonzero exit code, indicating a failure.

If the publish script fails in one workspace, it fails-fast and halts execution. So let's say I'm updating `smath` and submit and merge a pull request. The script will go through packages one-by-one, starting with `t6`. I have not made any updates to `t6` so there is no need to publish. The local version number matches the one already on the NPM registry. So, `npm publish` fails in that workspace. Because it failed, it halted execution and did not attempt to publish any other package, including `smath`. This is a problem, because `smath` was updated and should be published.

I created a more complicated workaround by iterating through each workspace and calling `npm publish` manually without the `--workspaces` flag.

```shell
for dir in */ ; do
    # Skip directories that are not an npm project
    npm --silent v "${dir}" || { echo "${dir} is not an NPM project" && continue ; }
    # Set working directory to package directory
    cd "${dir}" || exit 1
    # Attempt to publish the package, or show a message
    npm publish || echo "Cannot publish ${dir}"
    # Reset the working directory
    cd ..
done
```

It's not as nice and clean as what I would have wanted, but it works. I tried so hard to find a `--if-possible` or `--no-fail` flag on [`npm publish`](https://docs.npmjs.com/cli/v10/commands/npm-publish) but it appears that none currently exist. I would love to see that in a future `npm` update, but I must live with what I have for now.

## Conclusion

This upgrade going from several repositories, to a workspace-independent monorepo, to NPM workspaces was a huge lift, but I'm already seeing the benefits from this upgrade. For one, I can develop multiple packages at the same time and have them depend on each other. My [documentation pages](https://npm.nicfv.com/) are so much easier to generate with NPM workspaces and makes an excellent interface to navigate between each one. Also, my workflow will automatically typecheck, test, *and* run examples for each package, where the example pages and their outputs are generated on the fly while building the documentation. I would like to thank the maintainers of TypeDoc, particularly [Gerrit0](https://github.com/Gerrit0) for their fast, detailed responses to GitHub issues and excellent documentation for setting up TypeDoc for a workspace environment.
