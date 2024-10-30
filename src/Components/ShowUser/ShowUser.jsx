import { Link } from "react-router-dom";
const ShowUser = ({ singleuser }) => {
  const { id, firstname, lastname, email, birthDate } = singleuser;
  return (
    <div className="border-2 border-yellow-300 rounded-xl p-3 flex flex-col gap-3 text-center">
      <h1 className="text-2xl font-bold ">
        {firstname} {lastname}
      </h1>
      <p className="text-xl">{email}</p>
      <p className="text-xl">{birthDate}</p>
      <div className="flex justify-between items-center px-2">
        <Link to={`${id}`}>Show details</Link>
        <Link to={`${id}`}>
          <button>More Details</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default ShowUser;
