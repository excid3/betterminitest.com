---
layout: page
title: Better Minitest
---

## What is this?

This is a colleciton of examples and best practices for using Minitest to test Ruby and Rails applications. It's community organized and run.

You can find the source code for [BetterMinitest.com on GitHub](https://github.com/excid3/betterminitest.com)

---

<ul class="stack">
  <% site.posts.docs.each do |post| %>
    <%= render 'post', post: post %>
  <% end %>
</ul>
