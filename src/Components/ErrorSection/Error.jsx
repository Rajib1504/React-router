import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <h1 className="text-2xl">Oopps!!</h1>
      <p>{error.statusText || error.message}</p>
      {error.status === 404 && (
        <div>
          <h3>page not found</h3>
          <p>go back whre you form </p>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Error;
