import React from 'react';

const cartItems = [
  { id: 1, name: "Product 1", price: "$10", quantity: 1 },
  { id: 2, name: "Product 2", price: "$20", quantity: 2 }
];

const Cart = () => {
  return (
    <section className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.length === 0 ? (
          <p className="text-center">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="border p-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p>{item.price}</p>
              </div>
              <div>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Cart;
