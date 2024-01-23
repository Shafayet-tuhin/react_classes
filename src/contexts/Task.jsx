import { createContext , useReducer } from "react";
import { taskReducer } from "../reducers/task";


export const taskContext = createContext() ; 

const TaskProvider = ({children}) => {
    const [tasks , dispathctask] = useReducer(taskReducer , [] )
  return(
    <taskContext.Provider value={{tasks , dispathctask}}>
      {children}
    </taskContext.Provider>
  )
}

export default TaskProvider;