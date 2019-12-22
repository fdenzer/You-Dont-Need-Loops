# You don't need loops in ES6


**[Recursion](#recursion)**

*[With higher-order functions](#higher-order-functions)*

1. [Sum](#sum-1)

## Higher-order functions

Recursion is too low-level. Not low-level in the sense of direct access to the machine but low-level in the sense of language design and abstraction. **Both loops and recursions do a poor job of signalling intent.** This is where **higher-order functions** come in. Map, filter, fold and friends package up common recursive patterns into library functions that are easier to use than direct recursion and signal intent.

### Sum

```js
const sum = xs => 
  xs.reduce((acc, x) => x + acc, 0)
sum([1,2,3])
// => 6
```

**[⬆ back to top](#quick-links)**
