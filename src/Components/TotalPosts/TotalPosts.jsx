import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";

const TotalPosts = () => {
  const totalPosts = useLoaderData();
  console.log(totalPosts);
  //   const {}
  return (
    <div>
      <h1 className="text-4xl font-bold mb-3 text-center">
        Total posts:{totalPosts.length}
      </h1>
      <div className="grid w-full md:grid-cols-3 gap-3 ">
        {totalPosts.map((tp) => (
          <Posts key={tp.id} Posts={tp}></Posts>
        ))}
      </div>
    </div>
  );
};

export default TotalPosts;
