import { createContext , useReducer } from "react";
import { listReducer } from '../reducers/list';

export const BoardContext = createContext() ; 

const ListProvider = ({children}) => {
    const [lists , dispathclist] = useReducer(listReducer , [] )
  return(
    <listContext.Provider value={{lists , dispathclist}}>
      {children}
    </listContext.Provider>
  )
}

export default ListProvider;