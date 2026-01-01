---
layout: base.html
title: Nicolas Ventura
---
## Recent Posts
{% for post in collections.post %}
### [{{ post.data.title }}]({{ post.url }})
**{{ post.date | date_to_long_string }}** {{ post.templateContent | excerpt }} [Read more]({{ post.url }})
{% endfor %}