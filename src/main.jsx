import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StudentProvider from './contexts/StudentProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

   <StudentProvider>
    <App /> 
   </StudentProvider>

)
