import React from "react";
import { PropsList } from "../model";
import ToDoItem from "./ToDoItem";

export default function ToDoList(props: PropsList) {
  return (
    <div>
      {props.list.map((item) => {
        return (
          <div>
            <ToDoItem
              key={item.id}
              item={item}
              toggleDone={() => props.toggle(item.id)}
              onDelete={() => props.handleDelete(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
