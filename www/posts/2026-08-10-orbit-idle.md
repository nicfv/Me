# Making Orbit Idle

**New game just dropped!** I used to love making games in the afternoons after school (or even during school) and publishing them for free to play. I've been wanting to get back into that hobby for some time, but life always gets in the way. Finally, I just sat myself down and grinded one out. Introducing, [Orbit Idle](https://app.nicfv.com/games/orbit-idle/)! Go ahead and play now, or read the boring backstory first.

## Genre

The first hurdle was coming up with what kind of game I actually want to make. Looking back, I've made (and played) several idle games, including one of the games I made at my peak: [*Idle R3volutions*](https://www.kongregate.com/en/games/ninjanic/idle-r3volutions), which was actually a remake of an older game I made called [*Revolution Idle*](https://www.kongregate.com/en/games/ninjanic/revolution-idle). In both games, you increase ring speeds where each complete ring grants you income which is compounded with all other rings.

My idea was to create something similar to *Idle R3volutions* but with a variable amount of rings. I wanted a new type of player ascension to reset the game board but add an additional ring. This became the running idea for most of development.

## Tech Stack

Both games were rather simple and neither included any assets (except for music.) *Revolution Idle* was created with simple HTML and JavaScript and *Idle R3volutions* was created with Unity3D engine and written in C#. Actually, it was available on Android/Google Play for several years, before Google required me to submit a photo of my driver's license to continue publishing apps on their Play store.

I was in high school when I published these games. Back then, I didn't even know what proper version control (e.g. Git) was, so I literally have files like `Idle Wheel.zip` and `Idle Wheel 2.zip` and so on. (In development, the game was originally called "Idle Wheel.") I shudder to think of those days. But maybe in a way, it was freeing. I developed games so fast, but maybe that can be attributed to bad software engineering practices.

Anyway, I had to decide on a technology stack for my new game. I am practically a purely TypeScript developer nowadays, so that was my obvious choice, with [Bun](./2026-01-28-bun.md) as my compiler/package manager. Of course, I now version control everything with Git/Github, with a monorepo structure for all my games.

## Development