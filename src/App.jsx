
import './App.css'
import StudentForm from './components/StudentForm';
import AllStudentList from './components/AllStudentList';
import Attendance from './components/Attendance';

const App = () => {   
  

  return (

    <div>
          <StudentForm/>

          <div className="student-section">

           <AllStudentList />

            <Attendance />

          </div>
    </div>
  )
}

export default App