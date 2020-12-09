import React from "react";
import { Props } from "../model";
import "./toDoItem.css";

function ToDoItem(props: Props) {
  return (
    <div>
      {props.item.complete ? (
        <label className="container">
          <input type="checkbox" onClick={props.toggleDone} />
          <span className="checkmark"></span>
          <span style={{ textDecoration: "line-through" }}>
            {props.item.text}
          </span>{" "}
        </label>
      ) : (
        <label className="container">
          <input type="checkbox" onClick={props.toggleDone} />
          <span className="checkmark"></span>
          <span>{props.item.text}</span>{" "}
        </label>
      )}
    </div>
  );
}

export default ToDoItem;
