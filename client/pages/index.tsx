import React, { useEffect, useState } from 'react'
// use effect will run side effect in our front end. on initial load, it makes an api call to see the response from the backend
// use state is used for data that we are retrieving an array format, used to store and display for each user in a for loop
function App() {

  const [message, setMessage] = useState('Loading')
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/home').then(
      response => response.json()
    ).then(
      data => {
        console.log(data)
        setMessage(data.message)
        setPeople(data.people)
        // can get rid off once it starts to work
      }
    )
  }, []) //empty array at the end to run the request only once (shows on console dev tools)

  return (
    <div>
      <div>{message}</div>

      {
        people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))
      }
    </div>
  )
}


export default App
