import { createContext, useReducer } from "react";
import { boardReducer } from '../../reducers/board';

export const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const [boards, dispatchBoard] = useReducer(boardReducer, []);
  return (
    <BoardContext.Provider value={{ boards, dispatchBoard }}>
      {children}
    </BoardContext.Provider>
  );
}

export default BoardProvider;
