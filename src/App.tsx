import "./index.css";

import TodoList from "./components/todo";

function App() {
  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">
        <TodoList />
      </div>
    </>
  );
}

export default App;
