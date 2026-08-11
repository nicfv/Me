# Making Orbit Idle

**New game just dropped!** I used to love making games in the afternoons after school (or even during school) and publishing them for free to play. I've been wanting to get back into that hobby for some time, but life always gets in the way. Finally, I just sat myself down and grinded one out. Introducing, [*Orbit Idle*](https://app.nicfv.com/games/orbit-idle/)! Go ahead and play now, or read the boring backstory first.

## Genre

The first hurdle was coming up with what kind of game I actually want to make. Looking back, I've made (and played) several idle games, including one of the games I made at my peak: [*Idle R3volutions*](https://www.kongregate.com/en/games/ninjanic/idle-r3volutions), which was actually a remake of an older game I made called [*Revolution Idle*](https://www.kongregate.com/en/games/ninjanic/revolution-idle). In both games, you increase ring speeds where each complete ring grants you income which is compounded with all other rings.

My idea was to create something similar to *Idle R3volutions* but with a variable amount of rings. I wanted a new type of player ascension to reset the game board but add an additional ring. This became the running idea for most of development.

## Tech Stack

Both games were rather simple and neither included any assets (except for music.) *Revolution Idle* was created with simple HTML and JavaScript and *Idle R3volutions* was created with Unity3D engine and written in C#. Actually, it was available on Android/Google Play for several years, before Google required me to submit a photo of my driver's license to continue publishing apps on their Play store.

I was in high school when I published these games. Back then, I didn't even know what proper version control (e.g. Git) was, so I literally have files like `Idle Wheel.zip` and `Idle Wheel 2.zip` and so on. (In development, the game was originally called "Idle Wheel.") I shudder to think of those days. But maybe in a way, it was freeing. I developed games so fast, but maybe that can be attributed to bad software engineering practices.

