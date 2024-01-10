import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false) ;
  const [editable , setEditable] = useState(null) ;

  const removeNote = (id) =>{
    const newNote = notes.filter( el => el.id != id) ; 
    setNotes(newNote);
  }
  
  const editNotes = (id) => {
         const toUpdate = notes.find( el => el.id == id) ; 
        
         setEditMode(true) ; 
         setEditable(toUpdate) ; 
         setNoteTitle(toUpdate.title) ;

  }

  const updateNote = (el) => {
    el.preventDefault() ;

    if(noteTitle == '') {
      alert('Please enter a title') ;
    }
        
      const updatedArray = notes.map((el) => {
        if(el.id == editable.id){
          el.title = noteTitle ; 
        }
        return el ;
      }) 
 
    setNotes(updatedArray) ;
    setEditMode(false) ;
    setEditable(null) ;
    setNoteTitle('') ;
   
  }
 
  const noteHandle = (el) => {
    el.preventDefault() ; 

    if(noteTitle !=''){
      const newNote = {
        id : Date.now() ,  
        title : noteTitle, 
      }
     setNotes([...notes, newNote])
     setNoteTitle("");
    }
    else {
      alert("Please enter a title")
    }
  }  


  return (
    <div>
      <form onSubmit={editMode ? updateNote : noteHandle}>
        <input type="text" value={noteTitle} onChange={(el) => setNoteTitle(el.target.value)} />
        <button type="submit"> {editMode ? 'Update Note' : 'Add Note'} </button>
      </form>

      <ul>
        {notes.map(el => (
          <li key={el.id}>
            <span>{el.title}</span>
            <button onClick={() => editNotes(el.id)}>Edit</button>
            <button onClick={() => removeNote(el.id)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default App
