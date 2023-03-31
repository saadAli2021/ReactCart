import React from "react";
import SingleCartItem from "./SingleCartItem";
import { UseGlobalContext } from "./context";
const CartContainer = () => {
  const { cart, isLoading } = UseGlobalContext();

  if (cart.length === 0)
    return (
      <div className="cartItemsContainer">
        <div className="cartEmpty">
          <h3>Cart is Empty!</h3>
        </div>
      </div>
    );
  return (
    <div className="cartItemsContainer">
      {cart.map((item) => {
        return <SingleCartItem key={item.id} {...item} />;
      })}
    </div>
  );
};

export default CartContainer;
