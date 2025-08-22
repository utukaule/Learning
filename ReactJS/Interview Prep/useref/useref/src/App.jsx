import { useState } from "react";
import { useRef } from "react";

function App() {
  // let val = useRef(1);
  // let btnRef = useRef()

  // const colorChange = () =>{
  //   btnRef.current.style.backgroundColor = "red"
  // }
  const [time, setTime] = useState(0);
  const timeRef = useRef(null)
  const startTimer = () => {
    timeRef.current = setInterval(()=>{
      setTime(time=>time+1)
    },1000)
  };
  const stopTimer = () => {
    clearInterval(timeRef.current)
    timeRef.current = null
  };
  const reset = () => {
    stopTimer()
    setTime(0)
  };
  return (
    <>
      <h1>StopWatch: {time}</h1>
      <div>
        <button onClick={startTimer}>start</button>
      </div>
      <div>
        <button onClick={stopTimer}>stop</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      {/* <button ref={btnRef}>counter</button>
      <button onClick={colorChange}>Change color of 1st button</button> */}
    </>
  );
}

export default App;
