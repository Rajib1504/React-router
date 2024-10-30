import { useLoaderData } from "react-router-dom";
import ShowUser from "../ShowUser/ShowUser";

const User = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div className="text-center">
      <h2>Great User:{users.length}</h2>
      <div className="grid w-full md:grid-cols-3 gap-3 ">
        {users.map((u) => (
          <ShowUser key={u.id} singleuser={u}></ShowUser>
        ))}
      </div>
    </div>
  );
};

export default User;
