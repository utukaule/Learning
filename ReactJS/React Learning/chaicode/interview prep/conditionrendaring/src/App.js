import { useState } from "react";

function App() {
  const [login, setLogin] = useState(false);
  const handleLogout = () => {
    setLogin(false);
  };
  const handleLogin = () => {
    setLogin(true);
  };
  return (
    <>
      {login ? (
        <div>
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
          <div>
            Dont have account ? <a href="">create account</a>
          </div>
        </div>
      ) : (
        <div>
          <button type="button" onClick={handleLogin}>
            LogIn
          </button>
          <div>welcome to account</div>
        </div>
      )}
    </>
  );
}

export default App;
