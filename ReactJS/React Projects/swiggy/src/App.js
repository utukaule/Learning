// import About from "./components/About";
import Body from "./components/Body";
// import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utilities/UserContext";
// import Shimmer from "./components/Shimmer";

// chunking
// code splitting
// dynamic bundling
const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));
const Contact = lazy(() => import("./components/Contact"));
// for above 3 things (all are same just name is diff.)
// we will use lazy loading also know as "on demand loading".

// Provider is a bridge in between the store and the application
import { Provider } from "react-redux";
import appStore from "./utilities/appStore";

function App() {
  const [userName, setUserName] = useState();

  // authentication

  useEffect(() => {
    const data = {
      name: "akshay kaule",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="app">
          <Header />
          {/* 
          * outlet is like tunnel. 
          * Outlet sees the route and finds out the component 
          and renders that component
          * the component replaces itself with outlet
          */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
}

// below is the structure which is used to for routing

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;
