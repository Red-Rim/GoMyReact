import React from "react";
import PlayersList from "./components/PlayersList";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-red-600 text-white flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">🔵🔴 FC Barcelona Player Cards</h1>
      <PlayersList />
    </div>
  );
};

export default App;