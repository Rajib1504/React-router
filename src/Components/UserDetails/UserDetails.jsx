import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const usershortDetails = useLoaderData();
  const navigate = useNavigate();
  console.log(usershortDetails);
  const goBack = () => {
    navigate(-1);
  };
  const { firstname, lastname, website } = usershortDetails;
  return (
    <div>
      <h1 className="text-4xl font-bold mb-3">
        The Details about : {firstname} {lastname}
      </h1>
      <p>{website}</p>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
