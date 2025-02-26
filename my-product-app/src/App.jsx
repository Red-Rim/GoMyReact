import React from "react";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";
import product from "./product";
import "./index.css";

const userName = "there!";

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl max-w-sm w-full transform hover:scale-105 transition-transform duration-300">
        <Image images={product.images} />
        <div className="text-center mt-4">
          <Name name={product.name} />
          <Price price={product.price} />
          <Description description={product.description} />
        </div>
      </div>
      
      <div className="mt-6 text-lg font-semibold">
        {userName ? `Hello, ${userName}!` : "Hello, there!"}
      </div>

      {userName && (
        <img src="/pika.png" alt="Cute User" className="mt-4 w-20 h-20 rounded-full shadow-lg border-4 border-pink-400" />
      )}
    </div>
  );
}
