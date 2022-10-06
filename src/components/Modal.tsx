import { getMovieImg } from "../utils/getMovieImg";

const Modal = ({movie, genre, showModal, setShowModal} : {
  movie: any; 
  genre: any; 
  showModal: any; 
  setShowModal: any;
}) => {

  const {title, poster_path, vote_average, release_date, overview, genre_ids} = movie;

  const genresArray:any = genre.reduce((genresArray:any, gen: any) => {
    const { id, name } = gen;
    genresArray[id] = name;
    return genresArray;
  }, []);

  const API_IMG = getMovieImg(poster_path, 300);

  return (
    <>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-4 lg:mx-auto max-w-md">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                  <h3 className="text-3xl font=semibold">{title}</h3>
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-l flex items-center justify-center bg-gray-400 p-2 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto overflow-auto max-h-96 lg:max-h-max">
                    <figure className="flex justify-center">
                        <img 
                          className="max-h-80" 
                          src={API_IMG} 
                          alt={title}
                          width={230}
                          height={345}
                          loading="lazy" 
                        />
                    </figure>
                    <p className="mt-5 font-bold">Rating: <span className="font-normal">{vote_average}</span></p>
                    <p className="mt-5 font-bold">Release date: <span className="font-normal">{release_date}</span></p>
                    <p className="mt-5 font-bold">Genres:</p>
                    <p>
                      {genre_ids.map((genre_id: number) => genresArray[genre_id]).join(", ")}
                    </p>
                    <p className="mt-5 font-bold">Overview</p>
                    <p className="mt-2">{overview}</p>
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;