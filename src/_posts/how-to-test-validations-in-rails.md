---
title: How to Test validations In Rails
date: 2021-02-18T04:47:53.442Z
---

basic intro

**BAD**

```ruby
assert_redirected_to parent_child_path(parent, child)
```

**Good**

```rb
def foo
  assert_redirected_to parent_child_path(parent, child)
end
```
