import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/Header";
import { lazy, Suspense } from "react";
import SoloProduct from "./components/SoloProduct";
const Product = lazy(() => import("./components/Product"));
const About = lazy(()=>import("./components/About"))
const Contact = lazy(()=>import('./components/Contact'))
const Cart = lazy(()=>import('./components/Cart'))
const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const route = new createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "product/:id",
        element: <SoloProduct />,
      },
      {
        path: "/about",
        element: <Suspense><About /></Suspense>,
      },
      {
        path: "/cart",
        element: <Suspense><Cart /></Suspense> ,
      },
      {
        path: "/contact",
        element: <Suspense><Contact /></Suspense> ,
      },
    ],
  },
]);

function Root() {
  return <RouterProvider router={route}></RouterProvider>;
}

export default Root;
