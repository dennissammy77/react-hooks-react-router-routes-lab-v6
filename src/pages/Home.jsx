import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setmovies]=useState([]);
  useEffect(()=>{
    fetch('http://localhost:4000/movies')
    .then((response)=>{
      return response.json()
    }).then((data)=>{
      setmovies(data);
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
        <h1>Home Page</h1>
        <div>
          {movies.map((movie)=>{
            return(
              <MovieCard title={movie.title} key={movie.id} id={movie.id}/>
            )
          })}
        </div>
      </main>
    </>
  );
};

export default Home;
