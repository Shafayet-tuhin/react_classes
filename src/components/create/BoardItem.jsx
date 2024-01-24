import { useContext } from "react";
import icons from "../../assets";
import { BoardContext } from "../contexts/Board";
import { listContext } from "../contexts/List";
import { taskContext } from "../contexts/Task";

const BoardItem = ({ board }) => {
  console.log("board.title:", board.title);

  const { dispatchBoardAction } = useContext(BoardContext);
  const { lists, dispatchListAction } = useContext(listContext);
  const { tasks, dispatchTaskAction } = useContext(taskContext);

  const removeHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
  
    dispatchBoardAction({ type: "DeleteBoard", payload: board.id });
    const listToBeRemoved = lists.filter((item) => item.boardId === board.id);
    const taskToBeRemoved = tasks.filter((item) => item.boardId === board.id);
  
    listToBeRemoved.forEach((item) => {
      dispatchListAction({ type: "DeleteList", payload: item.id });
    });
  
    taskToBeRemoved.forEach((item) => {
      dispatchTaskAction({ type: "DeleteTask", payload: item.id });
    });
  };
  

  return (
    <div className="board-box d-flex flex-direction-column">
      <div className="d-flex justify-content-between">
      <h5>{board.title.title}</h5>
        <img
          onClick={removeHandler}
          src={icons.crossIcon}
          alt=""
          className="add-item-icon"
        />
      </div>
    </div>
  );
};

export default BoardItem;