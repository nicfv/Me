---
date:
  created: 2022-06-07
  updated: 2024-01-07
categories:
  - Shower Thought
tags:
  - tech
  - website
  - domain
---
# Letter Combinations

## Intro

One of the first things you need in order to set up an account on any website is a unique username and a good password. One of the first things you need in order to set up a website is a unique domain name. Ideally, good usernames and domain names are easy to spell and remember.

A username (including email addresses) is a combination of letters, numbers, and sometimes special characters are also allowed. Sometimes they start with `@`. A domain name is a combination of numbers, letters, and possibly hyphens ending in a top level domain (TLD), for example, `.com`. A password *should* be a combination of letter, numbers, *and* special characters, and usually case-sensitive. Good usernames and domain names are hard to obtain, and becoming exceedingly rare. Are there any left? Also, what makes a good password?

<!-- more -->

## Name Analysis

Let an example domain be `nicfv.com` (or username `nicfv`.) The part before the `.com` contains 5 characters, which are all letters. It has a "5L" (5-letter) pattern. A domain like `12345.com` has 5 digits, so that has a "5N" pattern. Both of these examples fall under the category of 5-character patterns, or "5C". If you wanted a 1-letter (1L) domain, like `a.com` (or username `a`), there are 26 possibilities (if not case sensitive). There are only 10 possibilities for single-digit (1N) domains; and 26 + 10 = 36 possibilities combined for either one letter or one digit (1C).

### Username

Many websites have a minimum-character requirement of 4 or 5 characters, for example, to prevent people from registering an account called "a", "b", etc., but some websites do not have this requirement. This is pretty reasonable, I think, since it would be a little confusing to see someone's handle as "@a", but it would be pretty cool.

