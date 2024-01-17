import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider';


const AllStudentList = () => {

  const { studnetState, dispatch } = useContext(studentContext);
  
  const presentCheck =(el) => {
    if( el.isPresent === true || el.isPresent === false) {
      return alert( "Student is already in a list ")
    }
    dispatch ( {type : 'prepareStudent' , value : el.id})
  }
  
  const absentCheck =(el) => {
    if( el.isPresent === true || el.isPresent === false) {
      return alert( "Student is already in a list ")
    }
    dispatch ( {type : 'AbsenateStudent' , value : el.id})
  }

  return (
    <div className="list all-students">
      <h2>All Students</h2><hr />
      <ul>
        {
          studnetState.students.map(item => (
            <li key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => dispatch({ type: 'EditStudent_Name', value: item.id })}>Edit</button>
              <button onClick={() => dispatch({ type: 'DeleteStudent', value: item.id })}>Delete</button>
              <button onClick={() => presentCheck(item)}>Make Present</button>
              <button onClick={() => absentCheck(item)}>Make Absent</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default AllStudentList