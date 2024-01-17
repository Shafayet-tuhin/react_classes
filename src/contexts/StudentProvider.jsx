import { createContext, useState, useEffect, useReducer } from "react";


const studentReducer = (currentState, action) => {
  switch (action.type) {

    case "ChangeStudent_Name": {
      return {
        ...currentState,
        studentName: action.value,
      }
    }

    case "CreateStudent": {

      if( currentState.studentName == ""){
       alert (" Name Cant Be Empty")
       return currentState ; 
      }

      const newStudent = {
        id: Date.now(),
        name: currentState.studentName,
        isPresent: undefined,
      }
      return {
        ...currentState,
        students: [...currentState.students, newStudent],
        studentName: "",
      }
    }

    case "EditStudent_Name": {
      const tobeUpdated = currentState.students.find(item => item.id === action.value)

      return {
        ...currentState,
        studentName: tobeUpdated.name,
        editableStudent: tobeUpdated,
        editMode: true,
      }
    }

    case "UpdateStudent": {
      return {
        ...currentState,
        students: currentState.students.map(el => {
          if (el.id === currentState.editableStudent.id) {
            el.name = currentState.studentName;
          }
          return el;
        }),
        editMode: false,
        editableStudent: null,
        studentName: "",
      }
    }

    case "DeleteStudent": {
      return {
        ...currentState,
        students: currentState.students.filter(el => el.id !== action.value),
      }
    }
    case "prepareStudent": {
      return {
        ...currentState,
        students: currentState.students.map(el => {
          if (el.id === action.value) {
            el.isPresent = true;
          }
          return el;
        })
      }
    }
    case "AbsenateStudent": {
      return {
        ...currentState,
        students: currentState.students.map(el => {
          if (el.id === action.value) {
            el.isPresent = false;
          }
          return el;
        })
      }
    }
    case "Toggle": {
      return {
       ...currentState,
         students : currentState.students.map ( el => {
          if ( el.id === action.value ) {
            el.isPresent =!el.isPresent;
          }
          return el;
         })
      }
    }
    default: {
      return currentState;
    }

  }
}

 const saveStudent = JSON.parse(localStorage.getItem('key')) || [] ; 

const initState = {
  students: saveStudent,
  studentName: "",
  editableStudent: null,
  editMode: false,
}




export const studentContext = createContext();

const studentProvider = ({ children }) => {

  const [studnetState, dispatch] = useReducer(studentReducer, initState);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(studnetState.students))
  }, [studnetState.students]);
 
  const obj = {
    studnetState ,
    dispatch
  }
   
  return (
    <studentContext.Provider value={obj}>
      {children}
    </studentContext.Provider>
  );
};

export default studentProvider;
