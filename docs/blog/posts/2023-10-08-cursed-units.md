---
date:
  created: 2023-10-08
  updated: 2024-01-07
categories:
  - Shower Thought
tags:
  - physics
  - dimensional analysis
  - time
---
# Pure Unit System of Measurement

Let's get rid of pounds, kilograms, feet, meters, seconds, and degrees altogether and come up with a new, pure unit system based on limits of our universe, to describe our world. Believe it or not, this actually exists! It's called [Planck Units](https://en.wikipedia.org/wiki/Planck_units), and it's a completely ideal system of measurement based on our universe's fundamental constants. For example, "speed of light"s describe quantities of velocity. Here's a really neat way to create Planck units using linear algebra and *math*. Since this is a blog post and not a scientific research paper, let's keep this simple, assuming there are only 4 (out of the [seven](https://en.wikipedia.org/wiki/SI_base_unit)) physical base units in our universe. Let's also assume our universe has 4 [fundamental constants](https://en.wikipedia.org/wiki/Physical_constant). See the tables below for the list of each and symbols.

<!-- more -->

## Table of Reference

| Base Unit | Symbol |
| --------- | ------ |
| Mass | M |
| Length | L |
| Time | T |
| Temperature | K |

| Constant | Symbol |
| -------- | ------ |
| [Speed of Light](#speed-of-light) | C |
| [Gravitational Constant](#gravitational-constant) | G |
| [Boltzmann Constant](#boltzmann-constant) | B |
| [Planck Constant](#planck-constant) | h |

Let's create Planck Units using these fundamental physical constants. For example, if you are driving at 60 miles per hour, or about 100 kilometers per hour, (miles, kilometers, and hours are totally arbitrary units), you are actually driving at 0.1 micro-speed of lights (0.1 uC). This is a much more pure way to measure speed, and more on this example at [the end](#conclusion). But how do we measure length, time, or other dimensions? First, we need to define the constants in terms of their base units. For this, we can break down each constant into it's base units and combine them by adding or subtracting their exponents. Units of length, for example, are expressed in `L` or `L^(1)`. Area, which is length squared, is expressed in `L*L = L^(1) * L^(1) = L^(1+1) = L^(2)`. Inverted units are subtracted instead of added, because they have negative exponents.

### Speed of Light

> The speed that electromagnetic radiation travels in a vacuum

```
C = Length / Time
  = L^(1)T^(-1)
```

### Gravitational Constant

> Proportionality constant between the gravitational force of two bodies and their masses and distance apart

```
G = Force * Length ^ 2 / Mass ^ 2
  = M^(1)L^(1)T^(-2) * L^(2) * M^(-2)
  = M^(-1)L^(3)T^(-2)
```

### Boltzmann Constant

> Proportionality factor that relates the thermal energy of gas particles with their temperature

```
B = Energy / Temperature
  = M^(1)L^(2)T^(-2) * K^(-1)
  = M^(1)L^(2)T^(-2)K^(-1)
```

### Planck Constant

> The ratio of a photon's energy over its wavelength

```
h = Energy * Time
  = M^(1)L^(2)T^(-2) * T^(1)
  = M^(1)L^(2)T^(-1)
```

## Combining Fundamental Constants

We can combine fundamental physical constants the same way they were derived. For this exercise, let's multiply the [speed of light](#speed-of-light) by the [gravitational constant](#gravitational-constant).

```
C * G = L^(1)T^(-1) * M^(-1)L^(3)T^(-2)
      = M^(-1)L^(1+3)T^(-1-2)
      = M^(-1)L^(4)T^(-3)
```

Since we multiplied a length (from C) and a length to the 3 power (from G), we now have a length to the 4 power! But what if we wanted to cancel out length, or even time? Let's start by making a more general case by multiplying C with some factor `a` by G with some factor `b`?

```
aC * bG = L^(a)T^(-a) * M^(-b)L^(3b)T^(-2b)
        = M^(-b)L^(a+3b)T^(-a-2b)
```

Now we have some options here! Length will cancel out when `a = -3b`, and the time factor cancels out when `a = -2b`. Mass only cancels out when `b = 0`. Great, now we're getting somewhere. We can rewrite our 4 fundamental physical constants into a matrix `A`.

```
         C  G  B  h
    M |  0 -1  1  1 |      | C |      | M |
A = L |  1  3  2  2 |  x = | G |  b = | L |
    T | -1 -2 -2 -1 |      | B |      | T |
    K |  0  0 -1  0 |      | h |      | K |
```

This gives us a linear combination of our fundamental constants and our base units. Now we can find the inverse of `A`. This is the result of plugging it into an online calculator.

```
         | -1 -3 -5  5 |
A^(-1) = | -1  1  1 -1 | * 1/2
         |  0  0  0 -2 |
         |  1  1  1  1 |
```

Not so pretty, but we can now use this to rewrite our linear combination from `Ax=b` to `x=A^(-1)b`. We get to pick `b` here depending on what our measurement dimension is. Let's run a quick test for units of velocity, which is length over time, or length to the first times time to the minus first. This is how we should set `b` up.

```
    |  0 |  (M)
b = |  1 |  (L)
    | -1 |  (T)
    |  0 |  (K)
```

For this value of `b` we should expect to get a value output of just `C` since the speed of light already matches these units exactly and can describe our quantity.

```
| -1 -3 -5  5 |   |  0 |         | 1 |  (C)
| -1  1  1 -1 | * |  1 | * 1/2 = | 0 |  (G)
|  0  0  0 -2 |   | -1 |         | 0 |  (B)
|  1  1  1  1 |   |  0 |         | 0 |  (h)
```

After solving `A^(-1)b` we obtain `x = C^(1)` as expected! That means we can express a speed as a multiple of the speed of light to the first power. This is not super interesting alone but is mainly used to test that the formula is working as expected. Let's do a more interesting example. How would we describe mass just using our 4 physical fundamental constants? Just set `b = [ 1 0 0 0 ]` and calculate.

```
| -1 -3 -5  5 |   | 1 |         | -1/2 |  (C)
| -1  1  1 -1 | * | 0 | * 1/2 = | -1/2 |  (G)
|  0  0  0 -2 |   | 0 |         |   0  |  (B)
|  1  1  1  1 |   | 0 |         |  1/2 |  (h)
```

The resulting `x` matrix tells us that we can express mass as a multiple of this quantity.

```
M = C^(-1/2) * G^(-1/2) * h(1/2)
  = sqrt[ (planck constant) / { (gravitational constant) * (speed of light) } ].
```

> How to read this: Mass is measured in square root of planck's over gravitational-speed of lights.

## Representing Base Units as Multiples of Fundamental Constants

We already calculated mass above, and to spare the reader from all the math, I calculated the remaining base physical units and inserted them into the table below, as well as some other commonly used dimensions.

| Description | Base Units | Representation |
| ----------- | ---------- | -------------- |
| Mass | `M` | `sqrt(h/(G*C))` |
| Length | `L` | `sqrt(G*h/C^(3))` |
| Time | `T` | `sqrt(G*h/C^(5))` |
| Temperature | `K` | `sqrt(h*C^(5)/G)/B` |
| Area | `L^(2)` | `G*h/C^(3)` |
| Volume | `L^(3)` | `sqrt((G*h)^(3)/C^(9))` |
| Density | `M^(1)L^(-3)` | `C^(4)/(G^(2)*h)` |
| Velocity | `L^(1)T^(-1)` | `C` |
| Acceleration | `L^(1)T^(-2)` | `sqrt(C^(7)/(G*h))` |
| Momentum | `M^(1)L^(1)T^(-1)` | `sqrt(C*h/G)` |
| Force | `M^(1)L^(1)T^(-2)` | `C^(3)/G` |
| Energy | `M^(1)L^(2)T^(-2)` | `sqrt(C^(3)*h/G)` |
| Power | `M^(1)L^(2)T^(-3)` | `C^(4)/G` |
| Pressure | `M^(1)L^(-1)T^(-2)` | `C^(6)/(G^(2)*h)` |

## Conclusion

Let's finish this up by wrapping up what I originally did this research for and use one of these newly represented quantities. First, the easy example from the beginning: If I'm driving at 60 miles per hour (~100 KPH), what is my velocity in Planck Units? Start by defining what my units of velocity are. From the table above, speed is measured in `C`, or "speeds of light". 1 speed of light (or 1 C) is just over 1 billion kilometers per hour. Using this simple formula, we can convert from SI to Planck Units.

```
Velocity(Planck) = Velocity(SI) / (C)
                 = 100 / 1 000 000 000
                 = 0.000 000 1
```

My driving speed is 0.0000001 'Planck velocities'. It doesn't matter if I converted from standard SI or US units, or football fields per millisecond - my driving speed will be 0.0000001 no matter what.

Now, let's measure my height in pure units of length. Lengths are measured in `sqrt(G*h/C^(3))`. My height is around 5'9", or about 1.75 meters, let's translate it into square root of gravitational-planck over speed of light cubes. We can use the same formula as last time to determine my height in Planck Units of length.

```
Length(Planck) = Length(SI) / sqrt(G*h/C^(3))
               = 1.75 m / sqrt(6.674E-11 * 1.055E-34 / (3E8)^(3)) m
               = 1.75 m / 1.615E-35 m  <-- Planck length!
               = 1.084E35 Length(Planck)
```

Look how the ideal length unit is exactly 1 planck length! From the math, I am 1.084E35 planck lengths tall. The truly amazing thing about this unit system, is that it is completely independent from human interventions (e.g. [redefining the SI unit system](https://www.npl.co.uk/si-units/the-redefinition-of-the-si-units)) and can work anywhere in the universe. If our laws of physics changed, then you can use the exact same process to redefine the ideal unit system. The only reason that I needed to determine a conversion rate from Planck Units of length to meters (which turned out to be the planck length) is because our measurement tools on Earth currently only support measuring US or SI units (have you ever seen a ruler that tells you a distance of planck lengths?) But, if we adopt the Planck Unit system, there would no longer be a need for either US or SI units. My height is always 1.084E35 planck lengths regardless of what human (or other) unit system it's converted from.

[NIST](https://www.nist.gov/), where's my job offer!?