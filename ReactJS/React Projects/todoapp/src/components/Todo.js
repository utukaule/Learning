import React, { useState } from 'react'

const Todo = () => {
    const [input, setInput] = useState("");
    const [todolist, setTodolist] = useState([])
    const handleTodoList = ()=>{
        const payload = {
            id:todolist.length,
            text:input,
            completed:false
        }
        setTodolist([...todolist,payload])
        setInput("")
    }
    
  return (
    <div>
      {/* input todo and add */}
        <div>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter todo' />
            <button onClick={handleTodoList}>Add</button>
        </div>
      {/* list of todos */}
      <div>
        <ul>
            {todolist.map((item)=><li>
                <span>{item.text}</span>
            </li>)}
        </ul>
      </div>
    </div>
  )
}

export default Todo
