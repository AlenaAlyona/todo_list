import React, { useState } from "react";
import { Item } from "../model";
import ToDoItem from "./ToDoItem";

export default function ToDoList() {
  // note the <Item[]> syntax!
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      complete: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      complete: false,
    },
  ]);

  const toggle = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  return (
    <div>
      {list.map((item) => {
        return (
          <div>
            <ToDoItem
              key={item.id}
              item={item}
              toggleDone={() => toggle(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
