import { Link } from "react-router-dom";
const Posts = ({ Posts }) => {
  console.log(Posts);
  const { id, title, body } = Posts;
  return (
    <div className="border-2 border-yellow-300 rounded-xl p-3 flex flex-col gap-3 text-center">
      <h1 className="text-2xl">{title}</h1>
      <small>{body}</small>
      <Link to={`${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default Posts;
