import React from "react";
import "./header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header_container container">
        <div className="logo">
          <a href="/">Ivoit-Shop</a>
        </div>
        <form action="/" method="post" className="search_form">
          <input type="search" name="search" id="search_input" required />
          <button type="submit" id="search_btn">
            rechercher
          </button>
        </form>
        <nav className="nav">
          <div className="link">
            <a href="/">Home</a>
          </div>
          <div className="link">
            <a href="/contact">contact</a>
          </div>
          <div className="link">
            <a href="#">Regsiter</a>
          </div>
          <div className="link">
            <a href="#">categories</a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
