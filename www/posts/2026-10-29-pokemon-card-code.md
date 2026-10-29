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

## Programming Logic

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

Lastly, I had to create some more functions that would help me in simulating the actual game. For example:

- `build()` composes a `Deck` from `Counts` (remember those types from earlier?)
- `count()` decomposes `Deck` back into `Counts` (I needed this for my data analysis)
- 