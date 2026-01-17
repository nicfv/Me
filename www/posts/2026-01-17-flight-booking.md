# Flight Booking

When you book a flight, you receive a 6-or-so digit confirmation number that is used to check in before boarding. You can also use the confirmation number to modify your flight details such as changing your seat, requesting upgrades, and even cancel your flight completely. The airline puts no effort into hiding this code. In fact, if you want to share your itinerary, your confirmation code will be right on the email! Being able to modify your flight with just the confirmation code is a really unsafe practice that I think travelers ought to be able to opt-out of.

## Authentication

You need two pieces of information to modify your flight details - the traveler's last name, and the confirmation code. No username or password, email link, or one-time SMS codes are required. If a malicious actor wanted to cancel my flight, or attempt to charge extras onto my credit card, how secure is this method?

Well, the traveler's last name is completely public, so there's no hiding that. This provides no security on its own, but I argue it does add some security when layered onto the confirmation code.

The confirmation code, at least from what I can tell, is a random string of 6 numbers and letters. The letters are not case-sensitive. That means there are just over 2 billion combinations for this confirmation code.

$$(10+26)^{6} \approx 2.2 \times 10^{9}$$

## Program

I produced a simple code to generate all possible combinations.

```js
// Start the timer and compute the maximum combinations
const START = Date.now();
const MAX = 36 ** 6;

// Generate all combinations for the confirmation code
for (let i = 0; i < MAX; i++) {
    const CONF_CODE = i
        .toString(36)
        .padStart(6, '0')
        .toUpperCase();
    // Do something with CONF_CODE
    console.log(CONF_CODE);
}

// Compute the total runtime in seconds
const END = Date.now();
const DELTA = (END - START) / 1000;
console.log(DELTA);
```

## Sample output

```txt
...
4YM1HC
4YM1HD
4YM1HE
4YM1HF
4YM1HG
4YM1HH
4YM1HI
4YM1HJ
4YM1HK
4YM1HL
...
```

It was taking too long to run the whole program on my weak laptop so I just ran a subset of the confirmation code possibilities - the first 0.1% of them. That way I can run it multiple times to get an average runtime and then scale it up by a factor of 1,000 to determine the average runtime for the entire program.

## Trials

1. 2.532s
1. 2.899s
1. 2.625s
1. 2.684s
1. 2.776s
1. 2.683s

- Average sample runtime = 2.7s
- Standard deviation = 0.126s

For the entire simulation, we have to scale this up by a factor of 1,000. It would likely take anywhere from 43 minutes up to 47 minutes. Assuming some overhead let's say it will take about an hour for one complete run, on my weak laptop. "One complete run" means checking ALL possibilities of 6-digit confirmation codes.

## Conclusion

While it's fun to do math and write code, my point is, is that it's wildly insecure to use a confirmation code that isn't even attempted to be hidden, for actions such as paying for upgrades or cancelling your flight. Whoever wants to cause you damage might already know your confirmation code, but if not, it wouldn't be too hard to figure it out.

In an ideal world, travelers should be able to opt out of this and "lock" down their account so that changes may *only* be made when they are logged in with their username/email and **secure** password.
