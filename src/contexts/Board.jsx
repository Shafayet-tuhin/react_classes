import { createContext , useReducer } from "react";
import { boardReducer } from "../reducers/board";

export const BoardContext = createContext() ; 

const BoardProvider = ({children}) => {
    const [boards , dispathcBoard] = useReducer(boardReducer , [] )
  return(
    <BoardContext.Provider value={{boards , dispathcBoard}}>
      {children}
    </BoardContext.Provider>
  )
}

export default BoardProvider;