Anyway, I had to decide on a technology stack for my new game. I am practically a purely TypeScript developer nowadays, so that was my obvious choice, using my [`graphico`](https://www.npmjs.com/package/graphico) engine and [Bun](./2026-01-28-bun.md) as my compiler/package manager. Of course, I now version control everything with Git/Github, with a monorepo structure for all my games.

## Development

This was honestly the fun part. I love building with code. I am proud to say that I did not use any generative AI for writing code, which not a lot of developers can say nowadays. However, I do not think it's a bad thing to use AI, in fact I [promote it](./2026-07-12-vibecode.md), but the point here wasn't to produce a game as fast as possible. I genuinely love the development process (it's like a big puzzle for me) so I decided to slog through it. Of course, I came across plenty of roadblocks like any software developer, so I did chat with LLMs occasionally to bounce ideas off, but this was few and far between and ultimately all of the published code I wrote myself.

I also tried to keep everything as organized as I could, by adding TsDoc comments to all classes and public members, and separating files by class. I also sorted files based on a metatype, for example `src/ui/**.ts` contains all of the purely UI components, like buttons and labels. It's been almost 10 years since publishing *Idle R3volutions*, and the software development practices between then and now could not be more vast.

## Polishing

I don't find it as enjoyable to polish up my games as it is to actively develop new features. However, this was a crucial step in developing *Orbit Idle*. Up until this point, it was simply called "Idle Revolution 4." I know, *lame*! Part of this process included writing an interactive tutorial on how to actually play the game, at which point I started referring to the rings as *orbits*. I don't know what triggered that, but it set off a chain reaction. I realized that there was so much possibility with this, and I started rewriting `class Wheel` (one ring) as `class Orbit` to fit more of a planetary orbit.

This gave me a burst of energy as I started rewriting and refactoring bits of code to make the game more space-themed. If you know anything my game development history, you know that I **love** making space games.

- [Weird Galaxy](https://www.kongregate.com/en/games/ninjanic/weird-galaxy)
- [That One Space Game](https://www.kongregate.com/en/games/ninjanic/that-one-space-game)
- [Star Wars Wheel of Fortune](https://www.kongregate.com/en/games/ninjanic/star-wars-wheel-of-fortune)

And now I could add a new one to my portfolio: *Orbit Idle*. Honestly, this was turning out better than expected. I get to remake one of my beloved games *and* make it space-themed!

Unfortunately I had a lot more work to do to polish the game up. I want to say that this part took at least 50% of my development time, despite not really changing the game's appearance much, if at all. In this stage, I implemented the following features:

- Welcome message
- Interactive tutorial
- Save & load data in browser cache
- Autosaving
- Music & mute
- Hotkeys
- Statistics & scores
- Credits
- Custom cursor
- Game progression balancing

### Disclaimer

Regrettably, I used generative AI to generate the 30-second looping audio track for *Orbit Idle*. I would have loved to learn how to create my own tracks, but I decided that having perfect audio for this game wasn't my primary goal. I really just wanted to design and build the game myself - which I did. Plus, this is the kind of game that you mute the audio and let it run in the background, anyway. Learning how to make a good audio track and then executing on that plan would have set me back several more weeks. I clearly added a disclaimer inside the game warning that the audio track was AI-generated.

## Publishing

Finally the game was polished up, user-tested, and ready to ship! In this phase I still had a lot of work to do. I need platform(s) to publish and distribute my game!

As you might have noticed from the links to my previous games, many of them link to [Kongregate](https://www.kongregate.com/en). Kongregate used to be an excellent platform for indie developers to publish their games, and they even had a developer API that could be used to publish scores and leaderboards, and even site-wide achievements! It was the full deal. Unfortunately for us all, Kongregate decided to shift their business focus onto larger, more established games and completely remove the indie developer features and vibes.

I miss the old days of Kongregate. There was certainly a vibrant indie community, which they crushed now that they are basically a Steam clone but for flash/web games. Not to mention their generous ad revenue model.

However, not all hope is lost. In the past, I used a platform called [GameJolt](https://gamejolt.com/), and I am familiar with another one called [Itch.io](https://itch.io/), and I planned to host my games on both of those sites.

The publishing step in the game development process was another grind. I had to write out a game description, controls, hashtags, and take some screenshots, video, and even create a game thumbnail. Luckily my `graphico` library is capable of the screenshots and [video](https://youtu.be/ImNcrLvZuF0), so that part was fairly easy. For the thumbnail, I got creative and temporarily altered my game code itself to hide the UI and render the title in large font. That way, I got a very authentic and distinct image of my game. I also posted to BlueSky to gather more attention for my game.

Here are the final published results of *Orbit Idle*:

- GameJolt: [nicfv.gamejolt.io/orbit-idle](https://nicfv.gamejolt.io/orbit-idle)
- Itch.io: [nicfv.itch.io/orbit-idle](https://nicfv.itch.io/orbit-idle)

## Duration

It took me from June 30th all the way through August 9th to see this game to completion (about 6 weeks.) As a super rough estimate, let's say I spent about 4 hours total on the weekends and another 3 hours through the week, so 7 hours per week total or about 1 hour per day. This only counts development time, I probably spent nearly as much time testing my game on my phone throughout the day. That means I spent about **40 hours** total developing this game.

Could I have shortened that time by relying more heavily on AI? Possibly, but debugging AI-written code would have also been time consuming.

## Conclusion

So far, Itch.io is massively outperforming GameJolt (or maybe they track metrics differently.) After about 24 hours published, I had about **600** plays on Itch.io! On GameJolt, you ask? About 4.

### What would I do differently next time?

- I'd want to slow down and **ensure good code practices**. My code in *Orbit Idle*, which is possible some of the best I've written, is still a bit sloppy. The way I check for mouse clicks is very strange, for example. When the mouse button is pressed, I first check to see if the mouse is currently hovering over any in-game buttons (needed anyway for rendering the border around the button.) If so, then check if the left mouse button is pressed. If so, then activate the click handler for the hovered in-game button. It works, but it could be done better with a single check.
- I'd love to learn how to **make good in-game music**. This time, I took the easy way out and used AI. But I've dabbled in the past with digital music production, and I would love to pick that back up again. I would just need to pay with my time.
- Maybe tangential to game development, I want to work on a video blog or something similar to act as a **developer log** to generate interest and engagement with my game. I could incorporate any feedback directly during this process before the game is even released. I could offer things such as beta access for engaged users, and maybe even monetize my hobby.
- Lastly, I want to **incorporate the GameJolt API** next time. Similar to Kongregate, GameJolt exposes an API for developers to publish scores, leaderboards, and achievements which are shown on each user's profile. This makes the game more interactive, competitive, and addictive.

Despite these minor shortcomings, I thoroughly enjoyed making *Orbit Idle*, and I hope you enjoy playing it. Stay tuned for the next game!