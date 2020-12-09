import React, { useState } from "react";
import { Item, PropsList } from "../model";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props: PropsList) {
  // note the <Item[]> syntax!
  const [list, setList] = useState<PropsList>(props);

  return (
    <div>
      {props.list.map((item) => {
        return (
          <div>
            <ToDoItem
              key={item.id}
              item={item}
              toggleDone={() => props.toggle(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
