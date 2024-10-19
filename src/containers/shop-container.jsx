import React from "react";
import { ProductLayout } from "../components/ProductLayout";

export const ShopContainer = () => {
  const products = [
    { id: 1, name: "Product 1", price: "$10", image: "images/product1.jpg" },
    { id: 2, name: "Product 2", price: "$20", image: "images/product2.jpg" },
    { id: 3, name: "Product 3", price: "$30", image: "images/product3.jpg" },
    { id: 4, name: "Product 4", price: "$30", image: "images/product3.jpg" },
    { id: 5, name: "Product 5", price: "$130", image: "images/product3.jpg" },
    { id: 6, name: "Product 6", price: "$330", image: "images/product3.jpg" },
    { id: 7, name: "Product 7", price: "$730", image: "images/product3.jpg" },
    { id: 8, name: "Product 8", price: "$360", image: "images/product3.jpg" },
    { id: 9, name: "Product 9", price: "$350", image: "images/product3.jpg" },
    { id: 10, name: "Product 10", price: "$30", image: "images/product3.jpg" },
    { id: 11, name: "Product 11", price: "$30", image: "images/product3.jpg" },
  ];
  const onProductClick = (product) => {
    console.log("Shop Product is : ", product);
    // Make api call or something
    // Add this product to the user's cart
  }
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-10">
        Shop Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductLayout key={product.id} product={product} buttonText="Add to Cart" onButtonClick={onProductClick}/>
        ))}
      </div>
    </section>
  );
};
