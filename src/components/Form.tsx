import React, { useState } from "react";
import { PropsForm } from "../model";
import "./form.css";

function Form(props: PropsForm) {
  const [todo, setTodo] = useState("");

  const submit = (event: any) => {
    event.preventDefault();
    if (todo.length > 0) {
      props.handleSubmit(todo);
      setTodo("");
    } else {
      console.log("Please fiil in this field");
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="add your new todo"
        value={todo}
        required
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button className="btnDefault">
        <span className="btn">CREATE</span>
      </button>
    </form>
  );
}

export default Form;
