import React, { useEffect, useState } from "react";
import Nav from "./../components/Nav";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Todos = () => {
  const {
    data: todos,
    isloading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/todos?_limit=5`, []);

  return (
    <div>
      <Nav />
      {isloading && <h2>Loading.....</h2>}
      {error && <h2>{error}</h2>}

      <ul>
        {todos.map((item) => (
          <li key={item.id}>
            {" "}
            <Link to={`/todos/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
