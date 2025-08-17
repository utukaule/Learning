import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

const TabForm = () => {
  const [active, setActive] = useState(0);
  const [data,setData] = useState({
    name:'utkarsh',
    age:"29",
    email:"utu@gmail.com",
    interest:['cooking','football'],
    theme:'dark'
  })
  const tabs = [
    { name: "Profile", component: Profile },
    { name: "Interest", component: Interest },
    { name: "Settings", component: Settings },
  ];

  const ActiveTabComponent = tabs[active].component;
  const handlePrevious = () =>{
    setActive((prev)=>prev-1)
  }
  const handleNext = () =>{
    setActive((prev)=>prev+1)
  }
  const handleSubmit = () =>{
    // setActive((prev)=>prev+1)
  }
  return (
    <>
      <h1>TabForm</h1>
      <div>
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="each-tab"
              onClick={() => setActive(index)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="content-container">
          <ActiveTabComponent data={data} setData={setData} />
        </div>
      </div>
      { active >0 &&  <button onClick={handlePrevious}>Previous</button>}
        
      {active < tabs.length-1 && <button onClick={handleNext}>Next</button>}
      {active == tabs.length-1 && (<button onClick={handleSubmit}>Submit</button>)}
    </>
  );
};

export default TabForm;
