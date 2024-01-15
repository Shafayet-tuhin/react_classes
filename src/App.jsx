import { useReducer } from 'react';
import './App.css';
import { noteReducer } from './reducers/NoteReducer';

const initState = {
  noteTitle: "", // Fixed the typo here
  notes: [],
  editMode: false,
  editableNote: null,
};



function App() {
  const [notestStates, dispatch] = useReducer(noteReducer, initState);

  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        notestStates.editMode ? dispatch({ type: 'Update_Note' }) : dispatch({ type: 'Create_Note' });
      }}>
        <input
          type="text"
          value={notestStates.noteTitle}
          onChange={(el) => dispatch({ type: 'Change_Title', payload: el.target.value })}
        />
        <button type="submit"> {notestStates.editMode ? "Update Note " : "Add Note"} </button>
      </form>

      <ul>
        {notestStates.notes.map(el => (
          <li key={el.id}>
            <span>{el.title}</span>
            <button onClick={() => dispatch({ type: 'Edit_Note', payload: el.id })}>Edit</button>
            <button onClick={() => dispatch({ type: 'Remove_Note', payload: el.id })}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
