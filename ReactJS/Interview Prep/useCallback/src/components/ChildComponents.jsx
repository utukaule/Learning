import React from "react";
const ChildComponents = React.memo((props) => {
  console.log("child component is re-rendered");
  return <button onClick={props.handleCount}>{props.buttonName}</button>;
});

export default ChildComponents;

// React.memo -> wrap -> component -> component re-render tabhi 
// hoga jab props change hoga nahi toh re-render nahi hoga


// if you are sending function, then react.memo won't be able to save you from 
// re-rendering