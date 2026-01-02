---
date:
  created: 2025-08-31
categories:
  - Project
---
# Publishing Dimensional on NPM

One of my passion projects that's long-due completion was a dimensional analysis tool for computer programming. Programming has been a long-time hobby of mine and ever since I took physics and fluid mechanics in college, I wondered how to incorporate units into programming languages. Thus, [`Dimensional`](https://www.npmjs.com/package/dimensional) was born. It may not be the *most* elegant solution, but I believe I've come up with a solution that works pretty well regardless, and is fully customizable.

<!-- more -->

My goal was to create a tool that allowed users to add units and dimensions alongside their numerical components. I had a few sub-goals in mind that I wanted to achieve before releasing this package to the public.

1. Allow combinations "compounds" of dimensions and units independently from quantities
1. "Type-checking" to make sure quantities added or subtracted have like dimensions
1. Compute base dimensions for any unit (or compound units)
1. Numerical conversions between any arbitrary 2 units (or compound units)
1. Allow (metric) prefixes on named units
1. Make this package fully customizable

I'd been playing around with different ideas for this for a long time. I had ideas to make dimensions, attributes, and units be their own classes. This would enforce strict type checking but I didn't like that solution because any time a user defines a new unit (not built-in to the package), a new class would need to be created as well. (E.g. by multiplying `class Volt` and `class Ampere`, a `class Watt` would need to be created.) Allowing the user to define their own units and dimensions was an integral idea for this package.

## Compounds

This was the first hurdle. If examples of dimensions are $\textbf{L}$ (length) or $\textbf{T}$ (time), what I mean by a compound dimension would be something like $\textbf{L}^{2}$ (area) or $\frac{\textbf{L}}{\textbf{T}}$ (velocity). In my first iteration of this package, I called these **attributes** and they were separate from dimensions.

In `Dimensional@^1.0.0`, now I only have a `Dimension` class and a `Unit` class (no attributes), and both of these inherit a base `Compound` class. The compound class is sort of like a wrapper for `Map<Child, number>`. The "key" (child) is whatever is inheriting it - for example, `Dimension` inherits a `Map<Dimension, number>`. The "value" (number) is the exponent of the term represented by `Child`. So for the example of velocity, we would encounter this map, meaning *Length* to the first, times *Time* to the negative first:

```
Length => 1
Time => -1
```

It does the exact same for units. `Compound` is in charge of manipulating these maps when two compounds are multiplied, divided, or powered; and converting these maps into beautiful LaTeX output.

## Type-Checking

In order to add or subtract 2 physical quantities, their dimensions **must** match, but their units do not necessarily have to match. The same rules apply to convert one arbitrary unit to another. Therefore, I had to create an equality checker within `Compound` to determine if all factors and exponents matched, even if they were not in the same order. *Length* times *Time* is the same as *Time* times *Length*.

## Base Dimensions and Conversions for Arbitrary Units

These two goals surprisingly worked together very well with my current implementation. In my first iteration, I had unit conversions done separately from the `Unit` class and there were several different types of unit conversions.

- Base unit (providing a dimension, no conversion)
- Scaled (providing a prefix to another unit)
- Relative (providing a scale factor and another unit)
- Complex (providing essentially a compound of other units)

All conversion factors had to be made in a separate "table" which had to be referenced any time units were converted. This was in fact a bad solution and required any new potential units to have at least one of these 4 conversions defined as well.

As of the current version, units are either defined as a "base unit" (by providing the base dimension) or as a "relative unit" by providing another unit and scaling factor. That's it.

For example, the unit **meter** would be a base dimension defined using **Length**, and **foot** is a relative unit with a particular scale factor from **meter**.

```js
const meter = new Unit('m', dimensions.Length);
const foot = new Unit('ft', meter, 1 / 3.28084);
```

In the background, each subsequent unit *must* be defined in one of these two ways. Units defined off other units will "build off" their base dimensions or scale factors, so each unit will have a fully defined "scale" for their dimension. To go from *any* two units in a dimension, just use the ratio of the scales for each to create a conversion factor between them on the fly.

## Unit Prefixes

This one was surprisingly challenging. Originally, I defined entirely new prefixed units with a conversion factor, but I wanted to make this cleaner. I created a `.prefix()` function on the Unit class, which allowed the user to pass in a prefix. **If** the unit was "named" (e.g. $[\text{m}]$ or "meter" but not $\left[\frac{\text{m}}{\text{s}}\right]$) and did not already have a prefix (e.g. $[\text{km}]$ has a prefix), then the function would return a properly scaled unit with that prefix attached.

I played around with the idea to allow changing the prefix of an already-prefixed unit (going from $[\text{km}]$ to $[\text{cm}]$ for example) but that added significant complexity within the `Unit` class. I would need to store the "base unit" and prefix separately, and overwrite any scale factors for units created this way. I was able to produce this, but wasn't too happy with the result. Additionally, something like this might confuse the user. By adding the "centi-" prefix to kilometers, would they expect centimeters, or to scale kilometers down by a factor of 100? (Centikilometers?) Someone not looking too closely might assume the ladder, but by forcing prefixes only on base units, that eliminates any confusion from that.

## Fully Customizable

Everything I've demonstrated so far can be rewritten by the user. There are plenty of defaults provided in the package for getting started quickly, but users can define an entirely new dimensions, unit systems, and prefixes completely independent from these defaults. This is possible because of the way that dimensions and units are built on top of each other, as shown previously. Any customized parameters behave the same way and follow the same rules as any standard dimension or unit.

This package was a long time coming and I'm glad it's finally released, and looking forward to adding more features. Want to learn more? Check out the [documentation](https://npm.nicfv.com/modules/dimensional.html)!

## Basic Rules for Reference

- Capital letters $A,B,C$ represent dimensioned quantities
- $c$ represents a unitless constant factor

$$A \pm B = C$$

$$\dim(A) = \dim(B) = \dim(C)$$

$$A \cdot B = C$$

$$\dim(A) \cdot \dim(B) = \dim(C)$$

$$\frac{A}{B} = C$$

$$\frac{\dim(A)}{\dim(B)} = \dim(C)$$

$$A^{2} = C$$

$$\dim(A^{2}) = \dim(A)^{2} = \dim(C)$$

$$cA = C$$

$$\dim(A) = \dim(C)$$

$$A = c$$

$$\dim(A) = 1$$
