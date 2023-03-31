import React from "react";

import { UseGlobalContext } from "./context";
import bag from "./bag.svg";
import dollar from "./dollar.svg";

const NavBar = () => {
  const { itemsCount, totalAmount } = UseGlobalContext();

  return (
    <nav>
      <div className="logo">
        <h4>
          SHOPING<span>CART</span>
        </h4>
      </div>
      <div className="status">
        <div className="carticon">
          <img src={bag} alt="dollar" className="svgIcon" />
          <span className="badge">{itemsCount}</span>
        </div>

        {/* --- */}
        <div className="carticon">
          <img src={dollar} alt="bag" className="svgIcon" />
          <span className="badge">{totalAmount}</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
