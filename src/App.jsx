import { useState } from 'react'
import './App.css'
import StudentForm from './components/StudentForm';
import AllStudentList from './components/AllStudentList';
import Attendance from './Attendance';

const App = () => {   
  
  const [studentName , setStudentName] = useState("") ; 
  const [students,setStudents] = useState([]) ; 
  const [editMode , setEditMode] = useState(false); 
  const [editableStudent , setEditableStudent] = useState(null) ; 
  



  return (

    <div>
          <StudentForm 
           studentName = {studentName }
           setStudentName = {setStudentName} 
           students = {students} 
           setStudents = {setStudents} 
           editableStudent = {editableStudent} 
           setEditableStudent = {setEditableStudent}
           editMode = {editMode} 
           setEditMode = {setEditMode}  

          />

          <div className="student-section">

           <AllStudentList 
           students = {students}
           setStudents = {setStudents} 
           setEditMode = {setEditMode}  
           setEditableStudent = {setEditableStudent }
           setStudentName  = {setStudentName}
           />

            <Attendance 
             students= {students} 
             setStudents= {setStudents}     
            />

          </div>
    </div>
  )
}

export default App