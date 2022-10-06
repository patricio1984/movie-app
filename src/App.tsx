import { useState, useEffect } from 'react'
import './App.css';
import MovieDetail from "./components/MovieDetail"
import Header from './components/Header'
import RatingFilter from './components/RatingFilter';
import PaginationSize from './components/PaginationSize';
import axios from 'axios';

function App() {

  const [ movies, setMovies ] = useState([]);
  const [ allMovies, setAllMovies ] = useState([]);
  const [ genre, setGenre ] = useState([]);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    const API_URL_popular = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`;
    const API_URL_genre = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`;
    
    const requestOne = axios.get(API_URL_popular);
    const requestTwo = axios.get(API_URL_genre);

    axios.all([requestOne, requestTwo]).then(axios.spread((...responses: any[]) => {
      const responseOne = responses[0]
      const responseTwo = responses[1]
      
      setMovies(responseOne.data.results);
      setAllMovies(responseOne.data.results);
      setGenre(responseTwo.data.genres);

    })).catch((errors: any) => {
      throw(errors);
    })
  }, [setMovies, page])
  
  return (
    <>
      <Header 
        setMovies={setMovies} 
        setAllMovies={setAllMovies}      
      />

      <RatingFilter 
        allMovies={allMovies}
        setMovies={setMovies}
      />

      <main className="container mx-auto my-8">
        {movies.length > 0 ? (
            <div className="grid p-4 lg:grid-cols-4 md:grid-cols-2 gap-4 justify-center">
            {movies.map((movie: any) =>
              <MovieDetail key={movie.id} movie={movie} genre={genre}/>
            )}
          </div>
        ) : (
            <h2 className="text-center text-2xl">Sorry! No movies found</h2>
        )}
      </main>

      <div className="md:mx-0 m-8 text-center flex justify-center">
        <PaginationSize setPage={setPage} />
      </div>    
    </>

  );
}

export default App;
