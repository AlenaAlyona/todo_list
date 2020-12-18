import React, { useState } from "react";
import { PropsForm } from "../model";

function Form(props: PropsForm) {
  const [todo, setTodo] = useState("");

  const submit = (event: any) => {
    event.preventDefault();
    props.handleSubmit(todo);
    setTodo("");
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
      <button type="submit">Create</button>
    </form>
  );
}

export default Form;
