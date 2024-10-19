import React from 'react';
import { CartContainer } from '../containers/cart-container';

const Cart = () => {
  // check if user is logged in or not
  // if (!user.isLoggedIn()) {
  //   window.location.href='/login'
  // }
  return (
    <CartContainer />
  );
};

export default Cart;
