import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import { Props } from "../model";
import "./toDoItem.css";

function ToDoItem(props: Props) {
  const [editMode, setEditMode] = useState(false);
  const [editVal, setEditVal] = useState(props.item.text);

  const editItem = () => {
    setEditMode(true);
  };

  const handleEditVal = (event: any) => {
    setEditVal(event.target.value);
  };

  const handleCancel = () => {
    if (editVal === "") {
      setEditVal(props.item.text);
    }
    setEditMode(false);
  };

  const handleSave = () => {
    if (editVal === "") {
      setEditVal(props.item.text);
    } else {
      props.onEdit(editVal, props.item.id);
    }
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
          value={editVal}
          name="editVal"
          id="editVal"
          onChange={handleEditVal}
        />
        <RiIcons.RiSave3Fill className="iconItem" onClick={handleSave} />
        <MdIcons.MdCancel className="iconItem" onClick={handleCancel} />
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
            <MdIcons.MdModeEdit className="iconItem" onClick={editItem} />
            <AiIcons.AiFillDelete
              className="iconItem"
              onClick={props.onDelete}
            />
          </label>
        ) : (
          <label className="container">
            <input type="checkbox" onClick={props.toggleDone} />
            <span className="checkmark"></span>
            <span>{props.item.text}</span>
            <MdIcons.MdModeEdit className="iconItem" onClick={editItem} />
            <AiIcons.AiFillDelete
              className="iconItem"
              onClick={props.onDelete}
            />
          </label>
        )}
      </div>
    );
  }
}

export default ToDoItem;
