import { useEffect, useState } from "react";
import { Event } from "../types.tsx";

interface Item {
  id: number;
  text: string;
  done: boolean;
}
interface Filter {
  remaining: boolean;
  completed: boolean;
}

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
  const [inputText, setInputText] = useState<string>("");
  const [items, setItems] = useState<Item[]>(loadItems());

  const [filter, setFilter] = useState<Filter>({
    remaining: false,
    completed: false,
  });

  function handleAdd(): void {
    if (inputText.trim() !== "") {
      const newItem: Item = {
        id: Date.now(),
        text: inputText,
        done: false,
      };

      const updatedItems = [...items, newItem]; // Create the updated array
      setItems(updatedItems); // Update the state
      setInputText(""); // Clear the input field
    }
  }

  function handleDelete(idToDelete: number): void {
    setItems(items.filter((item) => item.id !== idToDelete));
  }

  function handleInputChange(e: Event): void {
    setInputText(e.target.value);
  }
  useEffect(() => {
    console.log(items);
    localStorage.setItem("data", JSON.stringify(items)); // Save updated array to localStorage
  }, [items]);

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
          value={inputText}
          onChange={handleInputChange}
          placeholder="Add new item"
        />

        <button onClick={handleAdd} className="bg-blue-500">
          Add
        </button>
      </div>

      <FilterButtons />
      <ListHeaderText />

      <div className="space-y-2 min-w-96 rounder-md">
        {items
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
                    items.map((i) =>
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
        {items.length} {items.length == 1 ? "task  " : "tasks "}
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
    return (
      <button
        className="max-w-max bg-red-500 hover:bg-red-500 focus:ring-red-500 basis-1/6"
        onClick={() => localStorage.removeItem("data")}
      >
        DELETE the list
      </button>
    );
  }
}

export default Todo;
