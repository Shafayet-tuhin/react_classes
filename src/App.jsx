import { useEffect, useState } from 'react'
import './App.css'

function App() {


  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  //  useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(response => {
  //       setData(response)
  //       console.log(response)
  //     });
  // },[]); // [] eta dite hobe must ... nahole loop e chole jabe 

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setLoading(true);
        return response.json();
      })
      .then(response => {
        setLoading(false);
        setData(response)
        setError("")
      })
      .catch(err => {
        setLoading(false);
        setError(err.message)
        setData([])
      })
  }, []);

  return (
    <div>

       {loading && <h1>Loading.......</h1> }
       {error && <h1>{error} </h1>}


      <h2> API Clling  </h2>
      <ul>
        {
          data.map(item => (
            <li key={item.id}>
              <h3>{item.id} :  {item.title}</h3>
              <p>{item.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App
