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
        <span>
          <button onClick={props.toggleDone}>[ X ]</button>
          <span style={{ textDecoration: "line-through" }}>
            {props.item.text}
          </span>{" "}
        </span>
      ) : (
        <span>
          <button onClick={props.toggleDone}>[ ]</button>
          <span>{props.item.text}</span>{" "}
        </span>
      )}
    </div>
  );
}

export default ToDoItem;
