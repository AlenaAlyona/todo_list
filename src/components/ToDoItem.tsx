import React from "react";
import { Item } from "../model";

type Props = {
  item: Item;
  toggleDone: () => void;
};

function ToDoItem(props: Props) {
  return (
    <div>
      {props.item.complete ? (
        <label className="container">
          <input type="checkbox" onClick={props.toggleDone} />
          <span className="checkmark"></span>
          {/* <button onClick={props.toggleDone}>[ X ]</button> */}
          <span style={{ textDecoration: "line-through" }}>
            {props.item.text}
          </span>{" "}
        </label>
      ) : (
        <label className="container">
          <input type="checkbox" onClick={props.toggleDone} />
          <span className="checkmark"></span>
          {/* <button onClick={props.toggleDone}>[ ]</button> */}
          <span>{props.item.text}</span>{" "}
        </label>
      )}
    </div>
  );
}

export default ToDoItem;
