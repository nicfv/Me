---
pagination:
  data: collections.post
  size: 2
  alias: posts
  reverse: true
permalink: "{% if pagination.pageNumber < 1 %}/{% else %}p{{ pagination.pageNumber | plus:1 }}/{% endif %}"
---
# Nicolas Ventura
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
