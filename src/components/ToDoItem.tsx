import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as GiIcons from "react-icons/gi";
import { Props } from "../model";
import "./toDoItem.css";

function ToDoItem(props: Props) {
  const [editMode, setEditMode] = useState(false);
  // const [itemText, setItemText] = useState(props.item.text);

  const editItem = () => {
    setEditMode(true);
  };

  const handleEdit = () => {};

  if (editMode) {
    return (
      <div>
        <label className="container">
          <input type="checkbox" onClick={props.toggleDone} disabled />
          <span className="checkmark"></span>
        </label>
        <input
          type="text"
          value={props.item.text}
          name="editVal"
          id="editVal"
          onChange={handleEdit}
        />
        <FiIcons.FiSave />
        <GiIcons.GiCancel />
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
            <MdIcons.MdModeEdit onClick={editItem} />
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
