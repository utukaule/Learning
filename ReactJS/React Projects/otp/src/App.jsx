import React, { useEffect, useRef, useState } from "react";

const OTP_DIGITS_COUNT = 5;
const App = () => {
  // ["","","","",""]
  const [inputArr, setInputArr] = useState(
    new Array(OTP_DIGITS_COUNT).fill("")
  );

  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    console.log(value);
    const newValue = value.trim()
    const newArr = [...inputArr];
    newArr[index] = value.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleOnKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div>
      {inputArr.map((input, index) => {
        return (
          <input
            key={index}
            type="text"
            className="otp-input"
            value={inputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
          />
        );
      })}
    </div>
  );
};

export default App;
