import { useState } from 'react'
import './App.css'

const App = () => {   
  
  const [studentName , setStudentName] = useState("") ; 
  const [students,setStudents] = useState([]) ; 
  const [editMode , setEditMode] = useState(false); 
  const [editableStudent , setEditableStudent] = useState(null) ; 
  
  
  const createStudentHandler = (e) => {
    e.preventDefault() ; 

    if( !studentName ) {
      return alert("Please enter a name") ; 
    }

    const newStudent = {
      id : Date.now(),
      name : studentName , 
      isPresent : undefined ,
    }
    setStudents([...students,newStudent]) ; 
    setStudentName("") ;
  } 

  const revomeHandler = (id) => {
    const currentStudent = students.filter( el => el.id !== id) ;
    setStudents(currentStudent) ; 
  }

  const editHandler = (id) => {
      const toBeUpdated = students.find(el => el.id === id) ;
        
      setEditMode(true) ; 
      setEditableStudent(toBeUpdated) ;
      setStudentName(toBeUpdated.name) ;
  }


  const updateHandler = (el) => {
    el.preventDefault() ; 

    if(!studentName ) {
      return alert("Please enter a name") ; 
    }
   
    const updateStudentsArray = students.map ( (item) => {
 
       if ( item.id === editableStudent.id) {
        item.name = studentName ; 
       }
       return item ; 
    })
 
    setStudents(updateStudentsArray) ;
    setEditMode(false) ;
    setEditableStudent(null) ;
    setStudentName("") ;
  }
 

  return (

    <div>
          <form onSubmit={editMode ? updateHandler : createStudentHandler}>
            <input type="text" value={studentName} onChange={(el) => setStudentName(el.target.value)} />
            <button type="submit">{editMode ? "Update Student" : "Add Student"}</button>
          </form>

          <div className="student-section">

            <div className="list all-students">
              <h2>All Students</h2><hr />
              <ul>
                {
                  students.map(item => (
                    <li key={item.id}>
                      <span>{item.name}</span>
                      <button onClick={() => {editHandler(item.id)}}>Edit</button>
                      <button onClick={() => {revomeHandler(item.id)}}>Delete</button>
                      <button>Make Present</button>
                      <button>Make Absent</button>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="list present-students">
              <h2>Present Students</h2><hr />
              <ul>
                {
                  students.filter( item => item.isPresent === true).map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button>Remove</button>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="list absent-students">
              <h2>Absent Students</h2><hr />
              <ul>
                {
                  students.filter( item => item.isPresent === false).map(item => (
                    <li key={item.id}>
                        <span>{item.name}</span>
                        <button>Remove</button>
                    </li>
                  ))
                }
              </ul>
            </div>

          </div>
    </div>
  )
}

export default App