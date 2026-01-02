---
pagination:
  data: collections.post
  size: 10
  alias: posts
  reverse: true
  generatePageOnEmptyData: true
permalink: "{% if pagination.pageNumber < 1 %}/{% else %}p{{ pagination.pageNumber | plus:1 }}/{% endif %}"
---
# Nicolas (Nic) Ventura

Hello visitor, and welcome to my home page! What brings you here? My name is Nicolas (he/him), pronounced "Nikola" or just Nic. I've been working at the [NERSC](https://www.nersc.gov/) supercompute scientific user facility at [Lawrence Berkeley National Laboratory](https://www.lbl.gov/) as a data center engineer since 2022. I'm managing space usage within our data center and working towards a more efficient building control system. I love all things tech, but also running, hiking, skiing, skating, and travelling. I hope to visit all [50 states](./photos/map.md) some day, and even more places outside of the United States. I've recently gotten into photography, and set up a [website](./photos/index.md) for all my pictures. Most of my photos are taken in the beautiful Marin County of California, and my camera really does not do it any justice. Click on the buttons below or the icons in the footer to learn more. Want to chat? Send me an email by clicking the mail icon at the bottom of this page!

[![Resume](https://img.shields.io/badge/Resume-Download-teal?style=for-the-badge)](Resume.pdf){ download="Resume-Nicolas-Ventura" }
[![PE](https://img.shields.io/badge/PE%20License-7709-teal?style=for-the-badge)](https://search.dca.ca.gov/?BD=31)
[![NVM](https://img.shields.io/badge/Napa%20Valley%20Marathon-04%3A14%3A52-teal?style=for-the-badge)](https://results.svetiming.com/napa-valley-marathon/events/2023/kaiser-permanente-napa-valley-marathon/1311/entrant?share=1)

{% if pagination.previousPageHref %}
[&leftarrow;]({{ pagination.previousPageHref }})
{% else %}
&leftarrow;
{% endif -%}
Page {{ pagination.pageNumber | plus:1 }} of {{ pagination.pages.length }}
{%- if pagination.nextPageHref %}
[&rightarrow;]({{ pagination.nextPageHref }})
{% else %}
&rightarrow;
{% endif %}

{% for post in posts %}
### [{{ post.templateContent | title }}]({{ post.url }})
**{{ post.date | date_to_long_string }}** {{ post.templateContent | excerpt }} [Read more]({{ post.url }})
{% endfor %}

*As of {{ 'now' | date_to_long_string }}, there have been {{ collections.post.size }} posts published.*
