# Pokemon Card War III

Do you think my card game rules were balanced? Let's find out by simulating 100,000 games using the [program](./2026-10-29-pokemon-card-code.md) I wrote.

**Read more:** [\#1](./2026-10-24-pokemon-cards.md) | [\#2](./2026-10-29-pokemon-card-code.md) | \#3

## Hypothesis

First, my predictions. I hypothesize that all cards are relatively balanced, with no favor towards cards that have 3 strengths and 3 weaknesses vs. cards with only 1 strength and 1 weakness.

If a card has more strengths than weaknesses, it should be favored more than other cards. Vice-versa if a card has more weaknesses than strengths.

A player with more stronger cards in imbalanced rulesets should also be able to win the game faster.

Lastly, I predict that games with rulesets containing more "netural" matchups should on average last longer and vice-versa for games with rulesets containing less "neutral" matchups.

## Methodology

I modified my program in order to output a `.csv` (comma-separated value) file which can easily be read in Excel or Google Sheets for data analysis. Each row was the output of a single game, and each column was the starting number of cards that the winning player had of each type. The first column was the number of turns it took that player to win the game.

I created a template in Google Sheets where I could upload that file, and it would take an average and standard deviation of each card count and the turn number. Additionally, it would plot a histogram for each card type appearing in winning players' hands.

I ran the simulation for 10,000 games (originally I ran it to completion for 100,000, but it was too long to do this for other runs so I shortened it.) For my [deck](./2026-10-24-pokemon-cards.md#the-deck) and [rules](./2026-10-24-pokemon-cards.md#the-rules), games took an average of a whopping 400 turns to complete! I got a completely unexpected histogram which at first glance looked all over the place. On closer look, each card type had a histogram showing a normal distribution or a bell curve. Each bell curve had different peaks. At first, this looked like a telltale sign that certain cards were more "powerful" than others. Here are my full results:

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

So weird! Why would fire cards show up on average 6.492 times in winning players hands, but metal cards only show up 3.491 times? Golly, that looks pretty close to 6.5 and 3.5 respectively. Wait a minute, how many total fire and metal cards did I have to begin with?

And then the lightbulb turned on. These numbers are basically just the total counts for each card type divided by the number of players (in this case, 2.) If I really want to get a good idea whether any cards are stronger, I need to normalize the counts for each card type.

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

It's also good news to see that the weighted averages were also all around 5 cards per hand, meaning that games weren't necessarily won quicker with any certain card type.

## Hypothesis Testing

Now to make sure that cards with more strengths and less resistances are favored more, I arbitrarily picked the *Darkness* type to be strong against *Grass*, *Fire*, and *Water*. Not only should this favor the *Darkness* type, but the other cards with the extra weakness should appear less often in winning hands.

Despite all the added strength, the difference was small but noticeable. There were an average of **5.137** cards of the *Darkness* type in winning decks, or **5.282** cards when weighted for game duration. The weaker cards had much slighter deviations. For example, *Fire* cards were an average of **4.963** cards on average, or **4.934** cards on weighted average.

It's good to see that the weighted average was even higher. That means that games that were ended faster had winning hands which contained more starting *Darkness* cards.

## Unfair Testing

To really drive this home, I gamed the system. I forced player 1 to always start with all 10 *Darkness* cards, and player 2 to start with none of them. (Sorry, player 2!) To keep the starting hand sizes balanced, I gave player 2 all of the *Metal* cards to begin with.

I then ran the simulation for another 10,000 games and you could really see the results this time. I'll share them in a different format.

| Player | Win \% | Average Turns to Win |
| ------ | ------ | --------------------:|
| 1 | 65.7\% | 478.289 |
| 2 | 34.3\% | 701.645 |

With these rules and unfair starting hands, player 1 won nearly twice as often as player 2, and they would win games over 200 turns faster on average.

## Adding Rules

To confirm my last hypothesis regarding average game length, I need to add more rules. I predict that by adding more rules, more often will 2 random cards have a non-neutral matchup. I predict that neutral matchups slow the game down, but honestly, I'm not sure. When several neutral matchups occur back-to-back, and then one player wins, they take *all* the cards sitting on the table. Let's find out if that's true.

To keep the game balanced, I added the following matchups:

- *Water* beats *Metal*
- *Lightning* beats *Metal*
- *Metal* beats *Grass*
- *Metal* beats *Darkness*
- *Grass* beats *Lightning*
- *Darkness* beats *Water*

You can see that an equal number of strengths and weaknesses have been added per each of these types. For example, *Metal* gained 2 strengths (*Grass*, *Darkness*) but also 2 weaknesses (*Water*, *Lightning*). All the other types here gained one strength and one weakness.

First, let's get a baseline with our standard matchup table and then implement those extra matchups to determine if that had any effect on the average number of turns to end the game. I've also modified my program to output the total number of neutral matchups per game.

| Type | Turns | Neutrals | Neutral \% |
| ---- | ----- | -------- | ---------- |
| Sparse matchups | 179.613 | 133.679 | 74.4\% |
| Standard matchups | 404.082 | 218.735 | 54.1\% |
| Extra matchups | 632.693 | 243.933 | 38.6\% |

> After the fact, I also did a run of another ruleset where each type had exactly one weakness and one strength, to reduce the number of matchups.

This one actually surprised me! It's clear that the fewer matchups there are, the faster the games will play out! I suppose this does make sense, because of what I mentioned earlier.

To double-check, I simulated a single game on debug mode to watch it play out, and there were several instances where one of the players would pick up 20 or more cards off the table. That particular game ended with 18 cards sitting on the table, and one the players' hands running empty.

> That sounds like another statistic I should output...

## Conclusion

So, the good news is, the rules I had created originally were pretty well-balanced! Unfortunately, if two people were to actually sit down and play that game, it could take hundreds of turns lasting several hours. Also, you have to remember all the matchups, too.

Fortunately, if you get rid of some of the matchups (as long as you keep the number of strengths and weaknesses per type consistent) then your game could go by much quicker. Plus, you'd have less rules to remember!

Have fun!