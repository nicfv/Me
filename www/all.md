---
layout: base.html
title: All Posts
pagination:
  data: collections.post
  size: 10
  alias: posts
  reverse: true
permalink: p{{ pagination.pageNumber | plus:1 }}/
---
There are currently {{ collections.post.size }} posts.

{% assign current_page = pagination.pageNumber | plus:1 %}

{% if current_page > 1 %}[&leftarrow;](/p{{ current_page | minus:1 }}){% else %}&leftarrow;{% endif %}
Page {{ current_page }} of {{ pagination.pages.length }}
{% if current_page < pagination.pages.length %}[&rightarrow;](/p{{ current_page | plus:1 }}){% else %}&rightarrow;{% endif %}

{% for post in posts %}
{% include 'post.md' post:post %}
{% endfor %}
