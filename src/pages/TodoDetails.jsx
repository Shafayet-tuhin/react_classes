import React, { useEffect, useState } from 'react'
import Nav from './../components/Nav';
import { useParams } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';

const TodoDetails = () => {

    const {todoId} = useParams()
     
    const {data:Todos ,isloading ,error} = useFetch(`https://jsonplaceholder.typicode.com/todos/${todoId}` , null)

  return (
    <div>
        <Nav />
        {isloading && <h2>Loading.....</h2>}
        {error && <h2>{error}</h2>}

        <div className="Todo">
        <p> <strong>Todo Id</strong> : {Todos?.id} </p>
        <p> <strong>Title</strong> : {Todos?.title} </p>
        <p> <strong>Status</strong> : {Todos?.completed ? 'True' : 'False'} </p>
        </div>


        
    </div>
  )
}

export default TodoDetails 