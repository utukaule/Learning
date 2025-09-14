import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";

function App() {
  return (
    <>
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
    </>
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
    ],
    errorElement: <Error />,
  },
]);

function Root() {
  return <RouterProvider router={appRouter} />;
}

export default Root;
