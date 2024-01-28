import React, { useEffect, useState } from 'react'
import Nav from './../components/Nav';
import { useParams } from 'react-router-dom';
import { useFetch } from './../useFetch';

const PostDetails = () => {

    const {postId} = useParams()
    
   const{ data :posts , isloading , error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,null)

  return (
    <div>
        <Nav />
        {isloading && <h2>Loading.....</h2>}
        {error && <h2>{error}</h2>}

        <div className="post">
        <p> <strong>Post Id</strong> : {posts?.id} </p>
        <p> <strong>Title</strong> : {posts?.title} </p>
        <p> <strong>Details</strong> : {posts?.body} </p>
        </div>


        
    </div>
  )
}

export default PostDetails 