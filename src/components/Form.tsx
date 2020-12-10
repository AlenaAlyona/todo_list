import React, { useState } from "react";

function Form() {
  const [todo, setTodo] = useState("");
  console.log(todo);
  const submit = (event: any) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="todo"
        id="todo"
        placeholder="add your new todo"
        required
        onChange={(e) => setTodo(e.target.value)}
      ></input>
      <button type="submit">Create</button>
    </form>
  );
}

export default Form;
