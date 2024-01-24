import { useContext, useState } from "react"
import { BoardContext } from "../contexts/Board";

const BoardCreatingForm = () => {
    const [boardTitle , setBoardTitle] = useState('');
    const {dispatchBoard} = useContext(BoardContext) ; 

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchBoard({type: 'CreateBoard', payload: {title: boardTitle}}) ; 
        setBoardTitle('');
    } 

    return (
        <div className="align-center m-top-md">
               <form onSubmit={handleSubmit}>
                <input type="text" value={boardTitle} onChange={(e) => setBoardTitle(e.target.value)} />
                <button type="submit">Create Board</button>
               </form>
        </div>
    )
}
export default BoardCreatingForm