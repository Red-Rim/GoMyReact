import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEnvelope, FaUser } from "react-icons/fa"; //importing icons from react-icons

const UserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6">
      <h2 className="text-3xl font-extrabold text-center text-gray-900">
        📜 User List
      </h2>
      <p className="text-center text-gray-600 mt-2">from jsonplaceholder API</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {listOfUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white shadow-lg rounded-xl p-5 border border-gray-200 transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="flex items-center space-x-3">
              <div className="bg-indigo-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold">
                {user.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{user.name}</h3>
            </div>
            <p className="text-gray-500 mt-2 flex items-center">
              <FaEnvelope className="mr-2 text-indigo-500" /> {user.email}
            </p>
            <p className="text-gray-500 flex items-center">
              <FaUser className="mr-2 text-indigo-500" /> {user.username}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;