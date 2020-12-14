import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import { Props } from "../model";
import "./toDoItem.css";

function ToDoItem(props: Props) {
  const [editMode, setEditMode] = useState(false);

  const editItem = () => {
    setEditMode(true);
  };
  if (editMode) {
    return (
      <div>
        {props.item.complete ? (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <span style={{ textDecoration: "line-through" }}>
              <input
                type="text"
                value={props.item.text}
                name="editVal"
                id="editVal"
              />
            </span>{" "}
            <AiIcons.AiFillDelete onClick={props.onDelete} />
            <MdIcons.MdModeEdit />
          </label>
        ) : (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <input
              type="text"
              value={props.item.text}
              name="editVal"
              id="editVal"
            />
            <AiIcons.AiFillDelete onClick={props.onDelete} />
            <MdIcons.MdModeEdit />
          </label>
        )}
      </div>
    );
  } else {
    return (
      <div>
        {props.item.complete ? (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <span style={{ textDecoration: "line-through" }}>
              {props.item.text}
            </span>{" "}
            <AiIcons.AiFillDelete onClick={props.onDelete} />
            <MdIcons.MdModeEdit />
          </label>
        ) : (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <span>{props.item.text}</span>
            <AiIcons.AiFillDelete onClick={props.onDelete} />
            <MdIcons.MdModeEdit onClick={editItem} />
          </label>
        )}
      </div>
    );
  }
}

export default ToDoItem;
