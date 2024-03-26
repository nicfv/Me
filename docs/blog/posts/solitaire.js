const colors = [
    'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R', 'R',
    'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B',
];

const values = [
    13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
    13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
];

function shuffle(deck = []) {
    const shuffled = [],
        _deck = deck.slice();
    while (_deck.length) {
        shuffled.push(..._deck.splice(Math.floor(Math.random() * _deck.length), 1));
    }
    return shuffled;
}

// A color shuffle is bad when
// there are at least 6 consecutive
// cards of the same color
function isColorBad(deck = []) {
    let last = '',
        consecutive = 0;
    for (let color of deck) {
        if (color === last) {
            if (++consecutive >= 6) {
                return true;
            }
        } else {
            consecutive = 1;
            last = color;
        }
    }
    return false;
}

// A value shuffle is bad when
// there
function isValuesBad(deck = []) {
    let last = 0,
        resets = 0;
    for (let value of deck) {
        if (value < last) {
            resets++;
        }
        last = value;
    }
    return (resets >= 13);
}

const iter = 1e6;
let colors_bad = 0,
    values_bad = 0;
for (let i = 0; i < iter; i++) {
    const cshuf = shuffle(colors),
        vshuf = shuffle(values);
    colors_bad += isColorBad(cshuf);
    values_bad += isValuesBad(vshuf);
}
console.log(colors_bad / iter * 100, values_bad / iter * 100);