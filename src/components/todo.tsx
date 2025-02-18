import { useEffect, useState } from "react";
import { Event, Item, Filter } from "../types.tsx";

function loadItems(): Item[] {
  const jsonString = localStorage.getItem("data");
  if (jsonString) {
    return JSON.parse(jsonString);
  } else {
    return [];
  }
}
function Todo(): JSX.Element {
  //
  const [inputState, setInputText] = useState<string>("");
  const [itemsState, setItems] = useState<Item[]>(loadItems());

  const [filter, setFilter] = useState<Filter>({
    remaining: false,
    completed: false,
  });

  function handleAdd(): void {
    if (inputState.trim() !== "") {
      const newItem: Item = {
        id: Date.now(),
        text: inputState,
        done: false,
      };

      const updatedItems = [...itemsState, newItem]; // Create the updated array
      setItems(updatedItems); // Update the state
      setInputText(""); // Clear the input field
    }
  }

  function handleDelete(idToDelete: number): void {
    setItems(itemsState.filter((item) => item.id !== idToDelete));
  }

  function handleInputChange(e: Event): void {
    setInputText(e.target.value);
  }
  useEffect(() => {
    console.log(itemsState);
    localStorage.setItem("data", JSON.stringify(itemsState)); // Save updated array to localStorage
  }, [itemsState]);

  useEffect(() => {
    console.log(
      !filter.completed
        ? "show remaining"
        : !filter.remaining
          ? "show completed"
          : "show all"
    );
  }, [filter]);

  return (
    <>
      <div className="flex flex-none gap-4 justify-between items-center min-w-96 flex-2">
        <input
          className="rounded border b-2"
          type="text"
          value={inputState}
          onChange={handleInputChange}
          placeholder="Add new item"
        />

        <button
          onClick={handleAdd}
          className="text-black ring-gray-300 shadow-none"
        >
          Add
        </button>
      </div>

      <FilterButtons />
      <ListHeaderText />

      <div className="space-y-2 min-w-96 max-w-96 rounder-md">
        {itemsState
          .filter(
            filter.remaining !== filter.completed
              ? (item: Item) => item.done !== filter.remaining
              : (item) => item
          )
          .map((item: Item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-2 rounded border"
            >
              <span className="block w-4/6 text-left break-words bg-white rounded">
                {item.text}
              </span>
              <input
                className="flex-none basis-1/12"
                type="checkbox"
                checked={item.done}
                value={item.id}
                //
                onChange={() =>
                  setItems(
                    itemsState.map((i) =>
                      i.id === item.id ? { ...i, done: !i.done } : i
                    )
                  )
                }
              />
              <button
                className="bg-red-500 hover:bg-red-600 focus:ring-red-500 basis-1/6"
                onClick={() => handleDelete(item.id)}
              >
                remove
              </button>
            </div>
          ))}
      </div>
      <DeleteListButton />
    </>
  );

  function ListHeaderText() {
    return (
      <div>
        {itemsState.length} {itemsState.length == 1 ? "task  " : "tasks "}
        {"remaining"}
      </div>
    );
  }

  function FilterButtons() {
    return (
      <div className="flex gap-x-4 justify-center">
        <button
          onClick={() => setFilter({ remaining: true, completed: true })}
          className={`"py-1.5  px-2.5 text-sm font-semibold text-gray-900 rounded-lg shadow-sm  hover:bg-gray-100"${filter.completed && filter.remaining ? "ring-blue-400 ring-offset-2 ring-2" : " ring-gray-300"}`}
        >
          All
        </button>
        <button
          onClick={() => setFilter({ remaining: true, completed: false })}
          className={`"py-1.5 px-2.5 text-sm font-semibold text-gray-900 rounded-md shadow-sm hover:bg-gray-50"${!filter.completed && filter.remaining ? "ring-blue-400 ring-offset-2 ring-2" : "ring-1 ring-gray-300"}`}
        >
          Remaining
        </button>
        <button
          onClick={() => setFilter({ remaining: false, completed: true })}
          className={`"py-1.5 px-2.5 text-sm font-semibold text-gray-900 rounded-md shadow-sm hover:bg-gray-50"${!filter.remaining && filter.completed ? "ring-blue-400 ring-offset-2 ring-2" : "ring-1 ring-gray-300"}`}
        >
          Completed
        </button>
      </div>
    );
  }

  function DeleteListButton() {
    const func = () => {
      localStorage.removeItem("data");
      setItems([]);
    };
    return (
      <button
        className="max-w-max bg-red-500 hover:bg-red-500 focus:ring-red-500 basis-1/6"
        onClick={func}
      >
        DELETE the list
      </button>
    );
  }
}

export default Todo;
