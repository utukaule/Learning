import { useEffect } from "react";
import Browser from "./Browser";
import Login from "./Login";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
// anything related login, sign up and logout
// onAuthStateChanged is used to handle that perticular thing
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  
  // app router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // if user signed in below thing will happen
      if (user) {
        // User is signed in, see docs for a list of available properties , displayName , displayName: displayName

        const { uid, email } = user;
        dispatch(addUser({ uid: uid, email: email }));
        
      } else {
        // User is signed out
        dispatch(removeUser());
       
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
