import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const PostDetails = useLoaderData();
  //   console.log(PostDetails);
  const { title, body } = PostDetails;
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-3">Post Details : {title}</h1>
      <small>{body}</small>
    </div>
  );
};

export default PostDetails;
