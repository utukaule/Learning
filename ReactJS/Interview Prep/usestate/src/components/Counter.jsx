import React, { useState } from 'react'
import "../index.css"
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const handleCounter = () =>{
        setCounter(counter+1)
    }
    return (
    <div className='counter-container'>
      <button onClick={handleCounter}>Counter {counter}</button>
    </div>
  )
}

export default Counter