> Fun fact: I was able to register an account with a [2L username](https://test.pypi.org/user/nv/) on Python's package manager testing framework.

### Domain

It is basically impossible to own a single-character `.com` domain at this time. Several of them are already owned, and the rest of the `C.tld` and `CC.tld` domains are reserved by registries and impossible to register a new one. The only possible way to own one is to buy one of the few that still exist in the wild for likely millions of dollars. The next closest thing is a `3C.tld` domain. These are in fact possible to obtain or register, but typically are only available through resale. Three characters increases the total supply by a lot so it may be possible to register one depending on the TLD. Now we will see how many possible domains exist with different patterns and whether they can be pronounced or not.

> Fun fact: I was able to register a 3L `.us` domain, and a 2C `.cyou` domain! I let the `.cyou` one expire, since that is a weird, and unknown TLD. I am using the `.us` domain for a personal project.

### Password

Most passwords are case sensitive - raising the amount of one-character passwords to 26 * 2 + 10 = 62, not including special characters. It would be completely absurd to have a one-character password. Just like a [username](#username), most websites have minimum password requirements as well, that require at the least a minimum number of characters, sometimes requiring digits and special characters as well.

## Number of Combinations

A simple formula to calculate the number of combinations for a set of characters is this, where `alphabet` is the set of available characters, and `word` is either the username, password, or domain name.

```
combos = length(alphabet) ^ length(word)
```

For example, `length(alphabet)` would be 26 for lowercase letters, 52 for lowercase or uppercase letters, and so on. It also includes the amount of special character types that can appear. This formula does not account for special cases such as "cannot begin or end with a special character." You could define a slightly more complicated formula to achieve this:

```
combos = length(alphabet) ^ 2 * [ length(alphabet) - length(special) ] ^ [ length(word) - 2 ]
```

For simplicity, I'll just use the first formula.

### Single-Character

For example, the length of the word is 1, and assuming lowercase letters and numbers, the length of the alphabet is 36.

```
combos = 36 ^ 1 = 36
```

Not super interesting, since I already explained this in [Name Analysis](#name-analysis).

### Two-Character

Here, the length of the word is 2, and assume the length of the alphabet is 36 again.

```
combos = 36 ^ 2 = 1296
```

With only 2 characters, using only lowercase and numbers, there are already 1,296 combinations! Still an awful password, but if you're looking for a 2-character username on a not-well-known site, maybe you'll find some luck here. I mentioned in [Domain](#domain) that any unregistered (.com) domains in this range are still reserved by registrars, so keep looking.

### Three-Character

This is where things start to ramp up quickly. There would be over 46 thousand combinations of usernames (assuming no special characters.)

```
combos = 36 ^ 3 = 46656
```

Things get a little more interesting with registering domains too - starting with 3 characters and above, you can introduce... the hyphen! It cannot be the first or last character, only in the middle. So there are actually almost 48 thousand possible 3C (.com) domain names!

```
combos = 36 ^ 2 * (36 + 1) = 47952
```

If you wanted something "pronounceable", like a consonant-vowel-consonant (CVC), that would greatly limit your supply to around 2,000, or under 5% of the total supply at this point.

```
combos = 21 * 5 * 21 = 2205
```

As for passwords, 3C is still not enough - even with the introduction of 10 special characters.

```
length(alphabet) = 2 * 26 + 10 + 10 = 72
combos = 72 ^ 3 = 373248
```

### Four-Character

With 4 characters or more, you're cooking. Maybe with a bit of luck, your username can even have 4 letters!

```
combos = 36 ^ 4 = 1679616   # 1.7M letters + numbers
combos = 26 ^ 4 =  456976   # 0.5M letters
```

On major sites with millions of users, like Instagram, you'd have better luck with finding a longer username.

With domains, you can include the hyphen as either the 2nd or 3rd character, which increases the options a little bit.

```
combos = 36 ^ 2 * 37 ^ 2 = 1774224  # 1.77M 4C.com
```

Again, if you wanted something more pronounceable, like CVVC, CVCV, VCVC, or VCCV, that would limit your options a significant amount to around 44 thousand, or under 3% of the original supply!

```
combos = ( 21 ^ 2 * 5 ^ 2 ) * 4 = 44100   # the "4" represents the 4 "allowed" combinations
```

What about passwords? With a alphabet of 72 characters, we're looking at almost 27 million possible passwords! Better, but still easily crackable by a hacker. More on that later.

```
combos = 72 ^ 4 = 26873856
```

## Compiled Data

Here's a list of the amount of combinations for different alphabets. Here is my self-defined list of special characters, there are 30 of them:

```
specials = ~!@#$%^&*()-_+=<>,.?/\[]{}:;'"
```

| `length(word)` | Lowercase (26) | +Numbers (36) | +Uppercase (62) | +Specials (92) |
| -------------- | -------------- | ------------- | --------------- | -------------- |
| 1 | 26 | 36 | 62 | 92 |
| 2 | 676 | 1.3k | 3.84k | 8.46k |
| 3 | 17.58k | 46.66k | 238.33k | 778.69k |
| 4 | 456.98k | 1.68M | 14.78M | 71.64M |
| 5 | 11.88M | 60.47M | 916.13M | 6.59B |
| 6 | 308.92M | 2.18B | 56.8B | 606.36B |
| 7 | 8.03B | 78.36B | 3.52T | 55.78T |
| 8 | 208.83B | 2.82T | 218.34T | 5.13e+15 |
| 9 | 5.43T | 101.56T | 1.35e+16 | 4.72e+17 |
| 10 | 141.17T | 3.66e+15 | 8.39e+17 | 4.34e+19 |
| 11 | 3.67e+15 | 1.32e+17 | 5.20e+19 | 4.00e+21 |
| 12 | 9.54e+16 | 4.74e+18 | 3.23e+21 | 3.68e+23 |
| 13 | 2.48e+18 | 1.71e+20 | 2.00e+23 | 3.38e+25 |
| 14 | 6.45e+19 | 6.14e+21 | 1.24e+25 | 3.11e+27 |
| 15 | 1.68e+21 | 2.21e+23 | 7.69e+26 | 2.86e+29 |
| 16 | 4.36e+22 | 7.96e+24 | 4.77e+28 | 2.63e+31 |
| 17 | 1.13e+24 | 2.87e+26 | 2.96e+30 | 2.42e+33 |
| 18 | 2.95e+25 | 1.03e+28 | 1.83e+32 | 2.23e+35 |
| 19 | 7.66e+26 | 3.71e+29 | 1.14e+34 | 2.05e+37 |
| 20 | 1.99e+28 | 1.34e+31 | 7.04e+35 | 1.89e+39 |
| 21 | 5.18e+29 | 4.81e+32 | 4.37e+37 | 1.74e+41 |
| 22 | 1.35e+31 | 1.73e+34 | 2.71e+39 | 1.60e+43 |
| 23 | 3.50e+32 | 6.24e+35 | 1.68e+41 | 1.47e+45 |

> How to read this table: With a word length of 10 characters, using only lowercase letters (10L), there are 141.17 trillion combinations. The `e+` notation is scientific notation - for example, with 8 characters, using lowercase + numbers + uppercase + specials, there are `5.13e+15` combinations, or `5.13 * 10^15`.

## Cracking Passwords

I wrote an extremely simple script on my computer (written in JavaScript) to see how fast it could run comparison checks. I ran it with 10 billion iterations, and it completed in about 6.5 seconds, or about 1.5 million password checks per millisecond (1.5 billion checks per second).

```js
const iterations = 1e10;

const start = Date.now();

for (let i = 0; i < iterations; i++) {
    // simulate a password comparison
}

const end = Date.now();
```

I ran the same code in C, a compiled language, to see if there would be any performance improvements. Surprisingly, it did not improve much, with a top speed of about 1.8 million checks per millisecond. When I turned on compiler optimization options, the top speed jumped to nearly 4.3 million checks per millisecond (or 4.3 billion per second!)

Assuming that someone with similar hardware of mine and running a password guesser consistently would crack passwords in about this length of time. The extra factor of 2 is an average, representing that passwords can be cracked any time from the beginning of guesswork all the way until the final guess.

```
time[s] = combos / (checks per second * 2)
```

Here is the same table from [Compiled Data](#compiled-data) recalculated with time ranges to crack the password, assuming 4.3 billion guesses per second.

| `length(word)` | Lowercase (26) | +Numbers (36) | +Uppercase (62) | +Specials (92) |
| -------------- | -------------- | ------------- | --------------- | -------------- |
| 1 | Instant | Instant | Instant | Instant |
| 2 | Instant | Instant | Instant | Instant |
| 3 | Instant | Instant | Instant | Instant |
| 4 | Instant | Instant | Instant | Instant |
| 5 | Instant | Instant | Instant | 1s |
| 6 | Instant | Instant | 7s | 1m |
| 7 | 1s | 9s | 7m | 2h |
| 8 | 24s | 5m | 7h | 7d |
| 9 | 11m | 3h | 18d | 2y |
| 10 | 5h | 5d | 3y | 160y |
| 11 | 5d | 177d | 192y | 14.73ky |
| 12 | 128d | 17y | 11.89ky | 1.35My |
| 13 | 9y | 629y | 737.04ky | 124.63My |
| 14 | 238y | 22.63ky | 45.7My | 11.47By |
| 15 | 6.18ky | 814.58ky | 2.83By | 1.05Ty |
| 16 | 160.68ky | 29.32My | 175.66By | 97.05Ty |
| 17 | 4.18My | 1.06By | 10.89Ty | Eternity |
| 18 | 108.62My | 38.01By | 675.22Ty | Eternity |
| 19 | 2.82By | 1.37Ty | Eternity | Eternity |
| 20 | 73.43By | 49.25Ty | Eternity | Eternity |
| 21 | 1.91Ty | Eternity | Eternity | Eternity |
| 22 | 49.64Ty | Eternity | Eternity | Eternity |
| 23 | Eternity | Eternity | Eternity | Eternity |

Anything less than 0.5 seconds I marked as "instant", and anything over 1,000 trillion years I marked as "eternity". As reference, our universe is less than 14 billion years old. After 23 characters, it takes an eternity regardless of what type of alphabet is used.

These times can be massively improved, however. One, someone can simply be using much better hardware than I am. Two, the code itself can be greatly improved by using the idea of parallelism, which can essentially run multiple tasks at once in parallel. This will divide the time by the number of parallel tasks.

## Conclusion

For finding good usernames or domain names, 7 characters with only lowercase letters is enough for at least 1 unique name per human alive on Earth. If you're lucky, or using a website (or registering from a TLD) with only hundreds, or thousands of other users, you may be able to find a shorter name. If you want a stricter pattern with consonants and vowels, you may be limiting yourself to just 3-5% of the available supply.

Regarding passwords, it is well known that longer passwords using all types of characters are the hardest to crack. Luckily, even if someone guesses your password with a password generator, most websites will only allow a certain number of password attempts before locking your account, and then only you should be able to unlock it. With the development of better hardware, AI, and quantum computers, make sure that your passwords are very secure.