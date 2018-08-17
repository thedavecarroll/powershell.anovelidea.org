---
title: "Posts"
permalink: /posts/
layout: archive
search: false
---

Here are all my posts.

<h2>Posts</h2>
{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}