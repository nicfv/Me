---
draft: true
date:
  created: 2025-08-31
categories:
  - Project
---
# Publishing Dimensional on NPM

One of my passion projects that's long-due completion was a dimensional analysis tool for computer programming. Programming has been a long-time hobby of mine and ever since I took physics and fluid mechanics in college, I wondered how to incorporate units into programming languages. Thus, [`Dimensional`](https://www.npmjs.com/package/dimensional) was born. It may not be the *most* elegant solution, but I believe I've come up with a solution that works pretty well regardless, and is fully customizable.

<!-- more -->

I'd been playing around with different ideas for this for a long time. I had ideas to make dimensions, attributes, and units be their own classes. This would enforce strict type checking but I didn't like that solution because any time a user defines a new unit (not built-in to the package), a new class would need to be created as well. Allowing the user to define their own units and dimensions was integral to my idea for this package.
