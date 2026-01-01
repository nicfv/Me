---
layout: base.html
title: Nicolas Ventura
---
## Recent Posts
{% assign recent = collections.post | reverse | slice:0,5 %}
{% for post in recent %}
{% include 'post.md' post:post %}
{% endfor %}