---
title: Reactive State
---

The state is a reactive state, which means the state follows publisher, subscriber methods. 

```js
// Partially update the state
state.update(prevState => {
  return {
    ...prevState,
    ...newState,
  }
})

// subscribe to state
const unsubscribe = state.subscribe((newState) => {
  // consume new state
})

// Get current value of state
state.get(); // 0

// Reset state
state.set(0);
```
