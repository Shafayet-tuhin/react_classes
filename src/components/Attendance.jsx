import React, { useContext } from 'react'
import { studentContext } from '../contexts/StudentProvider'


const Attendance = () => {
 
    const { studnetState, dispatch } = useContext(studentContext);

    return (
        <>
            <div className="list present-students">
                <h2>Present Students</h2><hr />
                <ul>
                    {
                        studnetState.students.filter(item => item.isPresent === true).map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <button onClick={() => dispatch({type : 'Toggle' , value : item.id})}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div className="list absent-students">
                <h2>Absent Students</h2><hr />
                <ul>
                    {
                        studnetState.students.filter(item => item.isPresent === false).map(item => (
                            <li key={item.id}>
                                <span>{item.name}</span>
                                <button onClick={() => dispatch({type : 'Toggle' , value : item.id})}>Remove</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Attendance