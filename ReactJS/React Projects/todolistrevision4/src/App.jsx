import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleTodo = () => {
    const payload = {
      id: todoList.length + 1,
      text: input,
      inCompelte: false,
    };
    setTodoList([...todoList, payload]);
    setInput("");
  };

  // handle check
  const handleComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            inCompelte: !item.inCompelte,
          };
        } else {
          return item;
        }
      })
    );
  };

  // handle Delete
  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleTodo}>Add todo</button>
      </div>
      <div>
        <ul>
          {todoList.map((todo) => {
            return (
              <li key={todo.id}>
                <span>
                  <input
                    type="checkbox"
                    onClick={() => handleComplete(todo.id)}
                    checked={todo.inCompelte}
                  />
                </span>
                <span className={todo.inCompelte ? "line" : ""}>
                  {" "}
                  {todo.text}
                </span>
                <span>
                  <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default App;
