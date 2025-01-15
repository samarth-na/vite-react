---
id: useState
aliases: []
tags: []
---

### Key Points to Remember

1. Always use `setState` to update the state.
2. Use the functional updater (`setState((prev) => ...)`) if the new state depends on the current state.
3. Avoid unnecessary intermediate functions like `changeState()` unless there’s additional logic.
4. State updates are asynchronous, so relying on `state` immediately after calling `setState` may lead to unexpected results.

---

#### 1. Declaring the State

```tsx
const [state, setState] = useState(initialValue);
```

Here, `state` is the current state value, and `setState` is the function used to update it.

---

#### 2. Updating the State

There are **two main ways** to update the state:

1. **Passing a new value directly:**

   ```tsx
   setState(newValue);
   ```

2. **Using a function to compute the new state based on the previous state:**
   ```tsx
   setState((prevState) => newState);
   ```

The second method is especially useful when the new state depends on the old state (e.g., incrementing a counter).

---

#### 3. Using the State in JSX

When using the state in JSX, ensure you trigger state updates properly. Let’s go through your examples:

1. **Triggering a state update with a function:**

   ```tsx
   function changeState() {
     setState((prev) => newValue);
   };
   <tag some_event={changeState}></tag>;
   ```

2. **Directly returning the new state (not recommended):**

   ```tsx
   const changeState = () => newValue;

   <tag some_event={() => setState(changeState())}></tag>;
   ```

   > This is valid but not idiomatic. It’s better to directly update the state within the `setState` call, avoiding an intermediate function like `changeState`.

3. **Using an inline arrow function:**

   ```tsx
   <tag some_event={() => setState(newValue)}></tag>
   ```

---

### Example Code

Here’s a refined version of your code:


```tsx
import { useState } from "react";

export function Component() {
  const [state, setState] = useState("initial value");

  function changeStatefunction() {
    // Compute new value
    const newValue = "updated value";

    // Update state using setState
    setState(newValue); // or setState((prev) => newValue);

    // or do both in one line
    setState("updated value"); // or setState((prev) => newValue);
    setState((state) => "updated value"); // or setState((prev) => newValue);
  }

  function returnChangeState(): string {
    const newValue = "return value";
    return newValue;
  }

  return (
    <>
      {/* Using a function to handle updates */}
      <div onClick={changeStatefunction}></div>
      <div onClick={() => setState(returnChangeState())}></div>

      {/* Directly invoking state update */}
      <div onClick={() => setState("direct value")}></div>
      <div onClick={() => setState(() => "arrow function value")}></div>

      {/* Rendering the current state */}
      <div>{state}</div>
    </>
  );
}
```


---


psudo code

```
function(){
	const [state, setState ] = useState(initial_value)

    function changeState(){
        NEW_STATE = state change

        a setstate(NEW_STATE)
        a setState( (state)=> NEW_STATE )
    }

    function returnChangeState(){
        NEW_STATE = state change
        b return NEW_STATE
    }
    
    return (
    <>
	a <tag some_event={ changeStatefunction }></tag>           | best most simple way i live this
    b <tag some_event={setState( returnChangeState() )}></tag> | a bit complex still good 

    c <tag some_event={() => setState( NEW_STATE )}></tag>     | this only works in fantasy 
    d <tag some_event={() => setState(()=> NEW_STATE )}></tag> | over fucking complicated 
    <tag> {state} </tag>
    </>
    )

}
```
