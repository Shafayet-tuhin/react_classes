import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider';

const AllStudentList = () => {

  const {students , setStudents , setEditMode , setEditableStudent , setStudentName} = useContext(studentContext) ;
      
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



 
 
   const presentHandler =(id) => {
   const targetStudent = students.find( item => item.id === id) ; 
   
   if( targetStudent.isPresent === true || targetStudent.isPresent === false) {
    return alert("The student has already in a list") ;
   }

   const updatedStudets = students.map((item) => {
    if (item.id == targetStudent.id) {
      item.isPresent = true ;
    }
    return item ; 
   })
    
   setStudents(updatedStudets) ;
  
  }

  const absentHandler = (id) => {
    const targetStudent = students.find( item => item.id === id) ; 
   
    if( targetStudent.isPresent === true || targetStudent.isPresent === false) {
     return alert("The student has already in a list") ;
    }
 
    const updatedStudets = students.map((item) => {
     if (item.id == targetStudent.id) {
       item.isPresent = false ;
     }
     return item ; 
    })
     
    setStudents(updatedStudets) ;
  }

  return (
    <div className="list all-students">
    <h2>All Students</h2><hr />
    <ul>
      {
        students.map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            <button onClick={() => {editHandler(item.id)}}>Edit</button>
            <button onClick={() => {revomeHandler(item.id)}}>Delete</button>
            <button onClick={() => {presentHandler(item.id)}}>Make Present</button>
            <button onClick={() => {absentHandler(item.id)}}>Make Absent</button>
          </li>
        ))
      }
    </ul>
  </div>
  )
}

export default AllStudentList