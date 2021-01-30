---
title: How to Test validations In Rails
created_at: 2021-01-29T21:44:30.248Z
---

I'm Batman I seek the means to fight injustice. To turn fear against those who prey on the fearful.

## Getting Started

 My anger outweights my guilt. The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.

 The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.

 I'll be standing where l belong. Between you and the peopIe of Gotham.

## Examples

```ruby
require "test_helper"
require "capybara/cuprite"

Capybara.javascript_driver = :cuprite
Capybara.register_driver(:cuprite) do |app|
  Capybara::Cuprite::Driver.new(
    app,
    window_size: [1400, 1400],
    js_errors: false,
    headless: !(ENV["WATCH"] == "true"),
    process_timeout: 5,
    browser_options: {'no-sandbox': nil}
  )
end

class ApplicationSystemTestCase < ActionDispatch::SystemTestCase
  # Watch tests execute in the browser with `WATCH=true` in your environment
  # ex: WATCH=true bin/rails test:system
  driven_by :cuprite
end
```

## Tricks and Tips

- This isn't a car. I'll be standing where l belong. Between you and the peopIe of Gotham.
- I'm not wearing hockey pads. It's not who I am underneath but what I do that defines me. This isn't a car.
- Well, you see... I'm buying this hotel and setting some new rules about the pool area.
