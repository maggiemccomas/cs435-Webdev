import React, { useState, useEffect} from "react"
import './App.css';

function App({ login }){
  const [data, setData] = useState(null);
  const [loading,setloading] = useState(null);
  const [error, setError] = useState(null);

    useEffect(() => {
      if(!login) return;
      setloading(true);

      fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(()=> setloading(false))
        .catch(setError);
    },[login]);

    if(loading) return <h1>Loading...</h1>;
    if(error) 
      return <pre>{JSON.stringify(error, null, 2)}</pre>;
    if(!data) return null;

      return <center><div>
        <h1>{data.name}</h1>
        <p>{data.bio}</p>
        <p>{data.location}</p>
        <p>{"This is my profile picture!"}</p>
        <img alt = {data.login} src = {data.avatar_url}/>
        <p>{"This is another picture!"}</p>
        <img alt = "A dog" src = "https://i.pinimg.com/originals/a6/3c/22/a63c22fc72b62b0624c3df5c0bff13ad.jpg"/>
        <p>{"This is a button you can click!"}</p>
        <button onClick={sayHello}>Default</button>
        <p>{"Bye!"}</p>
      </div>
      </center>
}

function sayHello(){
  alert("You clicked me!")
}

export default App;
