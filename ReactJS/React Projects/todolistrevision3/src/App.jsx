import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const handleTodo = () => {
    if (input == "") return alert("empty todo");
    const payload = {
      id: todoList + 1,
      text: input,
      isCompleted: false,
    };
    setTodoList([...todoList, payload]);
    setInput("");
  };
  const handleDelete = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            isCompleted: !item.isCompleted,
          };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <>
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            type="text"
            value={input}
            placeholder="Add todo"
            onChange={(e) => setInput(e.target.value)}
          />
          <input type="submit" onClick={handleTodo} />
        </div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                onChange={() => handleComplete(todo.id)}
                checked={todo.isCompleted}
              />{" "}
              <span className={todo.isCompleted ? "line" : ""}>
                {todo.text}
              </span>{" "}
              <button onClick={() => handleDelete(todo.id)}>Delete</button>{" "}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
