---
title: Life Cycles
---

Controller function has access to these component life cycle methods.

- `onMount`: This method is called after component has mounted. Similar to `useEffect(() => {}, [])` with empty list of dependency.

```js
onMount(() => {
  // call an api or subscribe to other state or add event listener
})
```

This method also has `cleanup` function similar to `useEffect`, which serve the purpose of `onUnmount`.

```js
onMount(() => {
  // call an api or subscribe to other state or add event listener
  return () => {
    // cleanup
  }
})
```

- `beforeUpdate`: This method is called just before updating the component. This method also receives next props. It is also called if component props are changed.

```js
beforeUpdate((nextProps) => {})
```

- `afterUpdate`: This method is called just after react commits changes to DOM. Similar to `useEffect(() => {})` without any dependency. It also receives `nextProps`.

```js
afterUpdate((nextProps) => {})
```
