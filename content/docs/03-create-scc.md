---
title: Create SCC
---

Create SCC is a higher-order function just like Redux `connect`. It connects your component to the state and the controller. The state is created locally for the component.

```jsx
createSCC({ state: 0, controller })(component);
```
