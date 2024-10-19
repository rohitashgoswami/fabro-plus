import React from "react";

export const ProductLayout = ({ product, buttonText, onButtonClick }) => {
  return (
    <div
      className="border p-4 text-center shadow-lg rounded-xl"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="mt-2">{product.price}</p>
      <button onClick={() => onButtonClick(product)} className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-black transition duration-300">
        {buttonText}
      </button>
    </div>
  );
};
