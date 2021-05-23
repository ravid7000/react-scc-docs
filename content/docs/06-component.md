---
title: Component
---

It is a React functional component, which receives props, state and actions from controller.

```js
function Component({ state, ctrlValue, ...props }) {
  // return jsx
}
```

- `state` is reserved name prop for the Component, which is passed by createSCC hoc. `state` variable consists the value of reactive state i.e `state.get()`. So it is not possible to perform `state.update()`, `state.set()` inside component.

- `ctrlValue` is also reserved name for the prop. It is returned by controller.

```jsx
// form.jsx
const controller = ({ state }) => {
  return {
    handleInput: (e) => {
      state.set(e.target.value);
    }
  }
}

const component = ({ state, ctrlValue, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input value={state} onChange={ctrlValue.handleInput} />
    </form>
  )
}

const Form = createSCC({ state: '', controller })(component)
```

```jsx
// App.jsx
import Form from './form';

const App = () => {
  return (
    <Form
      onSubmit={() => {
        // handle submit
      }}
    />
  )
}
```

