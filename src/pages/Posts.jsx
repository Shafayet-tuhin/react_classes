import React, { useEffect, useState } from "react";
import Nav from "./../components/Nav";
import { Link } from 'react-router-dom';
import { useFetch } from "../hooks/useFetch";

const Posts = () => {
 
 const {data : posts, isloading , error} = useFetch(`https://jsonplaceholder.typicode.com/posts?_limit=5` , [])

  return (
    <div>
      <Nav />
      {isloading && <h2>Loading.....</h2>}
      {error && <h2>{error}</h2>}
      <ul>
        {posts.map((item) => (
          <li key={item.id}> 
           <Link to={`/posts/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
