import React, { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleTodo = () => {
    if (input == "") {
      return alert("input is blank");
    }
    let payload = {
      id: todoList.length + 1,
      text: input,
      completed: false,
    };
    setTodoList([...todoList, payload]);
    setInput("");
  };

  const toggleHandle = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
      })
    );
  };

  const delelHandle = (id) => {
     setTodoList(todoList.filter((item) => item.id   !== id));
  };

  return (
    <div>
      {/* input and button */}
      <div>
        <div>
          <input
            type="text"
            placeholder="Enter Todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={() => handleTodo()}>Todo</button>
        </div>
      </div>

      <div>
        {todoList.map((item) => {
          return (
            <ul key={item.id}>
              <li>
                <input
                  type="checkbox"
                  checked={item.completed}
                  onChange={() => toggleHandle(item.id)}
                />
                <span className={item.completed ? "dash" : ""}>
                  {item.text}
                </span>{" "}
                <button onClick={() => delelHandle(item.id)}>Delete</button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
