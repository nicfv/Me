# Contributing to my Favorite Open-Source Project

**(And how I almost contributed to my least favorite!)**

I've made my first\* contribution into a major open-source project!

\* Well, actually, I did make a [minor contribution](https://github.com/psychrometrics/psychrolib/pull/82) into an open-source project called [Psychrolib](https://github.com/psychrometrics/psychrolib) - which my [Psychart](https://psychart.nicfv.com/) application is dependent upon, but that could be its own story. Based on the number of watchers, forks, and stars, this next project dwarfs poor Psychrolib in comparison, despite how important Psychrolib is for my work.

## Material

As I've written in several of my articles before, I'm using a software called `mkdocs` to generate my website. It takes in a configuration file and markdown files to generate a beautiful and interactive HTML5 website. As part of the configuration file you need to define a theme, in which case I am using by far the most popular theme called `material`. Honestly, it's a lot more than a theme and brings about some very integrated functionality into the built website, and even has its own plugins! At the time of writing this, `material` has nearly 17k GitHub stars (almost as much as `mkdocs` itself!) and it actually has **more** forks (3.2k) and **more** individual contributors (266) than `mkdocs` (2.4k and 234)!

I was having an issue with displaying the "updated date" you see on the left of my blog posts, so I consulted the [documentation](https://squidfunk.github.io/mkdocs-material/) for `material`. It was actually a very simple fix and I just needed to reformat my dates in the metadata to look like this.

```yaml
date:
  created: YYYY-MM-DD
  updated: YYYY-MM-DD
```

However, when looking through the docs, I noticed that many of the examples used January 1, 2023 as the date example, except for one using 2022. Assuming it was a typo, I forked the repository, made a commit, and submitted a [pull request](https://github.com/squidfunk/mkdocs-material/pull/6598). To break that down...

1. *Fork the repository*: Basically, make my own copy of the open-source code for `material`.
1. *Made commits*: I edited the dates in the documentation and noted that those edits are to be published to my fork.
1. *Submit a pull request*: Telling the owner of `material` that I wanted my code to be pulled into his official software repository.

I heard back from Martin Donath, the owner of `material` who goes by the username [squidfunk](https://github.com/squidfunk) who recommended I simply change all the dates to 2024. So I did and my pull request was accepted! Despite being an absolutely tiny change, my GitHub icon even shows up at the bottom of the [page](https://squidfunk.github.io/mkdocs-material/plugins/blog/) I updated, thanks to the `git-committers` plugin. And, that makes me an official [contributor](https://github.com/squidfunk/mkdocs-material/commits?author=nicfv) for my favorite project, [`material`](https://github.com/squidfunk/mkdocs-material)!

## Everything

I also almost contributed to my least favorite project, `@everything-registry/everything`. First, some backstory...

For JavaScript software development, there is a package registry called [NPM](https://www.npmjs.com/) which allows developers to download bits of code, or packages, that other people wrote and published, so others can use it in their own software. Some of them can be quite ridiculous, like [is-ten-thousand](https://www.npmjs.com/package/is-ten-thousand). What do you think that package does?

One thing about NPM packages is that they can depend on *other* NPM packages. For example, is-ten-thousand depends on *another* ridiculous package called [is-positive](https://www.npmjs.com/package/is-positive), which probably means that within the code in is-ten-thousand, it checks first if the number is positive. (Why?)

> Just for kicks, I wrote my own version of is-ten-thousand...

```js
function isTenThousand(num) {
    return num === 10000;
}
```

I gave a few silly examples, but NPM is filled with extremely important and useful packages like [Typescript](https://www.npmjs.com/package/typescript).

Anyway, once a package reaches over 300 downloads per week on average, or has at least one other package that depends on it, NPM no longer allows the original author to delete their own package. Usually, this is not an issue for people simply testing out their own packages, since they receive very few downloads. However, some developers got together and decided to create a package (called `everything`) that literally depends on all 2.5 million other packages on NPM. Essentially, blocking anyone and everyone from being able to unpublish their code. This could be malicious, by forcing people to keep accidental sensitive data they may have published.

I had marked one of my packages as deprecated, planning to delete it later, and I was still affected by `everything`. Because I could not delete my own package, I figured it was better to take action. So I reported `everything` (as I'm sure many people did), and actually submitted a pull request with some code to filter out deprecated packages from their dependency list. It was never merged, and actually both GitHub and NPM took down their software! So, Nic 1 - Everything 0, I guess!