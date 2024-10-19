import React from 'react';

const products = [
  { id: 1, name: "Product 1", price: "$10", image: "images/product1.jpg" },
  { id: 2, name: "Product 2", price: "$20", image: "images/product2.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" }
];

const Shop = () => {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 text-center shadow-lg rounded-2xl">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="mt-2">{product.price}</p>
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-green-500 hover:text-black transition duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
