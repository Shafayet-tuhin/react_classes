import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BoardProvider from "./contexts/Board.jsx";
import ListProvider from "./contexts/List.jsx";
import TaskProvider from "./contexts/Task.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
       <BoardProvider>
            <ListProvider>
                <TaskProvider>
                        <App />
                </TaskProvider>
            </ListProvider>
       </BoardProvider>
  </React.StrictMode>
);
