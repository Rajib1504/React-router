import { NavLink } from "react-router-dom";
import "./Head.css";
const Head = () => {
  return (
    <div className=" border-2 border-red-700 w-full">
      <nav className="flex gap-2 justify-between  items-center bg-blue-100 p-4">
        <h2 className="text-2xl font-bold">Logo</h2>
        <div className="flex gap-3 underline">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/posts">Posts</NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Head;
