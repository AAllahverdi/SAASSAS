import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="header__all">
      <div className="header__all__img">
        <img
          src="https://preview.colorlib.com/theme/pato/images/icons/logo2.png"
          alt=""
        />{" "}
      </div>
      <div className="header__all__links ">
        <Link to="/">Home</Link>
        <Link to="/Add">Add</Link>
        <Link to="/Basket">Basket</Link>
        <Link to="/WishList">wishList</Link>
      </div>
      <div className="header__all__icons">
        <i class="fa-solid fa-magnifying-glass"></i>
        <i class="fa-regular fa-user"></i>
        <i class="fa-solid fa-check"></i>
      </div>
      <i class="fa-solid fa-bars hamburger"></i>
    </div>
  );
}

export default Header;
