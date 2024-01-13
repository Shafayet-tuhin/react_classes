import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider'


const Attendance = () => {

  const {students , setStudents}= useContext(studentContext)


    const changeStudent = (id) => {
        const targetStudent = students.find(item => item.id === id)

        const updatedStudents = students.map((item) => {
            if (item.id == targetStudent.id) {

                item.isPresent = !item.isPresent;

                // if ( item.isPresent == false){
                //   item.isPresent = true ;
                // }
                // else {
                //   item.isPresent = false ;
                // }

            }
            return item;
        })
        setStudents(updatedStudents);
    }



    return (
        <>
            <div className="list present-students">
                <h2>Present Students</h2><hr />
                <ul>
                    {
                        students.filter(item => item.isPresent === true).map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <button onClick={() => { changeStudent(item.id) }}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className="list absent-students">
                <h2>Absent Students</h2><hr />
                <ul>
                    {
                        students.filter(item => item.isPresent === false).map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <button onClick={() => { changeStudent(item.id) }}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Attendance