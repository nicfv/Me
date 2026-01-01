---
layout: base.html
title: Nicolas Ventura
---
## Recent Posts
{% assign recent = collections.post | reverse | slice:0,5 %}
{% for post in recent %}
### [{{ post.data.title }}]({{ post.url }})
**{{ post.date | date_to_long_string }}** {{ post.templateContent | excerpt }} [Read more]({{ post.url }})
{% endfor %}