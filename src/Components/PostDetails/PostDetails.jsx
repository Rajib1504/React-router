import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const PostDetails = useLoaderData();
  const navigate = useNavigate(); //for navigate
  //   console.log(PostDetails);
  // const params = useParams();
  const { postId } = useParams();
  const { title, body } = PostDetails;
  const backToPost = () => {
    navigate(-1);
  };
  console.log(postId);
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
