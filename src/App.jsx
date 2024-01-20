import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [noteTitle, setNoteTitle] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editableNote, seteditableNote] = useState(null);
  const [notes, setNotes] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const getFetch = () => {
    fetch('http://localhost:3000/notes')
      .then((res) => {
        return res.json()
        setLoading(true);
      })
      .then((res) => {
        setNotes(res)
        setLoading(false);
        setError("");
      })
      .catch((er) => {
        setError(er)
        setLoading(false);
        setNotes([]);
      })
  }

  const createHandler = () => {
    if (noteTitle === '') {
      return alert('Please enter a title');
    }

    const newnote = {
      id: Date.now() + '',
      title: noteTitle,
    }
    fetch(`http://localhost:3000/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newnote)
    })
      .then(() => {
        getFetch();
        setNoteTitle('')
      })
  }


  const removeHandler = (id) => {
    fetch(`http://localhost:3000/notes/${id}`, {
      method: 'DELETE'
    })
      .then(() => getFetch())
  }

  const editHandler = (id) => {
    const toBeUpdated = notes.find( (item) => item.id === id ) ; 
    setEditMode(true) ;
    seteditableNote(toBeUpdated); 
    setNoteTitle(toBeUpdated.title) ;
  }
  
   const updateHandler = () => {
     if (noteTitle === '') {
       return alert('Please enter a title');
     }

      fetch (`http://localhost:3000/notes/${editableNote.id}` , {
         method : 'PUT' ,
         headers : {
          'Content-Type': 'application/json'
         },
         body : JSON.stringify({id: editableNote.id , title : noteTitle}) ,
      })
      .then(() =>{
        getFetch()
        setNoteTitle('') ;
        setEditMode(false) ;
        seteditableNote(null) ;
      }) ;
   }

  useEffect(() => {
    getFetch();
  }, [])

  return (
    <div>

      {loading && <h1>Loading.......</h1>}
      {error && <h1>{error} </h1>}

      <form onSubmit={(e) => {
        e.preventDefault();
        editMode ? updateHandler() : createHandler() ;
      }}>
        <input type='text' value={noteTitle} onChange={(e) => setNoteTitle(e.target.value)} />
        <button type='submit'>{editMode ? "Update Note" : "Create Note"}</button>
      </form>

      <ul className='list'>
        {
          notes.map(item => (
            <li key={item.id}>
              <span>{item.title}</span>
              <button onClick={() => { editHandler(item.id) }} >Edit</button>
              <button onClick={() => { removeHandler(item.id) }} >Delete</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
