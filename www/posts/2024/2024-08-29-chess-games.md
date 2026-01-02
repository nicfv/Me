---
date: 2024-08-29
categories:
  - Random
tags:
  - math
  - game theory
---
# Possible Chess Games

Without looking up the answer, how many possible games of Chess are there? Find out here in this excruciatingly long story! Do you think there are more games of Chess or atoms in the universe?

<!-- more -->

## One-Turn Games

It's easy to determine how many games of Chess there are, if only 1 move is allowed on each side. Unfortunately, the game is often played until one person gives or receives checkmate, which can be much greater than 1 turn. But for fun, how many possible games are there with only 1 move on each side?

White goes first. White can move any one of their 8 pawns 1 or 2 spaces, which is 16 possible moves. There are also 4 legal knight moves, bringing the total to 20 possible legal moves for white. For black, it's the same 20 legal moves, regardless of what white just played.

$$20_{w} \times 20_{b} = 400$$

Here are a few example games...

```
1. e4 e5

1. d4 e6

1. Nf3 Nf6
```

...and 397 others. You get the idea.

## Two-Turn Games

Things get MUCH trickier if you want to determine how many 2-turn games there are, since at this point, moves by one player can impact the legal moves for another player. For example, if `1. e4 e5` was played, and then white played `2. Bb5` (not a *great* move, but still legal), black can no longer play `2. ... b5` because white's light-squared bishop is on that tile. In *fact*, black can no longer play `2. ... d5` **or** `2. ... d6` anymore either, since their d-pawn is pinned!

## Two-Turn King's Pawn Opening

The popular starting moves `1. e4 e5` are known as the King's Pawn Opening. With that first-turn setup, white has 29 legal moves for their second turn. If white plays any of the following 23 of their 29 moves...

```
2. a3  ~
2. a4
2. b3
2. c3
2. c4
2. d3
2. f3
2. g3
2. g4
2. h3
2. h4  ~
2. Na3 ~
2. Nc3
2. Qe2
2. Qf3
2. Qg4
2. Ke2
2. Be2
2. Bd3
2. Bc4
2. Ne2
2. Nf3
2. Nh3
```

...then black can respond with any one of the same 29 legal moves that white had. The 3 moves with a tilde (`~`) mean that at least one of black's 29 legal moves leads to a capture. (It might be a terrible move for black, but the point is that it is a *possible* move.) Things get a little more tricky with the last 6 moves for white.

```
2. b4
2. d4
2. f4
2. Qh5
2. Bb5
2. Ba6
```

### 2. b4

This move blocks black's dark-squared bishop from advancing to `a3`, preventing the move `2. ... Ba3`. This means that black only has 28 legal moves.

### 2. d4

This move allows black's `e5` pawn to capture, allowing the previously-illegal move `2. ... exd4`. With this move by white, black has 30 legal moves.

### 2. f4

This is the same story as [`d4`](#2-d4), except the move `2. ... exf4` is now legal for black. Black once again has 30 legal moves.

### 2. Qh5

This move is known as the "Wayward Queen Attack." This blocks black's h-pawn from advancing 2 squares, preventing the move `2. ... h5`. Additionally, this pins black's f-pawn to `f7`, preventing both `2. ... f6` and `2. ... f5`. Black only has 26 legal moves in this position.

### 2. Bb5

This is the same scenario as [`Qh5`](#2-qh5) but on the other side of the board. Black has 26 legal moves.

### 2. Ba6

This is a very bad choice for white to play. It blocks black's a-pawn from advancing at all, but allows the capture of their light-squared bishop with `2. ... bxa6`. Black has 28 legal moves in this position.

### Summary

Here are the 6 moves by white with corresponding amount of legal responses by black.

```
2. b4  (28)
2. d4  (30)
2. f4  (30)
2. Qh5 (26)
2. Bb5 (26)
2. Ba6 (28)
```

For the King's Pawn Opening, white always has 29 legal moves to play. Black's amount of legal moves depends on what white plays.

$$23_{w} \times 29_{b} + 2_{w} \times 26_{b} + 2_{w} \times 28_{b} + 2_{w} \times 30_{b} = 835$$

With this opening *only*, there are 835 possible 2nd turns to be played. Remember, there are 399 other possible openings, and each may very well have 800 or so legal 2nd turns! **That's about 1/3 of a million possible 2-turn games!**

## Estimation

It will be incredibly difficult to to determine how many 3-turn games there are, and nearly impossible to go beyond that without an incredible amount of computing power. However, we can estimate. A formula to determine a heavily-approximated number of games could be:

$$\text{possible games} = (\text{legal moves})^{(\text{number of turns})}$$

That means we need to estimate, on average, how long a game of Chess lasts. This is the easy part, we can look at several hundred or thousand completed Chess games, and take the average of their number of turns. The more tricky, but still doable question is how many legal moves there are for a player on any random turn.

Here are the number of turns for my last 50 games:

```
51 16 32 10 15  9 28  7  4 17
 9 20 47 29 19  6 40 19 19 20
51 39  4 24 46  6 27 29 14 53
41  9 27 11 24 10 14 19 26  6
12 11 16 30 13 54 13 20 49  9
```

The average number of turns is 23. I picked a few games and a few turns from those games at random and counted up each player's number of legal moves.

```
47 27 34 29 26 40 26 44 36  6
 6  6 35 40 43 20  9 12  7  8
 3 10  2 39 39 43 21 31 25 15
```

There are about 25 legal moves on each turn, on average. This is in the same ballpark as our analysis of the first turn and the King's Pawn Opening. If we plug in these numbers into our formula, we get this.

$$25^{23} = 1.4 \times 10^{32}$$

This is using a game length of 23 turns. Games of Chess can last much longer. To get an accurate number, it might be wise to use the length of the longest possible Chess game instead of the average. Some games can last for hundreds of turns! When this happens, usually there are only a few pieces left and there are much fewer than 25 legal moves on each side. We can use a game length of 100 with 25 legal moves per turn to figure out an estimate.

$$25^{100} = 6.2 \times 10^{139}$$

This is an utterly massive number, unfathomable for humans to comprehend, much bigger than the number of atoms in the universe (about $10^{80}$). Also the universe is only $4.4 \times 10^{17}$ seconds old. Even if you played an entire game of Chess every second since the universe existed, you would not be anywhere close to playing every possible game. Do you remember my story on [Solitaire](./2024-03-25-solitaire.md)? There are $52!$ possible deck shuffles. How does that compare to our Chess-game estimate?

$$52! = 8 \times 10^{67}$$

## Conclusion

To put this in perspective, to reach every possible game of Chess, you need two decks of cards. For deck "A", you need to shuffle it over and over until you reach every possible combination of deck shuffles. Once you do, shuffle deck "B" once. And then start all over with deck "A". Keep shuffling deck "A" until you've reached every possible combination a second time, and then shuffle "B" again. Keep doing this process over and over until deck "B" has reached every possible combination of shuffles. Then, follow this deck "A"/"B" process again 100,000 times. Then, and **ONLY THEN**, will you have reached the number of possible games of Chess.

How does this compare to an online search? Apparently, in 1950, a mathematician named Claude Shannon estimated around $10^{120}$ possible games of Chess. Hey, I'm pretty close! Only off by a factor of 10 quintillion!