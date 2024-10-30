import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const PostDetails = useLoaderData();
  const navigate = useNavigate();
  //   console.log(PostDetails);
  const { title, body } = PostDetails;
  const backToPost = () => {
    navigate(-1);
  };
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-3">Post Details : {title}</h1>
      <small>{body}</small>
      <br />
      <button onClick={backToPost}>Back</button>
    </div>
  );
};

export default PostDetails;
