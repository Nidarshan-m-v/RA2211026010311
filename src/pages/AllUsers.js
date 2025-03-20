import React, { useEffect, useState } from "react";
import { getAllUsers } from "../services/api";

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="heading-p4">All Users</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded-lg shadow-md bg-gray-100">
            <h3 className="text-lg font-semibold">{user.name}</h3>
            <p className="text-gray-600">{user.email}</p>
            <p className="text-gray-500">{user.company}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
