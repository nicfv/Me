# Internship Experiences

Here are a few stories for some of the jobs and internships I had while a student at UC Davis. I was lucky to have experiences in several different fields.

## Berkeley Lab Facilities

My first job at Lawrence Berkeley National Laboratory was with the facilities division in 2019. I had applied through the SULI (Science Undergraduate Laboratory Internship) program. On my first day, my then mentor took me on a tour of the lab on a GEM go cart. The lab was amazing. It is a world class science laboratory surrounded by UC Berkeley on one side, and Tilden Park on the other side. It's located on a steep hillside in the Berkeley hills with a beautiful view of the bay and San Francisco, depending on the fog. Good luck finding parking there.

I was hired as an asset integrity verification engineer. One of the first things I had to do was to memorize building numbers, locations, and what they were for. There were a lot of buildings on site. Next, I was made to do equipment field surveys and interpret existing source drawings to piece together assets that made up the mechanical systems in several lab buildings. In particular, the cooling systems for air and water were of interest to my mentor. The deliverables were piping and instrumentation drawings, or airflow schematics in AutoCAD, as well as updated SmartSheet entries for each asset.

Many of the source drawings were very old and outdated which made it a difficult job. Doing field surveys sometimes rose even more questions. Being an asset integrity verification engineer wasn't the most exciting job, however I learned a lot and got a lot out of that internship. The facilities', and my mentor's, mission was to support the ongoing science of the lab, and I believe I contributed to that effort.

## Capital Games

In 2020 during the thick of the pandemic, I worked virtually for Capital Games, a studio within EA, one of the biggest game developers in the world. Capital Games' pride and joy was a mobile game called _Star Wars: Galaxy of Heroes_. Of course being a huge Star Wars fan, I started playing that game once I first heard about it. My group lead was a very nice guy, nice enough to gift me in-game items even before I was hired, which probably got me hooked on the game.

The summer that I worked for Capital Games went by very fast, but I still had the time to finish two meaningful projects. The first one was to get me introduced to the admin panel on the game server. My team needed a centralized log of administrator actions, since many of the game administrators were outsourced. An example an admin action is banning a player from the game or gifting items to a player. The main reason for this is for the Capital Games developers to ensure that the game remains fair to all players.

My other project was more long-term and it was completely up to me in terms of tech stack and visual appearance. I had to start by essentially writing a project proposal called a technical design document that outlined all the tools I was going to use and timeframe estimates for each stage in the project. My project was to show in some way the game's revenue separated by world regions.

What I did for this was create a visual heatmap of the world that updated in real-time to show in-app purchases. The color intensity would be based off of the amount of revenue, separated by country. I built the dashboard so that it was interactive; hovering or clicking on a country would show more details about the recent purchases made. I wrote some code in the game server iteslef to stream the data from the back end, which did not affect gameplay at all.

Just a week before my internship ended, the last of my code was pushed to the production stage and the big reveal was that I got to see and show my visual update in real time. It was so satisfying to see it work in production, and my only regret was that it was a fully remote internship so I could not see it on their big screens in the studio with the rest of my team.

## NERSC Systems

My second job at LBL is with NERSC (the National Energy Research Scientific Computing center) as an energy efficiency engineer starting in 2021. I didn't know much about NERSC beforehand, but it is home to some of the biggest, most powerful, and energy efficient supercomputers used for science. In fact, during the time I worked there, the NERSC-9 computer called _Perlmutter_ made 5th place in the Top500 and 7th place in the Green500. The Top500 and Green500 use an algorithm to measure the speed and power usage of the 500 most powerful supercomputers in the world. Perlmutter taking 5th and 7th place was completely unprecedented.

A group effort at NERSC is to build up and maintain a database to collect data points from around the facility, such as electrical power from panels, cooling water temperatures, cooling pump flow rates, as well as monitoring the internal status of the computers including data transfer and networking requests. The ideology was to build up this data to use to train a ML4Ops (machine learning for operations) model. Done correctly, this model would detect anomalies and help improve the overall efficiency of the NERSC facility.

One of my first projects was to validate a set of data points that we collected into the monitoring database from the BMS (building management system). This meant to validate IDs and physical units attached to each data point. I discovered that with some automation tools in the BMS, I could write a script to nearly automate this process completely. In fact, I took it a step further to add a user interface to allow the user to remove or select new points to collect in the database.

Since then, I have made several visuals for the NERSC systems group, including a self-updating dashboard of the facility's power usage effectiveness. This was extremely useful to my mentor and was shared with EEHPCWG (the energy efficient high performance computing working group). I am also working on a data visualization project that should integrate directly with the existing system at NERSC which is also my master's project at UC Davis.

The small team that I worked closely with has been some of the most trustworthy, competent people that I have ever met. They were excited to teach me what they know about NERSC and energy efficiency and were supportive of me continuing graduate school while simultaneously working. I am getting as much out of it as I can while doing my best to contribute back to their mission.

## UC Davis Teaching Assistant

My favorite undergraduate class was called _Computer Aided Mechanism Design_. Designing and simulating the linkages and other mechanisms was genuinely a lot of fun. After I was accepted as a graduate student at UC Davis, I emailed my professor for that class asking if he was looking for a new TA. Sure enough, the TA whom I had when I was in this class was now a full time professor, so I was offered the job.

_Computer Aided Mechanism Design_ was a relatively small course with 25 students, so I was the only TA. I was responsible for holding a discussion section (1 hour per week) and lab sections (3 hours per week) as well as grading all the assignments, and helping students by email outside of class hours. The professor himself was responsible for creating assignments and hosting lectures.

I worked many hours per week setting up slide decks and examples for my class sessions. I often listened in on the professor's lectures to make sure that I was on the right track with my own lesson plan. I also set up a Google Form to allow students to provide anonymous feedback on my lessons or ask questions on the material, which I made sure to cover in the next class meeting. In my class sessions, I explained the examples step by step and frequently opened the floor to questions. Since all classes were remote at this time, I recorded my classes using Zoom and made the recordings available to students so they could rewatch them at any time.

As far as grading goes, I tried to be as gentle and fair as possible. Whenever a student missed a part of a question, I would keep a log in Excel as a key for myself where I would describe the error and record how many points I deducted. I wrote explanations to the students for any missed points and also made sure that the students knew they could always come to me with questions afterwards or if I had made a mistake in grading.

Throughout the class, it was easy to see that the students were progressing. Thier final project was to write a software package to simulate a certain mechanism, in which they all did very well. It made me feel like I had accomplished what I came for.