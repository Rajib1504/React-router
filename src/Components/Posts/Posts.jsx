const Posts = ({ Posts }) => {
  console.log(Posts);
  const { title, body } = Posts;
  return (
    <div className="border-2 border-yellow-300 rounded-xl p-3 flex flex-col gap-3 text-center">
      <h1 className="text-2xl">{title}</h1>
      <small>{body}</small>
    </div>
  );
};

export default Posts;
