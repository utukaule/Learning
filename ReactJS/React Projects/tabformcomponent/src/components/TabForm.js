import { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Setttings from "./Setttings";

const TabForm = () => {
  const [data, setData] = useState({
    name: "akshay",
    age: "29",
    email: "utu@gmail.com",
    interests: ["coding", "music"],
    settings: "dark",
  });

  const [errors, setErrors] = useState({});

  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "name is not valid";
        }
        if (!data.age || data.age < 18) {
          err.name = "You are to young to login";
        }
        if (!data.email || data.email.length < 2) {
          err.name = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      },
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if (!data.interests || data.interests.length < 1) {
          err.interests = "select at least 1 interest.";
        }

        setErrors(err);
        return err.interests ? false : true;
      },
    },
    {
      name: "Settings",
      component: Setttings,
      validate: () => {
        return true;
      },
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const handleNextClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev + 1);
    }
  };
  const handlePrevClick = () => {
    if (tabs[activeTab].validate()) {
      setActiveTab((prev) => prev - 1);
    }
  };
  const handleSubmitClick = () => {
    // make api call
    console.log(data);
  };

  return (
    <>
      <h1>Tabs</h1>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div className="heading" onClick={() => setActiveTab(index)}>
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab == tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </>
  );
};

export default TabForm;
