# Making Orbit Idle

**New game just dropped!** I used to love making games in the afternoons after school (or even during school) and publishing them for free to play. I've been wanting to get back into that hobby for some time, but life always gets in the way. Finally, I just sat myself down and grinded one out. Introducing, [Orbit Idle](https://app.nicfv.com/games/orbit-idle/)! Go ahead and play now, or read the boring backstory first.

## Genre

The first hurdle was coming up with what kind of game I actually want to make. Looking back, I've made (and played) several idle games, including one of the games I made at my peak: [*Idle R3volutions*](https://www.kongregate.com/en/games/ninjanic/idle-r3volutions), which was actually a remake of an older game I made called [*Revolution Idle*](https://www.kongregate.com/en/games/ninjanic/revolution-idle). In both games, you increase ring speeds where each complete ring grants you income which is compounded with all other rings.

My idea was to create something similar to *Idle R3volutions* but with a variable amount of rings. I wanted a new type of player ascension to reset the game board but add an additional ring. This became the running idea for most of development.

## Tech Stack

Both games were rather simple and neither included any assets (except for music.) *Revolution Idle* was created with simple HTML and JavaScript and *Idle R3volutions* was created with Unity3D engine and written in C#. Actually, it was available on Android/Google Play for several years, before Google required me to submit a photo of my driver's license to continue publishing apps on their Play store.

I was in high school when I published these games. Back then, I didn't even know what proper version control (e.g. Git) was, so I literally have files like `Idle Wheel.zip` and `Idle Wheel 2.zip` and so on. (In development, the game was originally called "Idle Wheel.") I shudder to think of those days. But maybe in a way, it was freeing. I developed games so fast, but maybe that can be attributed to bad software engineering practices.

Anyway, I had to decide on a technology stack for my new game. I am practically a purely TypeScript developer nowadays, so that was my obvious choice, using my [graphico](https://www.npmjs.com/package/graphico) engine and [Bun](./2026-01-28-bun.md) as my compiler/package manager. Of course, I now version control everything with Git/Github, with a monorepo structure for all my games.

## Development

This was honestly the fun part. I love building with code. I am proud to say that I did not use any generative AI for writing code, which not a lot of developers can say nowadays. However, I do not think it's a bad thing to use AI, in fact I [promote it](./2026-07-12-vibecode.md), but the point here wasn't to produce a game as fast as possible. I genuinely love the development process (it's like a big puzzle for me) so I decided to slog through it. Of course, I came across plenty of roadblocks like any software developer, so I did chat with LLMs occasionally to bounce ideas off, but this was few and far between and ultimately all of the published code I wrote myself.

I also tried to keep everything as organized as I could, by adding TsDoc comments to all classes and public members, and separating files by class. I also sorted files based on a metatype, for example `src/ui/**.ts` contains all of the purely UI components, like buttons and labels. It's been almost 10 years since publishing *Idle R3volutions*, and the software development practices between then and now could not be more vast.