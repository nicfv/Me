# Pokemon Card War III

Do you think my card game rules were balanced? Let's find out by simulating 100,000 games using the [program](./2026-10-29-pokemon-card-code.md) I wrote.

## Hypothesis

First, my predictions. I hypothesize that all cards are relatively balanced, with no favor towards cards that have 3 strengths and 3 weaknesses vs. cards with only 1 strength and 1 weakness.

If a card has more strengths than weaknesses, it should be favored more than other cards. Vice-versa if a card has more weaknesses than strengths.

A player with more stronger cards in imbalanced rulesets should also be able to win the game faster.

Lastly, I predict that games with rulesets containing more "netural" matchups should on average last longer and vice-versa for games with rulesets containing less "neutral" matchups.

## Methodology

I modified my program in order to output a `.csv` (comma-separated value) file which can easily be read in Excel or Google Sheets for data analysis. Each row was the output of a single game, and each column was the starting number of cards that the winning player had of each type. The first column was the number of turns it took that player to win the game.

I imported that file into Google Sheets, and then took an average and standard deviation of each card count and the turn number.

With my [deck](./2026-10-24-pokemon-cards.md#the-deck) and [rules](./2026-10-24-pokemon-cards.md#the-rules),

## Validation

To see if 