---
date: 2023-10-08
categories:
  - Shower Thought
tags:
  - physics
  - dimensional analysis
---

# Blessed Units

Let's get rid of pounds, kilograms, feet, meters, seconds, and degrees altogether and come up with a new, pure unit system to describe our world. For example, lets use "speed of light"s to describe quantities of velocity. Since this is a blog post and not a scientific research paper, let's keep this simple, assuming there are only 4 (out of the [seven](https://en.wikipedia.org/wiki/SI_base_unit)) physical base units in our universe. Let's also assume our universe has 4 [fundamental constants](https://en.wikipedia.org/wiki/Physical_constant). See the tables below for the list of each and symbols.

## Table of Reference

| Base Unit | Symbol |
| --------- | ------ |
| Mass | M |
| Length | L |
| Time | T |
| Temperature | H |

| Constant | Symbol |
| -------- | ------ |
| [Speed of Light](#speed-of-light) | C |
| [Gravitational Constant](#gravitational-constant) | G |
| [Boltzmann Constant](#boltzmann-constant) | B |
| [Planck Constant](#planck-constant) | h |

Let's create our unit system using these fundamental physical constants. First, we need to define the constants in terms of their base units. For this, we can break down each constant into it's base units and combine them by adding or subtracting their exponents. Units of length, for example, are expressed in `L` or `L^(1)`. Area, which is length squared, is expressed in `L*L = L^(1) * L^(1) = L^(1+1) = L^(2)`. Inverted units are subtracted instead of added, because they have negative exponents.

### Speed of Light

> The speed that electromagnetic radiation travels in a vacuum

```
C = Length / Time
  = L^(1)T^(-1)
```

### Gravitational Constant

> Proportionality constant between the gravitational force of two bodies and their masses and distance apart

# REVISE: THERE IS AN ERROR HERE. IT SHOULD BE T^(-2) NOT T^(-1)

```
G = Force * Length ^ 2 / Mass ^ 2
  = M^(1)L^(1)T^(-2) * L^(2) * M^(-2)
  = M^(-1)L^(3)T^(-1)
```

### Boltzmann Constant

> Proportionality factor that relates the thermal energy of gas particles with their temperature

```
B = Energy / Temperature
  = M^(1)L^(2)T^(-2) * H^(-1)
  = M^(1)L^(2)T^(-2)H^(-1)
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
C * G = L^(1)T^(-1) * M^(-1)L^(3)T^(-1)
      = M^(-1)L^(1+3)T^(-1-1)
      = M^(-1)L^(4)T^(-2)
```

Since we multiplied a length (from C) and a length to the 3 power (from G), we now have a length to the 4 power! But what if we wanted to cancel out length, or even time? Let's start by making a more general case by multiplying C with some factor `a` by G with some factor `b`?

```
aC * bG = L^(a)T^(-a) * M^(-b)L^(3b)T^(-b)
        = M^(-b)L^(a+3b)T^(-a-b)
```

Now we have some options here! Length will cancel out when `a = -3b`, and the time factor cancels out when `a = -b`. Mass only cancels out when `b = 0`. Great, now we're getting somewhere. We can rewrite our 4 fundamental physical constants into a matrix `A`.

```
         C  G  B  h
    M |  0 -1  1  1 |      | C |      | M |
A = L |  1  3  2  2 |  x = | G |  b = | L |
    T | -1  1 -2 -1 |      | B |      | T |
    H |  0  0 -1  0 |      | h |      | H |
```

This gives us a linear combination of our fundamental constants and our base units. Now we can find the inverse of `A`. This is the result of plugging it into an online calculator.

```
         | -5  0 -5  5 |
A^(-1) = | -1  1  1 -1 | * 1/5
         |  0  0  0 -5 |
         |  4  1  1  4 |
```

Not so pretty, but we can now use this to rewrite our linear combination from `Ax=b` to `x=A^(-1)b`. We get to pick `b` here depending on what our measurement dimension is. Let's run a quick test for units of velocity, which is length over time, or length to the first times time to the minus first. This is how we should set `b` up.

```
    |  0 |  (M)
b = |  1 |  (L)
    | -1 |  (T)
    |  0 |  (H)
```

For this value of `b` we should expect to get a value output of just `C` since the speed of light already matches these units exactly and can describe our quantity.

```
| -5  0 -5  5 |   |  0 |         | 1 |  (C)
| -1  1  1 -1 | * |  1 | * 1/5 = | 0 |  (G)
|  0  0  0 -5 |   | -1 |         | 0 |  (B)
|  4  1  1  4 |   |  0 |         | 0 |  (h)
```

After solving `A^(-1)b` we obtain `x = C^(1)` as expected! That means we can express a speed as a multiple of the speed of light to the first power. This is not super interesting alone but is mainly used to test that the formula is working as expected. Let's do a more interesting example. How would we describe mass just using our 4 physical fundamental constants? Just set `b = [ 1 0 0 0 ]` and calculate.

```
| -5  0 -5  5 |   | 1 |         |  -1  |  (C)
| -1  1  1 -1 | * | 0 | * 1/5 = | -1/5 |  (G)
|  0  0  0 -5 |   | 0 |         |   0  |  (B)
|  4  1  1  4 |   | 0 |         |  4/5 |  (h)
```

The resulting `x` matrix tells us that we can express mass as a multiple of (planck constant)^(4/5)/(gravitational constant)^(1/5)/(speed of light).

## Representing Base Units as Multiples of Fundamental Constants

We already calculated mass above, and to spare the reader from all the math, I calculated the remaining base physical units and inserted them into the table below, as well as some other commonly used dimensions.

| Description | Base Units | Representation |
| ----------- | ---------- | -------------- |
| Mass | `M` | `h^(4/5) / ( G^(1/5) * C )` |
| Length | `L` | `(G * h)^(1/5)` |
| Time | `T` | `(G * h)^(1/5) / C` |
| Temperature | `H` | `(C * h^(4/5)) / (B * G^(1/5))` |
| Area | `L^(2)` | `(G * h)^(2/5)` |
| Volume | `L^(3)` | `(G * h)^(3/5)` |
| Velocity | `L^(1)T^(-1)` | `C` |
| Acceleration | `L^(1)T^(-2)` | `C^(2) / (G * h)^(1/5)` |
| Momentum | `M^(1)L^(1)T^(-1)` | `h^(4/5) / G^(1/5)` |
| Force | `M^(1)L^(1)T^(-2)` | `C * h^(3/5) / G^(2/5)` |
| Energy | `M^(1)L^(2)T^(-2)` | `C * h^(4/5) / G^(1/5)` |
| Power | `M^(1)L^(2)T^(-3)` | `C^(2) * h^(3/5) / G^(2/5)` |
| Pressure | `M^(1)L^(-1)T^(-2)` | `C * h^(1/5) / G^(4/5)` |

## Conclusion

Let's finish this up by wrapping up what I originally did this research for and use one of these newly represented quantities. Let's measure my height in `(G * h)^(1/5)`. My height is around 5'9", or about 1.75 meters, let's translate it into our new unit of length, called "Venturas", abbreviated "V".

First let's determine the conversion rate of our fundamental unit of distance, the Ventura, into SI units.

```
1 V = 1 (G * h)^(1/5)
G = 6.674E-11 m^(3)/kg/s^(2)
h = 6.626E-34 kg*m^(2)/s
=> (G * h)^(1/5) =~ 2.13367 nm
```

1 Ventura is approximately 2.13367 nanometers. Some quick math tells us that my height is about 820 million Venturas, or 820 MV. The truly amazing thing about this unit system, is that it is completely independent from human interventions (e.g. [redefining the SI unit system](https://www.npl.co.uk/si-units/the-redefinition-of-the-si-units)) and can work anywhere in the universe. The only reason that I needed to determine a conversion rate from V to meters is because our measurement tools on Earth currently only support measuring US or SI units - but if we adopt this new unit system, there would no longer be a need for either US or SI units. My height is always 820 MV regardless of what human (or other) unit system it's converted from.