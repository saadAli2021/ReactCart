import React from "react";
import { UseGlobalContext } from "./context";

const SingleCartItem = ({ img, id, title, price, amount }) => {
  const { increaseAmount, decreaseAmount, remove } = UseGlobalContext();
  return (
    <article className="singleItem">
      <img src={img} alt="itemImage" className="itemImage" />
      <div className="itemdetails">
        <h4>{title}</h4>
        <h5>${price}</h5>
        <button className="btn remove" onClick={() => remove(id)}>
          remove
        </button>
      </div>

      <div className="quantity">
        <button className="btn increase" onClick={() => increaseAmount(id)}>
          <svg
            className="svgIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        <h3>{amount}</h3>
        <button className="btn decrease " onClick={() => decreaseAmount(id)}>
          <svg
            className="svgIcon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default SingleCartItem;
