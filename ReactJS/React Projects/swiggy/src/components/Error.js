import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div>
      <h1>404 page not found</h1>
      <h1>Yaha kuch nahi he </h1>
      <h1>Galat road pakad liya</h1>
      <p>{err.status}: {err.statusText}</p>
    </div>
  );
};

export default Error;
