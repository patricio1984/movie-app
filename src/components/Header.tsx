import { useMemo, useCallback } from "react";
import axios from "axios"

const Header = ({ setMovies, setAllMovies }: {
  setMovies: any;
  setAllMovies: any;
}) => {

  const debounce = (func: any) => {
    let timer: any;
    return function (...args: any[]) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);

      }, 2500);
    }
  }

  const changeHandler = useCallback(async (e: any) => {
    const { value } = e.target;

    if (value.length === 0) {
      return;
    }

    const API_URL_Search = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${value}`;
    
    const searchResult = await axios.get(API_URL_Search);

    setMovies(searchResult.data.results);

    setAllMovies(searchResult.data.results);
  }, [setMovies, setAllMovies])

  const debouncedInputHandler:any = useMemo(() => debounce(changeHandler), [changeHandler]);

  return (
    <header className="hero-image">

        <h1 className="hero-title">Movie App</h1>

        <input
            className="hero-input rounded px-3 py-2"  
            type="search"
            placeholder="Movie Search"
            aria-label="search"
            name="query"
            onChange={debouncedInputHandler}
        />
    </header>
  )
}

export default Header