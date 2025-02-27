import React from "react";

//display details for each player & renders them inside a card
const Player = ({ name, team, nationality, jerseyNumber, age, image }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md w-64">
      <img
        src={image}
        alt={name}
        className="w-full h-70 object-cover rounded-md"
      />
      <h2 className="text-xl font-bold mt-2">{name}</h2>
      <p className="text-gray-300">{team} - #{jerseyNumber}</p>
      <p className="text-gray-400">Nationality: {nationality}</p>
      <p className="text-gray-500">Age: {age}</p>
    </div>
  );
};

export default Player;
