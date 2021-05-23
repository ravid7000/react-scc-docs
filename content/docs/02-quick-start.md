---
title: Quick Start
---

The quickest way to start by building a counter component. Let's create a counter component.

```jsx
import { createSCC } from 'react-scc';

// Create a function which returns actions to update the state
const controller = ({ state }) => {
  return {
    increment: () => state.update(count => count + 1),
    decrement: () => state.update(count => count - 1),
  }
}

// Create functional component
const component = ({ state, ctrlValue }) => {
  return (
    <>
      Counter: {state}
      <button onClick={ctrlValue.increment}>+1</button>
      <button onClick={ctrlValue.decrement}>-1</button>
    </>
  );
}

const App = createSCC({ state: 0, controller })(component);

export default App;
```

Initially, this seems like lots of code to just update the counter. But this pattern will be more useful as your component grows bigger and your logic inside component will become hard to manage.

Other advantage of putting actions outside of component, those functions are created once during initialization of the component. They never redefined.

Let's build this same component using React hooks.

```jsx
const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(count => count + 1);
  }

  const decrement = () => {
    setCounter(count => count - 1);
  }

  return (
    <>
      Counter: {state}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
}
```

Now the problem with this approach. When the counter state is updated, React re-call this component to build the v-dom again, which also re-declares `increment()` and `decrement()` functions.

One way to fix this problem by using `useCallback` hook, but for that you have to add more boilerplate code. You cannot do it for all the actions.
