---
date: 2024-09-20
updated: 2024-09-26
categories:
  - Random
tags:
  - math
---
# California License Plates Part 1

Go to
| \#1
| [\#2](./2024-09-26-ca-license-plate-2.md)
| [\#3](./2024-09-27-ca-license-plate-3.md)

License plates in the state of California follow an interesting pattern with 7 letters and numbers, and we're going to run out soon! Everyone panic!! However, this journal isn't about that just yet, but we're building up to it.

<!-- more -->

## Simple Numeric Sequence

First things first, if we have let's say a simple 3-digit license plate of all numbers, going sequentially up, like this:

```
001, 002, 003, ... 010, 011, ... 100, 101, ... 999
```

The formula to determine the sequence number $N$ from the license plate `NNN` would be as follows:

$$N = 10^{2}N_{1} + 10^{1}N_{2} + 10^{0}N_{3}\\
N = 100N_{1} + 10N_{2} + N_{3}$$

For example, the license plate `123` is what place in the sequence?

$$N = 100*1 + 10*2 + 3 = 100 + 20 + 3 = 123$$

Awesome. If you have the sequence number, lets say $123$, and want to know the corresponding plate, things are a little bit more complicated, but still easy for this example.

$$N_{1} = floor\left(\frac{N}{10^{2}}\right) = floor\left(\frac{123}{100}\right) = 1$$

$$N_{2} = floor\left(\frac{N - 10^{2}N_{1}}{10^{1}}\right) = floor\left(\frac{123 - 100*1}{10}\right) = 2$$

$$N_{3} = N - 10^{2}N_{1} - 10^{1}N_{2} = 123 - 100*1 - 10*2 = 3$$

Nice! We get right back to `123`. Easy peasy.

We could also determine the total number of combinations like this:

$$C = 10*10*10 = 1000$$

There are 1,000 3-digit combinations for license plates with only numbers, which makes perfect sense. Count them all!

## Letter Sequence

Assume you have a 2-letter license plate in the pattern `LL`, things get a little more complicated since we are no longer dealing with base-10.

```
AA, AB, ... AZ, BA, BB, ... ZZ
```

How many possible plates are there?

$$C = 26*26 = 676$$

This is an easy one, just 26 squared, or 676. The formula to go from the license plate to the sequence number $N$ would be as follows:

$$N = 26^{1}L_{1} + 26^{0}L_{2}\\
N = 26L_{1} + L_{2}$$

Each letter would correspond to a number with `A` starting at zero:

| Letter | Value |
| ------ | ----- |
| `A`    |   $0$ |
| `B`    |   $1$ |
| `C`    |   $2$ |
| `D`    |   $3$ |
| `E`    |   $4$ |
| `F`    |   $5$ |
| `G`    |   $6$ |
| `H`    |   $7$ |
| `I`    |   $8$ |
| `J`    |   $9$ |
| `K`    |  $10$ |
| `L`    |  $11$ |
| `M`    |  $12$ |
| `N`    |  $13$ |
| `O`    |  $14$ |
| `P`    |  $15$ |
| `Q`    |  $16$ |
| `R`    |  $17$ |
| `S`    |  $18$ |
| `T`    |  $19$ |
| `U`    |  $20$ |
| `V`    |  $21$ |
| `W`    |  $22$ |
| `X`    |  $23$ |
| `Y`    |  $24$ |
| `Z`    |  $25$ |

So, if you had license plate `NV`, that would be this number in the sequence:

$$N = 26*13 + 21 = 359$$

So going backwards from sequence number 359, you'd get this:

$$L_{1} = floor\left(\frac{N}{26}\right) = floor\left(\frac{359}{26}\right) = 13$$

$$L_{2} = N - 26L_{1} = 359 - 26*13 = 21$$

That translates back to `NV`!

Really, all we needed to do here was change our 10's to 26's, so this was actually pretty simple. Now what about letter-number combinations? That's where things get dicey. Tune in next time!