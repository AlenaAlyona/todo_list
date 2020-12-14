import React, { useState } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { Item } from "./model";

function App() {
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      complete: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      complete: false,
    },
  ]);
  const toggle = (id: number) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      } else {
        return item;
      }
    });
    setList(newList);
  };

  const handleSubmit = (todo: string) => {
    const newId: number = Math.floor(Math.random() * 1000000000);
    const newTodo: Item = {
      id: newId,
      text: todo,
      complete: false,
    };
    setList([...list, newTodo]);
  };

  const handleDelete = (id: number) => {
    const deleteItem = list.filter((item, i) => {
      return i !== id;
    });
  };

  return (
    <div>
      <Form handleSubmit={handleSubmit} />
      <ToDoList list={list} toggle={toggle} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
