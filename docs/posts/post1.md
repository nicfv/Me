---
date: 2023-08-12
---
# The birth of my 3 'main' websites.

Hello, world! This is my first post on this website, although I may retroactively add some prior work. Today I had time to work on my own projects, and I finally knocked this one out of the way. Today marks the birth of my 3 'main' websites. Those being:

1. This one: [blog.nicfv.com](https://blog.nicfv.com/)
1. My photography website: [photos.nicfv.com](https://photos.nicfv.com/)
1. And, my homepage: [portfolio.nicfv.com](http://portfolio.nicfv.com/) (or [nicolasventura.com](https://nicolasventura.com/))

At work, I recently learned about a technique to generate *beautiful* documentation using a software package called `mkdocs`. I immediately started playing around with it and discovered it can be used for so much more than code documentation. As of this article, all 3 of my mentioned websites are using `mkdocs` to build the website.

## How does it work?

`mkdocs` takes input markdown files and generates a HTML and CSS code package that can be hosted at any modern web hosting service. GitHub Pages is a good solution, since it is free, and I am just generating static pages. The input markdown files can be extended to also include custom HTML and CSS, but unless you are trying to do something very specific, it's usually not necessary.

It also requires a "theme." There are a few builtin themes in `mkdocs` but there are several professional-quality themes that are built and maintained by the community. My favorite theme by far is `mkdocs-material` because of its extensive configuration options. I am using the same theme with similar configuration for all 3 of my websites. Notice its versatility, going from a blog, to a photography website, to a single-page portfolio.