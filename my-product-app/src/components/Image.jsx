import React from "react";

export default function Image({ images }) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Product ${index + 1}`}
          className="w-full h-24 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
        />
      ))}
    </div>
  );
}
