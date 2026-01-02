---
title: Nicolas Ventura
pagination:
  data: collections.post
  size: 2
  alias: posts
  reverse: true
permalink: "{% if pagination.pageNumber < 1 %}/{% else %}p{{ pagination.pageNumber | plus:1 }}/{% endif %}"
---
{% assign current_page = pagination.pageNumber | plus:1 %}

[&leftarrow;]({{ pagination.previousPageHref }})
Page {{ current_page }} of {{ pagination.pages.length }}
[&rightarrow;]({{ pagination.nextPageHref }})

{% for post in posts %}
### [{{ post.data.title }}]({{ post.url }})
**{{ post.date | date_to_long_string }}** {{ post.templateContent | excerpt }} [Read more]({{ post.url }})
{% endfor %}

As of {{ 'now' | date_to_long_string }}, there are {{ collections.post.size }} posts.
