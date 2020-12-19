import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { Item } from "./model";
import "./app.css";

function App() {
  function useStickyState(defaultValue: Item[], key: string) {
    const [value, setValue] = useState(() => {
      const stickyValue = window.localStorage.getItem(key);
      return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
    });
    useEffect(() => {
      window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);
    return [value, setValue];
  }

  const [list, setList] = useStickyState([], "list");

  const toggle = (id: number) => {
    const newList = list.map((item: Item) => {
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
    setList(
      list.filter((item: Item) => {
        return item.id !== id;
      })
    );
  };

  const handleEdit = (editVal: string, id: number) => {
    setList(
      list.map((item: Item) => {
        if (item.id === id) {
          item.text = editVal;
        }
        return item;
      })
    );
  };

  return (
    <div className="background">
      <p className="mainTitle">YOUR AWESOME TO DO LIST</p>
      <Form handleSubmit={handleSubmit} />
      {list.length === 0 ? (
        <h2>You have nothing to do</h2>
      ) : (
        <ToDoList
          list={list}
          toggle={toggle}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;
