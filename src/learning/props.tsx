import { personProp } from "../types";

function MyComponent({ name, age }: personProp) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

const App = () => {
  return (
    <div>
      <MyComponent name="bob" age={22} />
    </div>
  );
};

export default App;
