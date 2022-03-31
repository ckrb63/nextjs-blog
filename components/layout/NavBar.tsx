import React from "react";

const NavBar:React.FunctionComponent = () => {
  return <nav className="navbar">
    <h1 className="navbar-title">BLOGYU</h1>
    <ul className="navbar-menu">
      <li className="navbar-menu-post">post</li>
      <li className="navbar-menu-home">home</li>
    </ul>
  </nav>
};
export default NavBar;