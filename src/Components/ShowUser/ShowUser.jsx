const ShowUser = ({ singleuser }) => {
  const { firstname, lastname, email, birthDate } = singleuser;
  return (
    <div className="border-2 border-yellow-300 rounded-xl p-3 flex flex-col gap-3 text-center">
      <h1 className="text-2xl font-bold ">
        {firstname} {lastname}
      </h1>
      <p className="text-xl">{email}</p>
      <p className="text-xl">{birthDate}</p>
    </div>
  );
};

export default ShowUser;
