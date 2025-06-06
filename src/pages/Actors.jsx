import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/actors')
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      setActors(data);
    }).catch((err)=>{
      console.error(err)
    })
  },[]);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actors.map((actor)=>{
          return(
            <article key={actor.id}>
              <h2>{actor.name}</h2>
              <ul>
                {actor.movies.map((movie,index)=>{
                  return(
                    <li key={index}>{movie}</li>
                  )
                })}
              </ul>
            </article>
          )
        })}
      </main>
    </>
  );
};

export default Actors;
