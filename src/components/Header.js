import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-width-wrapper">
        <h1>
          <span className="logo">
            <Link to="/">DemoHub</Link>
          </span>
        </h1>
        <input
          className="top-search-input"
          placeholder="Search some awesome demos..."
        />
        <nav className="top-menu">
          <ul>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
