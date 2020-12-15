import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as FiIcons from "react-icons/fi";
import * as RiIcons from "react-icons/ri";
import { Props } from "../model";
import "./toDoItem.css";

function ToDoItem(props: Props) {
  const [editMode, setEditMode] = useState(false);
  // const [itemText, setItemText] = useState(props.item.text);

  const editItem = () => {
    setEditMode(true);
  };

  const handleEdit = () => {};

  const handleCancel = () => {
    setEditMode(false);
  };

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
        <RiIcons.RiSave3Fill />
        <MdIcons.MdCancel onClick={handleCancel} />
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
            <MdIcons.MdModeEdit onClick={editItem} />
            <AiIcons.AiFillDelete onClick={props.onDelete} />
          </label>
        ) : (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <span>{props.item.text}</span>
            <MdIcons.MdModeEdit onClick={editItem} />
            <AiIcons.AiFillDelete onClick={props.onDelete} />
          </label>
        )}
      </div>
    );
  }
}

export default ToDoItem;
