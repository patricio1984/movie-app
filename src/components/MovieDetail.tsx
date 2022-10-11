import { useState } from "react"
import Modal from "./Modal"
import { getMovieImg } from "../utils/getMovieImg";

const MovieDetail = ({movie, genre} : {
  movie: any;
  genre: any;
}) => {

  const [showModal, setShowModal] = useState(false);

  const { title, poster_path, vote_average } = movie;
  const API_IMG = getMovieImg(poster_path, 300);

  return (
    <div className="bg-white text-center p-3">
        <figure 
          className="figure__container flex justify-center hover:scale-110 transform transition duration-500 cursor-pointer"
          onClick={() => setShowModal(true)}  
        >
          <img
            className="figure__container--img" 
            src={API_IMG} 
            alt={`Cinema poster of ${title}`}
            width={230}
            height={345} 
            loading="lazy"
          />

          <h2 className="bg-green-500 text-2xl absolute bottom-1 ratingButton flex justify-center items-center">{vote_average}</h2>

          <div className="overlay">
            <div className="text">{title}</div>
          </div>
        </figure>
 
        <Modal 
          movie={movie} 
          setShowModal={setShowModal}
          showModal={showModal}
          genre={genre} 
        />      
    </div>
  )
}

export default MovieDetail