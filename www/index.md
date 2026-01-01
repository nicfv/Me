---
layout: base.html
title: Hello
---
This is *just* a **test**.

<span style="color:red;">I'm red!</span>

```js
console.log('hello');
```

{{ "hello" | log }}

{% for post in collections.post %}
## [{{ post.data.title }}]({{ post.url }})
**{{ post.date | date_to_long_string }}** {{ post.templateContent | excerpt }} [Read more]({{ post.url }})
{% endfor %}