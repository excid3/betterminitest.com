---
title: Better Spec 2
date: 2021-02-18T04:47:53.442Z
---

just a tip about minitest.

**BAD**

```ruby
  def test_that_it_will_not_blend
    refute_match /^no/i, @meme.will_it_blend?
  end
```

**GOOD**

```ruby
  def test_that_kitty_can_eat
    assert_equal "OHAI!", @meme.i_can_has_cheezburger?
  end
```
