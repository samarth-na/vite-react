import { useEffect, useState } from "react";
import { Event } from "../types.tsx";

interface Item {
  id: number;
  text: string;
  done: boolean;
}
interface Filter {
  active: boolean;
  done: boolean;
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
  const [inputText, setInputText] = useState<string>("");
  const [items, setItems] = useState<Item[]>(loadItems());
  const [filter, setFilter] = useState<Filter>({
    active: false,
    done: false,
  });

  function handleAdd(): void {
    if (inputText.trim() !== "") {
      const newItem: Item = {
        id: Date.now(),
        text: inputText,
        done: false,
      };

      const updatedItems = [...items, newItem];
      setItems(updatedItems);
      setInputText("");
    }
  }

  function handleDelete(idToDelete: number): void {
    setItems(items.filter((item) => item.id !== idToDelete));
  }

  function handleInputChange(e: Event): void {
    setInputText(e.target.value);
  }

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    console.log(
      !filter.done
        ? "show remaining"
        : !filter.active
          ? "show completed"
          : "show all"
    );
  }, [filter]);

  return (
    <>
      <div className="pb-12 w-96 border-b border-gray-900/10">
        <h2 className="font-semibold text-gray-900 text-base/7">Todo List</h2>
        <p className="mt-1 text-gray-600 text-sm/6">
          Manage your tasks and stay organized.
        </p>

        <div className="mt-10 space-y-8">
          <div className="flex gap-x-4">
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Add new task"
              className="block py-1.5 px-3 text-base text-gray-900 bg-white rounded-md grow outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
            />
            <button
              onClick={handleAdd}
              className="py-2 px-3 text-sm font-semibold text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Add Task
            </button>
          </div>

          <div className="flex gap-x-4 justify-center">
            <button
              onClick={() => setFilter({ active: true, done: true })}
              className={`"py-1.5 px-2.5 text-sm font-semibold text-gray-900  rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-50"
                            ${filter.done ? (filter.active ? "ring-blue-400 ring-offset-2 ring-2	" : "") : ""}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter({ active: true, done: false })}
              className={`"py-1.5 px-2.5 text-sm font-semibold text-gray-900  rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-50"
                            ${!filter.done ? (filter.active ? "ring-blue-400 ring-offset-2 ring-2	" : "") : ""}`}
            >
              Remaining
            </button>
            <button
              onClick={() => setFilter({ active: false, done: true })}
              className={`"py-1.5 px-2.5 text-sm font-semibold text-gray-900  rounded-md ring-1 ring-inset ring-gray-300 shadow-sm hover:bg-gray-50"
                            ${filter.done ? (!filter.active ? "ring-blue-400 ring-offset-2 ring-2	" : "") : ""}`}
            >
              Completed
            </button>
          </div>

          <ListHeaderText />

          <div className="space-y-4">
            {items
              .filter(
                filter.active !== filter.done
                  ? (item: Item) => item.done !== filter.active
                  : (item) => item
              )
              .map((item: Item) => (
                <div
                  key={item.id}
                  className="flex gap-x-4 items-center p-4 rounded-md border border-gray-900/10"
                >
                  <div className="flex items-center h-6">
                    <input
                      type="checkbox"
                      checked={item.done}
                      onChange={() =>
                        setItems(
                          items.map((i) =>
                            i.id === item.id ? { ...i, done: !i.done } : i
                          )
                        )
                      }
                      className="text-indigo-600 rounded border-gray-300 focus:ring-indigo-600 size-4"
                    />
                  </div>
                  <span
                    className={`grow text-sm/6 ${item.done ? "text-gray-500 line-through" : "text-gray-900"}`}
                  >
                    {item.text}
                  </span>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="py-1.5 px-2.5 text-sm font-semibold text-red-600 bg-red-50 rounded-md shadow-sm hover:bg-red-100"
                  >
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-gray-900/10">
        <button
          onClick={() => localStorage.removeItem("data")}
          className="py-2 px-3 text-sm font-semibold text-white bg-red-600 rounded-md shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
        >
          Clear All Data
        </button>
      </div>
    </>
  );

  function ListHeaderText() {
    return (
      <div className="text-center text-gray-600 text-sm/6">
        {items.length} {items.length === 1 ? "task" : "tasks"}{" "}
        {filter.active === filter.done
          ? "total"
          : filter.active
            ? "remaining"
            : "completed"}
      </div>
    );
  }
}

export default Todo;
