import { useEffect, useReducer } from 'react';
import './App.css';

const StudentsArray = JSON.parse(localStorage.getItem('key')) || [];

const initState = {
  noteTitle: "",
  notes: StudentsArray,
  editMode: false,
  editableNote: null,
};

const noteReducer = (currentState, action) => {
  switch (action.type) {
    case 'Change_Title': {
      return {
        ...currentState,
        noteTitle: action.payload,
      };
    }

    case 'Create_Note': {
      const newNote = {
        id: Date.now(),
        title: currentState.noteTitle,
      };
      return {
        ...currentState,
        notes: [...currentState.notes, newNote],
        noteTitle: "",
      };
    }
    
    case 'Edit_Note': {
      const tobeUpdated = currentState.notes.find(el => el.id === action.payload);

      return {
        ...currentState,
        editMode: true,
        editableNote: tobeUpdated,
        noteTitle: tobeUpdated.title,
      };
    }

    case 'Update_Note': {
      return {
        ...currentState,
        notes: currentState.notes.map(item => {
          if (item.id === currentState.editableNote.id) {
            item.title = currentState.noteTitle;
          }
          return item;
        }),
        editMode: false,
        editableNote: null, 
        noteTitle: "",
      };
    }
    
    case 'Remove_Note': {
      return {
        ...currentState,
        notes: currentState.notes.filter(item => item.id !== action.payload),
      };
    }

    default:
      return currentState;
  }
};

function App() {
  const [notestStates, dispatch] = useReducer(noteReducer, initState);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(notestStates.notes));
  }, [notestStates.notes]);

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
