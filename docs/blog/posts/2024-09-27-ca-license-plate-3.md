---
date:
  created: 2024-09-27
categories:
  - Random
tags:
  - math
---
# California License Plates Part 3

Go to
| [\#1](./2024-09-20-ca-license-plate-1.md)
| [\#2](./2024-09-26-ca-license-plate-2.md)
| \#3

This story is totally unnecessary, but I will show the general form of a formula going from sequence number to license plate and vice-versa.

<!-- more -->

## Defining the Alphabet

Similarly to what we did for the letter sequence in [part 1](./2024-09-20-ca-license-plate-1.md), we need to correspond each character with a zero-indexed numeric value. For each character in the license plate, there is a corresponding "alphabet." This may not necessarily be "A-Z" or "0-9". In fact, it could contain a subset of letters and numbers, not even in order! This is a very weird, but valid alphabet containing 15 possible characters, let's call it "alphabet \#1", or $A_{1}$:

| Character | Value |
| --------- | ----- |
| `A`       | $  0$ |
| `B`       | $  1$ |
| `C`       | $  2$ |
| `1`       | $  3$ |
| `2`       | $  4$ |
| `3`       | $  5$ |
| `D`       | $  6$ |
| `7`       | $  7$ |
| `M`       | $  8$ |
| `U`       | $  9$ |
| `X`       | $ 10$ |
| `8`       | $ 11$ |
| `.`       | $ 12$ |
| `Y`       | $ 13$ |
| `Z`       | $ 14$ |

Notice that characters can be anything, including punctuation. Some license plates might not allow this, but this is for example's sake. As another example, let's define a shorter alphabet with only 5 characters, and call it "alphabet \#2", or $A_{2}$:

| Character | Value |
| --------- | ----- |
| `5`       | $  0$ |
| `4`       | $  1$ |
| `:`       | $  2$ |
| `N`       | $  3$ |
| `9`       | $  4$ |

## Defining the Pattern

Okay, now that we have a few alphabets defined, we can define our license plate pattern. Let's keep things short and say we have a 4-character license plate using this pattern, with the outer 2 characters coming from "alphabet \#1" and the inner 2 characters from "alphabet \#2":

$$A_{1}A_{2}A_{2}A_{1}$$

Here's how we could determine the total number of license plates in supply $C$:

$$C = \text{count}(A_{1}) \times \text{count}(A_{2}) \times \text{count}(A_{2}) \times \text{count}(A_{1})\\
= 15 \times 5 \times 5 \times 15 = 5625$$

## Getting the Sequence Number

So far, pretty simple. Now what about going from the license plate to the sequence number $N$, where $C_{i}$ is the character at position $i$? This also depends which digit position $i$ is our least significant vs. our most significant digit. For this example, let's say that our digit significance is as follows:

$$S_{4}S_{2}S_{1}S_{3}$$

This means the character in the 3rd position is the most significant (imagine "thousands-place"), the second position in "hundreds-place", last digit in "tens-place", and the first digit in the "ones-place". Using this knowledge we can start to build out our formula starting with the least significant digit:

$$N = \text{count}(A_{1})^{0}\text{count}(A_{2})^{0}C_{1} + \text{count}(A_{1})^{1}\text{count}(A_{2})^{0}C_{4} + \text{count}(A_{1})^{2}\text{count}(A_{2})^{0}C_{2} + \text{count}(A_{1})^{2}\text{count}(A_{2})^{1}C_{3}$$

This formula can be simplified and rearranged, plugging in the counts for our alphabets.

$$N = 15^{0}5^{0}C_{1} + 15^{1}5^{0}C_{4} + 15^{2}5^{0}C_{2} + 15^{2}5^{1}C_{3}$$

$$N = C_{1} + 225C_{2} + 1125C_{3} + 15C_{4}$$

So, for a license plate `14:Y` (remember to follow the pattern rules, using only characters from the right alphabets) what is the sequence number? First, lets convert each character to it's corresponding value.

1. `1` (from alphabet \#1) = $3$
1. `4` (from alphabet \#2) = $1$
1. `:` (from alphabet \#2) = $2$
1. `Y` (from alphabet \#2) = $13$

All we need to do now is plug and chug.

$$N = 3 + 225 \times 1 + 1125 \times 2 + 15 \times 13 = 2673$$

As a quick sanity check: $(N=2673)<(C=5625)$, our sequence number is less than the count, so we are good! You know what's next!

## Getting the Plate

Problem: You go to the DMV. License plates are issued in the pattern $A_{1}A_{2}A_{2}A_{1}$ with the alphabets specified [above](#defining-the-alphabet). The order of significance is $S_{4}S_{2}S_{1}S_{3}$. You're 2,673rd place in line for registering your vehicle, but you just can't wait. You need to know what your license plate is, right now! You might change your mind and want to swap places with someone else!

Let's go through the motions, starting with the most significant digit:

$$C_{3} = \text{floor}\left(\frac{N}{1125}\right)$$

$$C_{2} = \text{floor}\left(\frac{N - 1125 \times C_{3}}{225}\right)$$

$$C_{4} = \text{floor}\left(\frac{N - 1125 \times C_{3} - 225 \times C_{2}}{15}\right)$$

$$C_{1} = N - 1125 \times C_{3} - 225 \times C_{2} - 15 \times C_{4}$$

After plugging in the numbers, we get $C_{3}=2$ (`:`), $C_{2}=1$ (`4`), $C_{4}=13$ (`Y`), and $C_{1}=3$ (`1`). Putting that all together, we get the license plate `14:Y`. You then decide that this license plate is acceptable and wait patiently for 2,672 people in front of you to get their registrations complete. Unfortunately, when you are next in line, the DMV closes for the holidays.