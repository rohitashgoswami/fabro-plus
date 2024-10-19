import React from "react";
import { ProductLayout } from "../components/ProductLayout";

export const FeaturedContainer = () => {
  const products = [
    { id: 4, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 5, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 6, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 7, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 8, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 9, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 10, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 11, name: "Product 3", price: "$30", image: "images/product3.jpg" },
  ];

  const onProductClick = (product) => {
    console.log("Featured Product is : ", product);
  }

  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Top products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductLayout key={product.id} product={product} buttonText="Know more" onButtonClick={onProductClick}/>
        ))}
      </div>
    </section>
  );
};
