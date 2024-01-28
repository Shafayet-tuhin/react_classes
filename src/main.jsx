import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Posts from './pages/Posts.jsx';
import Todos from './pages/Todos.jsx';
import PostDetails from './pages/PostDetails.jsx';
import TodoDetails from './pages/TodoDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Posts/> ,
  },
  {
    path: "/todos",
    element: <Todos/> ,
  },
  {
    path: "/posts/:postId",
    element: <PostDetails/> ,
  },
  {
    path: "/todos/:todoId",
    element: <TodoDetails/> ,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
