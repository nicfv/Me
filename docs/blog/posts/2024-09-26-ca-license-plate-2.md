---
date:
  created: 2024-09-26
categories:
  - Random
tags:
  - math
---
# California License Plates Part 2

Here we will figure out how many license plates have been issued in California and how many are left! Haven't yet read part one? Read it [here](./2024-09-20-ca-license-plate-1.md)!

<!-- more -->

## Simple Alphanumeric Sequence

Like we did in the first part of the story, let's start with a simple example. Let's say we have a 2-character license plate with a number-letter:

```
0A, 0B, ... 0Z, 1A, 1B, ... 9Y, 9Z
```

If we want to determine the sequence number $N$ from the license plate `NL`, remember that in the "ones" place, we have 26 possible digits. Every time the "tens" place increments by 1, our sequence number $N$ increases not by 10 but by 26.

$$N = 26N_{1} + L_{2}$$

For example, the license plate `4V` is what place in the sequence?

$$N = 26*4 + 21 = 125$$

Same idea as our example with 3 numeric digits, but just different numbers in the formula. If you have the sequence number, and want to know the corresponding plate, we just need to work our way back from the formula shown above. Let's use the sequence number $N=125$ and see if we get back out our `4V` license plate.

$$N_{1} = floor\left(\frac{N}{26}\right) = floor\left(\frac{125}{26}\right) = 4$$

$$L_{2} = N - 26N_{1} = 125 - 26*4 = 21$$

We got back $N_{1} = 4$ and $L_{2} = 21$ which corresponds to the letter "V", giving us the license plate `4V`! Excellent.

We could also determine the total number of combinations using this formula:

$$C = 10*26 = 260$$

Clearly, there would be 260 number-letter combinations for this type of license plate starting from `0A` all the way through `9Z`.

## California: NLLLNNN

All right, finally getting to the point of it all! In California, 2-axle cars have the license plate pattern number-3-letters-3-numbers, or `NLLLNNN`. This sequence counts up logically starting from the right-most digit.

```
0AAA000, 0AAA001, ... 0AAA999, 0AAB000, ... 0ZZZ999, 1AAA000, ... 9ZZZ998, 9ZZZ999
```

Let's start with the easy formula first. How many possible plates are there? Why, that would be just shy of 176 million, or 175,760,000 to be exact, assuming all possible combinations following this pattern are allowed.

$$C = 10 * 26^3 * 10^3 = 175760000$$

Okay, for the trickier part now. Let's get our sequence number $N$ from the license plate. I'm going to start with the right-most digit and work my way left. I'm also going to add factors of $10$ and $26$ on each term, even if they cancel out.

$$N = 10^{0}26^{0}N_{7} + 10^{1}26^{0}N_{6} + 10^{2}26^{0}N_{5} + 10^{3}26^{0}L_{4} + 10^{3}26^{1}L_{3} + 10^{3}26^{2}L_{2} + 10^{3}26^{3}N_{1}$$

I wanted to do it this way to show how this formula is constructed before I write the final result. Every time you pass a number digit (base-10), your following digit will have an extra factor of 10. And every time you pass an alphabetical digit (base-26), your following digit will have an extra factor of 26. Here's the same formula but rearranged and simplified.

$$N = 17576000N_{1} + 676000L_{2} + 26000L_{3} + 1000L_{4} + 100N_{5} + 10N_{6} + N_{7}$$

Let's do an example, my license plate is (not really) `4NIC123`, what is its order in the sequence?

$$N = 17576000*4 + 676000*13 + 26000*8 + 1000*2 + 100*1 + 10*2 + 3 = 79302123$$

The license plate `4NIC123` is the 79,302,123rd license plate issued in California. You already know what's coming next. How do we get the license plate number *from* the sequence number? Again, just simply work our way backwards from the sequence formula, starting with the most significant digit.

$$N_{1} = floor\left(\frac{N}{17576000}\right)$$

$$L_{2} = floor\left(\frac{N - 17576000N_{1}}{676000}\right)$$

$$L_{3} = floor\left(\frac{N - 17576000N_{1} - 676000L_{2}}{26000}\right)$$

$$L_{4} = floor\left(\frac{N - 17576000N_{1} - 676000L_{2} - 26000L_{3}}{1000}\right)$$

$$N_{5} = floor\left(\frac{N - 17576000N_{1} - 676000L_{2} - 26000L_{3} - 1000L_{4}}{100}\right)$$

$$N_{6} = floor\left(\frac{N - 17576000N_{1} - 676000L_{2} - 26000L_{3} - 1000L_{4} - 100N_{5}}{10}\right)$$

$$N_{7} = N - 17576000N_{1} - 676000L_{2} - 26000L_{3} - 1000L_{4} - 100N_{5} - 10N_{6}$$

Let's say I'm issued the 79,302,123rd license plate in California, meaning that my sequence number $N=79302123$. What do you think my license plate will be? Place your bets now!

$$N_{1} = floor\left(\frac{79302123}{17576000}\right) = 4$$

$$L_{2} = floor\left(\frac{79302123 - 17576000*4}{676000}\right) = 13 (N)$$

$$L_{3} = floor\left(\frac{79302123 - 17576000*4 - 676000*13}{26000}\right) = 8 (I)$$

$$L_{4} = floor\left(\frac{79302123 - 17576000*4 - 676000*13 - 26000*8}{1000}\right) = 2 (C)$$

$$N_{5} = floor\left(\frac{79302123 - 17576000*4 - 676000*13 - 26000*8 - 1000*2}{100}\right) = 1$$

$$N_{6} = floor\left(\frac{79302123 - 17576000*4 - 676000*13 - 26000*8 - 1000*2 - 100*1}{10}\right) = 2$$

$$N_{7} = 79302123 - 17576000*4 - 676000*13 - 26000*8 - 1000*2 - 100*1 - 10*2 = 3$$

Wouldn't you believe it? We get the license plate `4NIC123`!

## Remaining Supply

All right, now that we've gotten all the math setup out of the way, how many license plates are left? We already know that there are a maximum of 175,760,000 non-repeated license plates that can be issued, so where are we now?

As of September 26, 2024, the highest license plates that I've seen on the road (they're easy to spot if you just look for the newest cars) is in the `9NV...` range! (Hey, my initials!) Let's say that by now, the license plate `9NVZ999` has just been issued. We know exactly the formula required for determine its sequence number.

$$N = 17576000*9 + 676000*13 + 26000*21 + 1000*25 + 100*9 + 10*9 + 9 = 167543999$$

The 167,543,999th license plate has just been issued in California. As a fraction of our total, what is that?

$$\frac{167543999}{175760000} \approx 0.95325443218$$

We've exhausted over **95%** of the total supply! My license plate is in the `9CW...` range, with a corresponding sequence number of about 160,108,000. About 7,435,999 have been issued since I registered my vehicle (about 1.5 years ago), which is about 4% of the total supply!

## Speculation

Once we reach the final license plate, `9ZZZ999`, what will happen next? In New Mexico, vehicles seem to boast many different styles of license plates, each with their own letter-number pattern. (The license plate designs are so cool too - some with chili peppers, some with the Zia sun symbol, all in different colors - yellow, red, turquoise, and black.) It would be awesome if California used that idea to develop much nicer license plate designs, and each one could have their own unique sequence associated with it. The more license plate designs, the more initial supply there is. The state of California ***must*** come up with *something* cool and unique, right? Let's get rid of this ugly red-cursive-on-white design, and use the plates to show off some of California's awesome features and culture.