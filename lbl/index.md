# Berkeley Lab

[Go Back](/)

## Facilities

My first job at Lawrence Berkeley National Laboratory was with the facilities division in 2019. I had applied through the SULI (Science Undergraduate Laboratory Internship) program. On my first day, my then mentor took me on a tour of the lab on a GEM go cart. The lab was amazing. It is a world class science laboratory surrounded by UC Berkeley on one side, and Tilden Park on the other side. It's located on a steep hillside in the Berkeley hills with a beautiful view of the bay and San Francisco, depending on the fog.

I was hired as an asset integrity verification engineer. There were a lot of buildings on site and I had to memorize building numbers, locations, and what each building was for. Next, I performed equipment field surveys and interpreted existing source drawings to piece together assets that made up the mechanical heating and cooling systems in several lab buildings. I delivered piping and instrumentation drawings and airflow schematics in AutoCAD, as well as updated SmartSheet entries for each asset.

Many of the source drawings were very old and outdated which made it a difficult job. Doing field surveys sometimes rose even more questions. Being an asset integrity verification engineer wasn't the most exciting job, however I learned a lot and got a lot out of that internship. The facilities', and my mentor's, mission was to support the ongoing science of the lab, and I believe I contributed to that effort.

![fac](./lbl_1.png)

_Me (second from right) with the 6 other facilities interns on a field survey for a water valve replacement above Berkeley Lab._

## NERSC Systems

My second job at LBL is with NERSC (the National Energy Research Scientific Computing center) as an energy efficiency engineer starting in 2021. I didn't know much about NERSC beforehand, but it is home to some of the biggest, most powerful, and energy efficient supercomputers used for science. In fact, during the time I worked there, the NERSC-9 computer called _Perlmutter_ made 5th place in the Top500 and 7th place in the Green500. The Top500 and Green500 use an algorithm to measure the speed and power usage of the 500 most powerful supercomputers in the world. Perlmutter taking 5th and 7th place was completely unprecedented.

A group effort at NERSC is to build up and maintain a database to collect data points from around the facility, such as electrical power from panels, cooling water temperatures, cooling pump flow rates, as well as monitoring the internal status of the computers including data transfer and networking requests. The ideology was to build up this data to use to train a ML4Ops (machine learning for operations) model. Done correctly, this model would detect anomalies and help improve the overall efficiency of the NERSC facility.

One of my first projects was to validate a set of data points that we collected into the monitoring database from the BMS (building management system). This meant to validate IDs and physical units attached to each data point. I discovered that with some automation tools in the BMS, I could write a script to nearly automate this process completely. In fact, I took it a step further to add a user interface to allow the user to remove or select new points to collect in the database.

Since then, I have made several visuals for the NERSC systems group, including a self-updating dashboard of the facility's power usage effectiveness. This was extremely useful to my mentor and was shared with EEHPCWG (the energy efficient high performance computing working group).

My main year-long project was building up a visual interface to plot thermophysical air properties on a psychrometric chart.  Using this tool has great benefits for HVAC (heating, ventilation, and air-conditioning), meteorological, and chemical applications. It integrates directly into a frontend program called Grafana and supports the processing and plotting of many air data points in real time.

[External link to Psychart.](https://grafana.com/grafana/plugins/ventura-psychrometric-panel/)

I really enjoy working with my team. They were excited to teach me what they know about NERSC and energy efficiency, and were supportive of me finishing graduate school. I look forward to continue working with them as a Critical Facilities Engineer!

[Go Back](/)