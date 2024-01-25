import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BoardContext } from "../contexts/Board";
import { listContext } from "../contexts/List";

const BoardDetails = () => {
  const [editMode, setEditMode] = useState(false);
  const [listTitle, setListTitle] = useState("");

  const { boardId } = useParams();

  const { dispatchBoard } = useContext(BoardContext);
  const { lists, dispathclist } = useContext(listContext);

  const submitHandler = (e) => {
    e.preventDefault();

    const listId = Date.now() + "";

    dispathclist({
      type: "CreateList",
      payload: {
        id: listId,
        title: listTitle,
        boardId: boardId,
      },
    });

    dispatchBoard({
      type: "Add_List_ID_ToBoard",
      payload: {
        id: boardId,
        listId: listId,
      },
    });
    setEditMode(false);
    setListTitle("");
  };

  return (
    <div className="d-flex m-top-sm flex-direction-row">
      <Link to="/">Go Back</Link>
      {lists
        .filter((item) => item.boardId === boardId)
        .map((taskList) => (
          <TaskList key={taskList.id} taskList={taskList} />
        ))}

      {!editMode ? (
        <AddItem listAddItem={true} setEditMode={setEditMode} />
      ) : (
        <AddItem
          title={listTitle}
          listForm={true}
          onchangeHandler={(e) => {
            setListTitle(e.target.value);
            submitHandler = { submitHandler };
          }}
        />
      )}
    </div>
  );
};

export default BoardDetails;
