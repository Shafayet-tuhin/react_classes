import React, { useEffect } from 'react'

const About = () => {

  useEffect(() => {
   return () => {
     console.log('About component removed')
   }
  },[])

  return (
    <div>
        <h1>I am at About JSX</h1>
    </div>
  )
}

export default About