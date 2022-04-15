# @noix/model-vue

Adapter for [@noix/model](https://github.com/AserJoker/noix-model) with [vue3](https://github.com/vuejs/core)

## Prerequisite

If you want use model, you need to wrap the component where you call related methods inside Container and use useModel/useDispatch to get the API.

```jsx
//App.jsx
export const App = () => {
  return (
    <Container models={[demo]}>
      <Counter />
    </Container>
  );
};
```

```jsx
//Counter.jsx
export const Counter = () => {
  const count = useModel("demo/count");
  const addCount = useDispatch("demo/addCount");
  return <button onClick={() => addCount()}>{count.value}</button>;
};
```

```javascript
// demo.js
export const demo = {
  name: "demo",
  state: {
    count: 0,
  },
  effect: {
    addCount() {
      this.setField("count", this.state.count + 1);
    },
  },
};
```
