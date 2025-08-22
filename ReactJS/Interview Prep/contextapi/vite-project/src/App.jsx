import { createContext,useState } from "react";
import ChildB from "./components/ChildB";
// import ChildB from "./components/ChildB.jsx";

// step 1:-create context
// const UserContext = createContext();
const ThemeContext = createContext()
function App() {
  // step 3 pass value
  // const [user, setUser] = useState({ name: "utu" });
  const [theme, setTheme] = useState("light")
  return (
    <>
      <>
        {/* step 2: wrap all the child inside a provider */}
        {/* <UserContext.Provider value={user}>
          <ChildB />
        </UserContext.Provider> */}
        <div>
          <ThemeContext.Provider value={{theme,setTheme}}>
            <div className="container" style={{backgroundColor:theme === "light"?"beige":"black"}}>
            <ChildB/>
            </div>
          </ThemeContext.Provider>
        </div>
      </>
    </>
  );
}

export default App;
// export {UserContext}
export {ThemeContext}
