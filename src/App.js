// the app import movieadd an movieList components and the data of the movies
import { useState } from 'react';
import './App.css';
import MovieAdd from './components/MovieAdd';
import MovieList from './components/MovieList';

import { movieData } from './MovieData';

function App() {
  // the declaration of the useState for the movie data
  const [movies,setMovies]=useState(movieData)
  // this function add a new movie to the data movie
  const handleAdd =(newMovie)=>{
    setMovies([...movies,newMovie])
    }
    // state for search by title and rate
    const [searchTitle,setSearchTitle]=useState("");
    const [searchRate,setSearchRate]=useState(0);

  return (
    <div className="App">
      <header className="App-header">
      <MovieAdd setSearchTitle={setSearchTitle} setSearchRate={setSearchRate} funcAdd={handleAdd}></MovieAdd>
       </header>
      <main>
      
<MovieList searchTitle={searchTitle} searchRate={searchRate} movies={movies}></MovieList>
      </main>
      <footer>
      </footer>
    </div>
  );
}
// export of data
export default App;
