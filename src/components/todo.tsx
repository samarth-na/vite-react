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
function DeleteDemo(): JSX.Element {
  //
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
      !filter.done
        ? "show remaining"
        : !filter.active
          ? "show completed"
          : "show all"
    );
  }, [filter]);

  return (
    <div className="flex flex-col gap-4 justify-between items-center flex-2">
      <div className="flex flex-col flex-none gap-4">
        <div className="flex gap-4 justify-between items-center flex-2">
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            className="rounded border b-2"
            placeholder="Add new item"
          />
          <button onClick={handleAdd} className="">
            Add
          </button>
        </div>
        {}
        <div className="flex justify-between items-center flex-2">
          <button onClick={() => setFilter({ active: true, done: true })}>
            all
          </button>
          <button onClick={() => setFilter({ active: true, done: false })}>
            remaining
          </button>
          <button onClick={() => setFilter({ active: false, done: true })}>
            completed
          </button>
        </div>
        {}
      </div>
      <div>
        {items.length} {items.length == 1 ? "task  " : "tasks "}{" "}
        {filter.active === filter.done
          ? "total"
          : filter.active
            ? "remaining"
            : "completed"}
      </div>

      <div className="min-w-[25vw]">
        {}
        <div className="space-y-2">
          {items
            .filter(
              filter.active !== filter.done
                ? (item: Item) => item.done !== filter.active
                : (item) => item
            )
            .map((item: Item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-2 rounded border"
              >
                <span className="px-2 bg-gray-50 h-max basis-4/6">
                  {item.text}
                </span>

                {}

                <input
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
                  className="m-2 basis-1/6"
                />

                {}

                <button
                  onClick={() => handleDelete(item.id)}
                  className="bg-red-500 hover:bg-red-600 focus:ring-red-500 basis-1/6"
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
      <button
        className="max-w-max bg-black hover:bg-red-500 focus:ring-red-500 basis-1/6"
        onClick={() => localStorage.removeItem("data")}
      >
        DELETE
      </button>
    </div>
  );
}

export default DeleteDemo;
