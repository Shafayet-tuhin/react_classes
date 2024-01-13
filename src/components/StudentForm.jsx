import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider';

const StudentForm = () => {

   const {studentName , setStudentName , students , setStudents , editableStudent , setEditableStudent , editMode ,setEditMode } = useContext(studentContext)
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
          <form onSubmit={editMode ? updateHandler : createStudentHandler}>
            <input type="text" value={studentName} onChange={(el) => setStudentName(el.target.value)} />
            <button type="submit">{editMode ? "Update Student" : "Add Student"}</button>
          </form>
  )
}

export default StudentForm