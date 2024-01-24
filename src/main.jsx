import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import BoardProvider from "./components/contexts/Board.jsx";
import ListProvider from "./components/contexts/List.jsx";
import TaskProvider from "./components/contexts/Task.jsx";

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
