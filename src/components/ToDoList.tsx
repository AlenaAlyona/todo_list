import React from "react";
import { PropsList } from "../model";
import ToDoItem from "./ToDoItem";
import "./toDoList.css";

export default function ToDoList(props: PropsList) {
  return (
    <div className="listDiv">
      {props.list.map((item) => {
        return (
          <ToDoItem
            key={item.id}
            item={item}
            toggleDone={() => props.toggle(item.id)}
            onDelete={() => props.handleDelete(item.id)}
            onEdit={props.handleEdit}
          />
        );
      })}
    </div>
  );
}
