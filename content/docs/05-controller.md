---
title: Controller
---

The controller is a function which is used to write the logic for the component. It receives instance of state, component props and other arguments to control the component.

```js
function controller({ state, props, onMount, beforeUpdate, afterUpdate }) {
  // controller will persist the value of these variable
  let lastScrollPosition;
  let el;

  onMount(() => {
    // call an api
  })

  beforeUpdate(() => {
    // store a snapshot of dom element scroll position
    lastScrollPosition = el.current.scrollHeight + el.current.clientHeight
  })

  afterUpdate(() => {
    el.current.scrollTop(lastScrollPosition)
  })

  // These actions will passed to component as ctrlValue
  return {
    increment: () => state.update(count => count + 1),
    decrement: () => state.update(count => count - 1),
    elRef: ref => el = ref;
  }
}
```
