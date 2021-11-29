import React from 'react';
import { useEffect, useState } from 'react';
const App = () => {
  const [randomJoke,setRandomJoke] = useState("Random joke displaying...");
  const [reply,setReply] = useState("");
  useEffect(()=>{
      fetch("https://v2.jokeapi.dev/joke/Any")
      .then(res => res.json())
      .then(response=>{
        console.log(response)
        setRandomJoke(response.setup)
        setReply(response.delivery)
      })
  },[])
  return(
    <div style={{textAlign: 'center'}}>
      
      <h1>Fun Fact Generator</h1>
      <h2>{randomJoke}</h2>
      <h3>"{reply}"</h3>
    </div>
  )
}

export default App