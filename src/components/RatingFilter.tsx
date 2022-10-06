import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

const RatingFilter = ({ allMovies, setMovies } : {
  allMovies: any; 
  setMovies: any;
}) => {
  
  const [ratingValue, setRatingValue] = useState(0);

  const filterMoviesByRating = (ratingValue: number) => {

    setRatingValue(ratingValue)

    const arrayOfMoviesToFilter = [...allMovies];

    const moviesFiltered = arrayOfMoviesToFilter.filter(movie => Math.trunc(movie.vote_average) === ratingValue);

    setMovies(moviesFiltered);
}  

  return (
    <div className="text-center mt-8">
        <h2>Filter by rating</h2>

        <Rating
            onClick={filterMoviesByRating} 
            transition
            iconsCount={10}
        />  
    </div>
  )
}

export default RatingFilter