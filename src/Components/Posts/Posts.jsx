import { Link, useNavigate } from "react-router-dom";
const Posts = ({ Posts }) => {
  console.log(Posts);
  const navigate = useNavigate();
  const { id, title, body } = Posts;
  const showDetails = () => {
    navigate(`${id}`);
  };
  return (
    <div className="border-2 border-yellow-300 rounded-xl p-3 flex flex-col gap-3 text-center">
      <h1 className="text-2xl">{title}</h1>
      <small>{body}</small>
      <div className="flex justify-between items-center">
        <Link to={`${id}`}>
          <button>See Details</button>
        </Link>
        <button onClick={showDetails}>show details</button>
      </div>
    </div>
  );
};

export default Posts;
