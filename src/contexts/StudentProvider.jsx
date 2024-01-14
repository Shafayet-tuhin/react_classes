import { createContext, useState, useEffect } from "react";

export const studentContext = createContext();

const studentProvider = ({ children }) => {
 
  const storedStudents = JSON.parse(localStorage.getItem('key')) || [] ; 

  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState(storedStudents);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

useEffect ( () => {
  localStorage.setItem('key' , JSON.stringify(students)) ; 
}, [students]) ; 

  const obj = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
  };

  return (
    <studentContext.Provider value={obj}>
      {children}
    </studentContext.Provider>
  );
};

export default studentProvider;
