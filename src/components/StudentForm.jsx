import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider';

const StudentForm = () => {

    const { studnetState, dispatch } = useContext(studentContext);
  
  
  return (
          <form onSubmit={(e) => {
            e.preventDefault() ; 
            studnetState.editMode ? dispatch({type : 'UpdateStudent'}) : dispatch({type : 'CreateStudent'})
          }}>
            <input type="text" value={studnetState.studentName} onChange={(el) => dispatch({type:'ChangeStudent_Name' , value : el.target.value}) } />
            <button type="submit">{studnetState.editMode ? "Update Student" : "Add Student"}</button>
          </form>
  )
}

export default StudentForm