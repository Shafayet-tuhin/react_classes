import { createContext, useState } from "react";

export const studentContext = createContext() ; 


const studentProvider = ({children}) => {
    const [studentName , setStudentName] = useState("") ; 
    const [students,setStudents] = useState([]) ; 
    const [editMode , setEditMode] = useState(false); 
    const [editableStudent , setEditableStudent] = useState(null) ; 

    const obj = {
        studentName,
        setStudentName,
        students,
        setStudents,
        editMode,
        setEditMode,
        editableStudent,
        setEditableStudent
    }

    return (
        <studentContext.Provider value={obj}>
            {children}
        </studentContext.Provider>
    )
}

export default studentProvider 