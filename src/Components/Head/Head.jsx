import { Link } from "react-router-dom";
const Head = () => {
  return (
    <div className=" border-2 border-red-700 w-full">
      <nav className="flex gap-2 justify-between  items-center bg-blue-100 p-4">
        <h2 className="text-2xl font-bold">Logo</h2>
        <div className="flex gap-3 underline">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/user">User</Link>
          <Link to="/posts">Posts</Link>
        </div>
      </nav>
    </div>
  );
};

export default Head;
