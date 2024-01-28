import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <ul style={{listStyle:"none"}} className="navStyle">
      <li>
        <Link to={"/"}>Posts</Link>
      </li>
      <li>
        <Link to={"/todos"}>Todos</Link>
      </li>
    </ul>
  );
};

export default Nav;
