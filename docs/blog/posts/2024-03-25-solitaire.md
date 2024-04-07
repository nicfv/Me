---
date:
  created: 2024-03-25
categories:
  - Random
tags:
  - math
  - game theory
---
# Winning at Solitaire

I've been playing a lot of solitaire (Klondike 3) on my phone recently. My app has a timer, for some reason. It made me come up with some funny ideas like doing a solitaire speedrun. To my delight, it [already exists](https://www.speedrun.com/solitaire)! It's become a mild addiction, but this game has made me come up with an interesting question. How likely are you to win a game of solitaire? What is the maximum possible win rate that the best solitaire player can have?

<!-- more -->

## Intro

Everyone knows the game solitaire. It's a card game for 1 person to play with relatively simple rules, that was probably pre-installed on your old Windows PC. But surprisingly, it can be a very difficult game, because it's highly luck-based. In fact, beyond just spotting the valid moves, there is little skill involved. The main user input comes from:

1. Whether to actually make the move or not
1. In the rare case that 2 legal moves show up, which one (usually, at random) to take

So most of the game can be determined from the initial starting point - how the deck is shuffled.

## A Big Number

Okay, so how many starting possibilities are there for solitaire? There are 52 cards in a standard deck. Let's assume the first card placed can be any one of those 52 cards. The second card can be any one of the 51 remaining cards, and so on. You might have already caught the pattern, which is this:

$$
N = 52 \times 51 \times \dots \times 1 = 52! \approx 8 \times 10^{67}
$$

That's about 8 with 67 zeroes after it. Just for fun, that's this number here:

80,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000,000

That doesn't seem *that* big, right? It can fit on one line. Well, just how big is $8 \times 10^{67}$? What if we could shuffle the deck once every second for the entire life of the universe - how many times would we reach that number? The universe is just shy of 14 billion years old. In seconds, that is:

$$
14 \times 10^{9} \times 365.25 \times 24 \times 60^{2} = 4.4 \times 10^{17} \text{sec}
$$

Or this number:

440,000,000,000,000,000 seconds

Not even close to 1% of $8 \times 10^{67}$. If we had a supercomputer that could shuffle the deck one trillion times every second since the dawn of the universe, that would get us up to this number:

440,000,000,000,000,000,000,000,000,000 shuffles

Still absolutely nothing compared to $52!$. And keep in mind, $52!$ is just the *starting* positions... meaning that there is *way* more possible games that could be played! So there's absolutely no way we're going to be able to brute force this problem.

## Bigger Assumptions

In order to win the game of solitaire, your deck needs to be shuffled in a particular way to even allow you the chance of winning. Once you have no legal moves left (unless you beat the game) then that's game over (one way or another!) There is also a possibility of having no legal moves at the very beginning of the game, which stinks.

We're going to have to make some assumptions to determine what the odds are of this not happening. First, we'll forget the fact that there are 4 suits and just focus on two of them. The order of the card colors and values has a much higher importance than the suit itself. So there are now only 26 cards to worry about - 13 red, and 13 black.

It's good to have about an even distribution of red and black cards throughout the deck. If red and black cards are split into clumps at the beginning and end, it makes the game much more difficult. To avoid doing the math, I ended up writing a simple script to shuffle a stack of 26 cards and process through each result. I applied these rules to determine if the game is lost:

- At least 6 (23%) consecutive cards of the same color
- At least 13 (50%) "order resets" (the next card has a lower value than the previous card)

## One Million Shuffles

From running the simulation one million times, I got about an 18% failure rate from colors alone, and about a 37% failure rate from the card ordering. 

In a perfect world, if **both** of these conditions need to be present in order to lose a game, your lose rate drops to 7%. (Win rate of 93%!)

Unfortunately, only one of these conditions needs to be met to ruin your game. If **only one** of these conditions needs to be true in order to lose a game, your win rate turns into:

$$
W = (1-L_{1})(1-L_{2}) = (1-0.18)(1-0.37) = 52\%
$$

Poetically, a perfect win rate under these assumptions is 52%! My exclamation mark is of pure excitement - not a factorial this time.

---

How does that check out? According to [this source](https://solitaired.com/odds-of-winning-solitaire), their players win Klondike 3 about 11% of the time. I don't know how these statistics are measured, but at least I am in the general ballpark. Their reported win rate might also be pessimistic, since many players may start a game and not finish it, clicked on the wrong game, or simply not know how to play. Also, my number is a "theoretical maximum." Whatever it is, it doesn't matter anymore because this is the end of the story.