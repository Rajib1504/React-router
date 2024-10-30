import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const usershortDetails = useLoaderData();
  console.log(usershortDetails);
  const { firstname, lastname, website } = usershortDetails;
  return (
    <div>
      <h1 className="text-4xl font-bold mb-3">
        The Details about : {firstname} {lastname}
      </h1>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
