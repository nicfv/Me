# Pokemon Card War III

Do you think my card game rules were balanced? Let's find out by simulating 100,000 games using the [program](./2026-10-29-pokemon-card-code.md) I wrote.

## Hypothesis

First, my predictions. I hypothesize that all cards are relatively balanced, with no favor towards cards that have 3 strengths and 3 weaknesses vs. cards with only 1 strength and 1 weakness.

If a card has more strengths than weaknesses, it should be favored more than other cards. Vice-versa if a card has more weaknesses than strengths.

A player with more stronger cards in imbalanced rulesets should also be able to win the game faster.

Lastly, I predict that games with rulesets containing more "netural" matchups should on average last longer and vice-versa for games with rulesets containing less "neutral" matchups.

## Methodology

I modified my program in order to output a `.csv` (comma-separated value) file which can easily be read in Excel or Google Sheets for data analysis. Each row was the output of a single game, and each column was the starting number of cards that the winning player had of each type. The first column was the number of turns it took that player to win the game.

I created a template in Google Sheets where I could upload that file, and it would take an average and standard deviation of each card count and the turn number. Additionally, it would plot a histogram for each card type appearing in winning players' hands.

I ran the simulation for 10,000 games (originally I ran it to completion for 100,000, but it was too long to do this for other runs so I shortened it.) For my [deck](./2026-10-24-pokemon-cards.md#the-deck) and [rules](./2026-10-24-pokemon-cards.md#the-rules), I got a completely unexpected histogram which at first glance looked all over the place. On closer look, each histogram was a bell curve, all with different peaks. To me at first, this was a telltale sign that certain cards were more "powerful" than others. Here are my full results:

| Type | Average |
| ---- | -------:|
| Darkness | 4.002 |
| Fighting | 3.975 |
| Fire | 6.492 |
| Grass | 4.513 |
| Lightning | 4.502 |
| Metal | 3.491 |
| Psychic | 5.002 |
| Water | 6.024 |

So weird. Why would fire cards show up on average 6.492 times in winning players hands, but metal cards only show up 3.491 times? Gee, that's about 6.5 and 3.5 respectively. Wait... there's a pattern here. Do you see it?

## Validation

To make sure that this idea was correct, I re-run the simulation with 10 cards of each type in the deck. I expect to see about 5 cards per type in the winning player's hand.

I also weighted each card's average by game duration using this formula where $i$ is the game index and $n=10000$ games. This type of weighted average will give more weight to shorter games and less weight to longer games.

$$\text{average(type)}=\frac{\sum_{i=1}^{n}\left(\frac{\text{num starting cards(type)}_{i}}{\text{turns to win}_{i}}\right)}{\sum_{i=1}^{n}\left(\frac{1}{\text{turns to win}_{i}}\right)}$$

After running the simulation and importing the resulting file into my Google Sheet, I now see all the histograms line up with the peak of the bell curve around 5 cards! My exact results were:

| Type | Average | Weighted |
| ---- | -------:| --------:|
| Darkness | 5.011 | 4.998 |
| Fighting | 5.017 | 5.017 |
| Fire | 4.988 | 4.971 |
| Grass | 4.991 | 4.985 |
| Lightning | 4.961 | 4.968 |
| Metal | 5.016 | 5.037 |
| Psychic | 4.987 | 4.989 |
| Water | 5.029 | 5.036 |

## Hypothesis Testing

Now to make sure that cards with more strengths and less resistances are favored more, I arbitrarily picked the *Darkness* type to be strong against *Grass*, *Fire*, *Water*, and *Metal*. Not only should this favor the *Darkness* type, but this should show an avoidance to the other cards with the extra weakness.

Despite all the added strength, the difference was small but noticeable. There were an average of **5.2334** cards of the *Darkness* type in winning decks, or **5.4466** cards when weighted for game duration. The weaker cards had much slighter deviations.