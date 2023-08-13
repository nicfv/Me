# Domain Name Availability

## Intro

One of the first things you need in order to set up a website is a domain name. Ideally, a good one. A domain name is a combination of numbers, letters, and possibly hyphens ending in a top level domain (TLD). An example of a TLD is `.com`. Good domain names are hard to obtain. More specifically, short domain names ending in `.com` are hard to obtain. Are there any left?

## Top Level Domains

The most common TLD is `.com` but there are many others.

|TLD|Description|Attainable?|
|-|-|-|
|`.com`|Commercial|Yes|
|`.org`|Non-profit organization|Yes|
|`.net`|Network|Yes|
|`.edu`|Academic uses only|No|
|`.gov`|Issued by the US government|No|
|`.us`|US country code TLD (ccTLD)|Yes*|
|`.info`|Informational|Yes|
|:|:|:|
|`.xyz`|Generation X, Y, Z|Yes|

\*Must be a US resident or citizen.

There are other TLDs like `.flowers` but those will not be considered here.

## Name Analysis

Let an example domain be `nicfv.com`. That is 5 letters, so it has the pattern of `LLLLL.com` or `5L.com`. A domain like `12345.com` has 5 digits, so it can has the pattern of `NNNNN.com` or `5N.com`. Both of these examples fall under the category of 5-character domains, or `CCCCC.com` or `5C.com`. If you wanted a 1-letter domain, like `a.com`, there are 26 possibilities. There are only 10 possibilities for single-digit `N.com` domains; and 36 possibilities combined for either one letter or one digit. However, it is basically impossible to own a single-character `.com` domain at this time. Several of them are already owned, and the rest of the `C.tld` and `CC.tld` domains are reserved by registries and impossible to register a new one. The only possible way to own one is to buy one of the few that still exist in the wild for likely millions of dollars. The next closest thing is a `3C.tld` domain. These are in fact possible to obtain or register, but typically are only available through resale. Three characters increases the total supply by a lot so it may be possible to register one depending on the TLD. Now we will see how many possible domains exist with different patterns and whether they can be pronounced or not.

### Single-Character

Unfortunately, these domains are virtually impossible to get for any top level domain.

|Pattern|Total Amount|
|-|-|
|`L.com`|26|
|`N.com`|10|
|`C.com`|36|

### Two-Character

Like single-character domains, these are mostly registered, and it is impossible to register any new ones.

|Pattern|Total Amount|
|-|-|
|`LL.com`|676|
|`NN.com`|100|
|`CC.com`|1296|

These are the amount of domains that contain a specific pattern.

|Pattern|Total Amount|
|-|-|
|`LN.com`|260|
|`NL.com`|260|

### Three-Character

As stated before, these are possible to obtain and even register due to the higher supply.

|Pattern|Total Amount|
|-|-|
|`LLL.com`|17,576|
|`NNN.com`|1,000|
|`CCC.com`|47,952|

You might notice that the `CCC.com` total supply is not 36^3 = 46,656 but instead 47,952. This is because with 3 characters, we can use the hyphen in the middle since it cannot be at the beginning or the end of the name. Most of these domains are unpronounceable, if for example you wanted a consonant-vowel-consonant pattern (`CVC`) then that reduces the supply to only 2,205, assuming that _y_ is a consonant.

### Four-Character

There are much more of these, but `4L.com` and `4N.com`'s are still they are hard to get due to a high demand.

|Pattern|Total Amount|
|-|-|
|`4L.com`|457k|
|`4N.com`|10k|
|`4C.com`|1.77M|

Again, notice how the supply of `4C.com` is not 36^4 = 1.68M. This is again because of hyphenation. It is not too hard to find `4C.com`'s in 2022, but most of them don't spell anything and are worthless. A `CVCV` pattern could be pronounceable, but that limits the supply to only 6400 and still includes domains like _qije_ or _xoqu_. That supply could be doubled if a search of `CVVC` is allowed, which is just shy of 3% of the supply of `4L.com` domains. It is easier to find pronounceable `4L.net` or other TLDs.

### Five-Character

These are typically available except for key words.

|Pattern|Total Amount|
|-|-|
|`5L.com`|11.9M|
|`5N.com`|100k|
|`5C.com`|65.6M|

Anything above this is usually available except for popular words as well. At 5 letters, the supply is enough to find availability and to narrow the search to find something pronounceable.

|Pattern|Total Amount|
|-|-|
|`CVCVC.com`|232k|
|No: j, q, x, z|123k|

Requiring 3 consonants and 2 vowels leaves only about 2% of the combinations from the 5-letter sample size. Even just removing 4 letters from that subset almost halved the amount of combinations, which is about 1% of the original sample size. However, the vowels can be rearranged in a `CVCCV` or `CCVCV` pattern and possibly be pronounceable, which increases the sample size by a factor of 3, or about 3% of the supply.

## Six-Character

The following is a rough number of pronounceable combinations of 6 letters.

|Pattern|Total Amount|
|-|-|
|`5L.com`|309M|
|`5N.com`|1M|
|`5C.com`|2.4B|

Let's arbitrarily allow the following patterns to make it "pronounceable":

|3C, 3V|4C, 2V|
|-|-|
|`VCVCVC`|`CVCVCC`|
|`VCVCCV`|`CVCCVC`|
|`VCCVCV`|`CCVCVC`|
|`VCCVVC`|`CCVCCV`|
|`CVCVCV`||
|`CVCVVC`||
|`CVVCVC`||
|`CCVVCV`||
|`CCVCVV`||

There are 9 combinations with 3 vowels and 3 consonants:

9 * (26-5)^3 * 5^3 = 10.4M

There are 4 combinations with 2 vowels and 4 consonants:

4 * (26-5)^3 * 5^2 = 926k

That means the estimated total number of pronounceable 6 letter combinations is generously about 12M, since there could be other consonant-vowel patterns not listed here, but some of the combinations that would be generated from these patterns are not pronounceable and should be discounted from the list. To continue the trend, 12M is about 3% of the original 309M.

## Conclusion

In conclusion, while good and short `.com` domains may not be easily found, `.net` and `.org` may provide good alternatives. There are about 10,000 pronounceable 4-letter, 400,000 pronounceable 5-letter, and 12M pronounceable 6-letter combinations which are very rough estimates around 3% of the original set of combinations.
