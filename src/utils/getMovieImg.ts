import placeholder from "../images/placeholder.jpg";

export function getMovieImg(path: any, width: any) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholder;
}
