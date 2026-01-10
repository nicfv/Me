# Tools

Here is a collection of software tools I have made for various purposes. Each one has a specific application which I needed at some point.

{% for tool in tools %}
{%- if tool.head %}
## {{ tool.head }}
{% endif -%}
- [**{{ tool.name }}**]({{ tool.url }}) - *{{ tool.about }}*
{% endfor %}
