const UserCard = ({ user }) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition duration-300">
        <h2 className="text-lg font-semibold text-gray-800">{user.name}</h2>
        <p className="text-gray-500">{user.email}</p>
      </div>
    );
  };
  
  export default UserCard;
  