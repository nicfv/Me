# Pokemon Card War II

I built a simulator for playing my proposed [Pokemon War](./2026-10-24-pokemon-cards.md) card game! This allows me to fine-tune the rules and card amounts to balance the game. Man, I have an unhealthy obsession with programming... (TypeScript especially.) Let me show you how I built it and then let's cover the results!

## Transfer Real-World Objects into Code

The best way to tackle a problem like this is to translate real-world objects and types into programming structures first, before diving into any sort of logic. I started out with the most basic stuff first - defining elemental types and matchup outcomes.

```ts
type Elemental = 'Fighting' | 'Fire' | 'Psychic' | 'Water' | 'Grass' | 'Lightning' | 'Metal' | 'Darkness';
type Outcome = 'Win' | 'Loss' | 'Neutral';
```

`Elemental` is pretty self-explanatory, and `Outcome` simply represents whether one elemental type beats another. So far, it's pretty easy to understand. Next, I defined collections of cards.

```ts
type Deck = Elemental[];
type Hands = Deck[];
```

These are just "helper" types that I can reference in code later. One `Deck` is multiple `Elemental` (cards) and `Hands` is multiple `Decks` (or collections of cards - it doesn't necessarily reference a full deck.)

Finally, I wanted to be able to define how many of each card type I have. This one will require some explaining since it uses some of TypeScript's native types.

```ts
type Counts = Partial<Record<Elemental, number>>;
```

`Counts` maps `Elemental` values to a `number` (being the total of that card type in the deck). `Record` creates an entry for each mapping. `Partial` just means that each entry is optional. This is best shown with an example. If you recall, these are exactly the numbers from [my actual deck](./2026-10-24-pokemon-cards.md#the-deck).

```ts
const counts: Counts = {
    'Fighting': 8,
    'Fire': 13,
    'Psychic': 10,
    'Water': 12,
    'Grass': 9,
    'Lightning': 9,
    'Metal': 7,
    'Darkness': 8,
};
```

I'm starting to get a bit far into the details here, so I'm going to move along to the logic.

## Programming the Matchups

One thing I'd like to highlight is the [matchup table](./2026-10-24-pokemon-cards.md#all-matchups). I had to devise a clever way to translate this into code and get an `Outcome` for any matchup. This is one of the only two things I used AI to help me architect.

AI suggested a "beats" table, because in this case, there is no reason to track weaknesses. Let's say that *Fire* beats *Grass*, so that **strictly** means that *Grass* loses to *Fire*. We already have that information. So, this is what I came up with.

```ts
const beats: Record<Elemental, readonly Elemental[]> = {
    'Fighting': ['Fire', 'Lightning', 'Darkness'],
    'Fire': ['Grass', 'Metal'],
    'Psychic': ['Fighting', 'Grass'],
    'Water': ['Fighting', 'Fire'],
    'Grass': ['Fighting', 'Water'],
    'Lightning': ['Water'],
    'Metal': ['Psychic'],
    'Darkness': ['Psychic'],
};
```

In order to actually get a matchup outcome, you need to check if a pairing exists in the `beats` table. If the defender is beaten by the attacker, you should get `Win` outcome. If the opposite is true, you should get a `Lose` outcome. If no matchup exists, you should get a `Neutral` outcome.

```ts
function getOutcome(attacker: Elemental, defender: Elemental): Outcome {
    if (beats[attacker].includes(defender)) {
        return 'Win';
    }
    if (beats[defender].includes(attacker)) {
        return 'Loss';
    }
    return 'Neutral';
}
```

Confused yet?

## Deck-Building Functions

Lastly, I had to create some more functions that would help me in simulating the actual game:

- `build(counts)` composes a `Deck` from `Counts` (remember those types from earlier?)
- `count(deck)` decomposes `Deck` back into `Counts` (useful for data analysis)
- `shuffle(deck)` shuffles a `Deck` (I know how to write this, but used AI to help optimize it)
- `deal(n)` deals the deck to `n` players as evenly as possible

At this point I had all the tools I needed to simulate the game.

## Game Rules

The [rules](./2026-10-24-pokemon-cards.md#the-rules) are simple.

1. Shuffle and deal the full deck
1. Each player plays a card
1. If one card beats another, then that player picks up all of the cards on the table and adds it to the bottom of their deck
1. If neither card beats the other, then each player plays one more card
1. When one player has no cards left, the other player wins

I'm going to spare you the details, but I essentially programmed these rules exactly to play through sequentially until the game ends. Then I modified the simulator to play through thousands of games and output the results to a file. I tracked the number of turns played and the winning player's starting hand.

## The Real Bugs were the Bugs we made Along the Way

When dealing with loops in programming, if you're not careful, you can easily get your program stuck in an endless loop. One such time that happened and I couldn't figure out why for the longest time. It turns out, somewhere down the line I had accidentally set both players' hands to the same hand. So basically, the players would draw from the same hand and then immediately put both cards back to the bottom of the same hand! Which is comical to think about in real life.

When using AI, less bugs are created, which is objectively a good thing. But at the same time, squashing bugs is a badge of honor for programmers! And, you get to use your brain and solve a complex puzzle. Nothing is more satisfying then coming up with a solution to (any type of) problem you're having. Not just in programming. Stay tuned for the results!