# Pokemon Card War

At a flea market yesterday, I bought someone's entire (well, the stuff they didn't want) Pokemon card collection for a mere \$10! Most of the several hundred cards were legitimate Pokemon, with a handful of trainer cards, energy, and other random playing cards that must have found their way into the collection through the years.

My girlfriend and I each set aside a stack of cards we wanted, and divided the rest to give to friends for Christmas. I kept several holographic cards including a Pikachu card and Gastly. I also kept a few legendaries such as Latios, Darkrai, and Yveltal.

After dividing up all the cards, only the trainer cards and energy cards were left. Except for a few holographic ones, I decided to donate all the trainer cards to Goodwill but I held onto the energy cards. I am formulating an idea in the back of my mind for a use of these cards.

You know the simple, long, and boring card game War? There have been several variations of this game such as Speed, Slap Jack, and Egyptian Ratscrew. I figure that I could come up with my own variation of this using these energy cards!

## The Deck

First I want to total up my deck just to take inventory.

| Type | Also used for | Count |
| ---- | ------------- |-----:|
| Fighting | Rock, Ground | 8 |
| Fire | | 13 |
| Psychic | Poison, Dark, Ghost | 10 |
| Water | Ice | 12 |
| Grass | Bug | 9 |
| Lightning | (Electric) | 9 |
| Metal | (Steel) | 7 |
| Darkness | (Dark) | 8 |
| **Total** | | **76** |

Luckily, my elemental type counts are roughly in the same ballpark. Right off the bat, I have close to double the amount of *Fire* as I do *Metal*.

## The Rules

I imagine this game to be very similar to *War*. Each player takes a card off the top of their deck. If one card "beats" the other, then that player takes both cards and adds it to the bottom of their stack. If neither card beats the other, then each player puts down another card. To win the game, one player must have all the cards, or force their opponent to run out of their cards!

However, defining what cards "beat" others is going to be tricky. With a standard deck of 52 cards, that is easy, because each card has a numeric value, 2 through 14 (assuming aces are high.) The higher value card "beats" the lower value card.

For those if you who are not familiar with Pokemon, there is no such "ace" in the game. Each elemental type has strengths and weaknesses against other types. A very common scenario is Fire-Water-Grass. Think of it like [Rock-Paper-Scissors](./2021-01-05-rps.md). Fire beats Grass, Water beats Fire, and Grass beats Water. There is no "best" type.

In the Pokemon games, there are clear-cut rules for which types are strong against other types. Look up "Type Effectiveness Chart" for the full rundown. Unfortunately, there are no clear-cut rules in the Pokemon card games, so we'll define our own based on common type matchups and common card weaknesses and resistances in the TCG.

## Card Matchups

To make a balanced game, I want to define an equal number of strengths and weaknesses for each elemental type.

For example, *Fire* beats *Grass* and loses to *Water*. In the games, *Fire* also beats *Steel*, so we'll define that matchup as well in this game. To balance it out, I want to create another weakness for *Fire*. In the games, *Rock* and *Ground* types beat *Fire*, so I'll use the *Fighting* type as *Fire*'s second weakness. So here's the summary:

| Player | Opponent | Outcome |
| ------ | -------- | ------- |
| Fire | Grass | Win |
| Fire | Metal | Win |
| Fire | Water | Lose |
| Fire | Fighting | Lose |
| Fire | *anything else* | Draw, play again |

I want to define the same set of rules for each other elemental type in the game, and I'll put the results below.

## All Matchups

This is my arbitrary table of card type matchups.

| You -> | Fighting | Fire | Psychic | Water | Grass | Lightning | Metal | Darkness |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Fighting  | - | L | W | W | W | L |   | L |
| Fire      | W | - |   | W | L |   | L |   |
| Psychic   | L |   | - |   | L |   | W | W |
| Water     | L | L |   | - | W | W |   |   |
| Grass     | L | W | W | L | - |   |   |   |
| Lightning | W |   |   | L |   | - |   |   |
| Metal     |   | W | L |   |   |   | - |   |
| Darkness  | W |   | L |   |   |   |   | - |

> **How to read this table:** You play the card on the top row. Your opponent plays the card in the first column. Look at the cell where your row and column meet. If it says `W`, then you win and pick up the cards. If it says `L`, then you lose and your opponent picks up the cards. Otherwise, you both play a second card.