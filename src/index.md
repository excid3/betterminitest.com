---
layout: page
title: What is Better Minitest
---

Better Minitest is a collection of examples and best practices for using Minitest.

<ul>
  <% site.posts.docs.each do |post| %>
    <li>
      <a href="<%= post.url %>"><%= post.title %></a>
    </li>
  <% end %>
</ul>
