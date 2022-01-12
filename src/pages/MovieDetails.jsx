import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosMovies } from "../apis/moviesApi";

const MovieDetails = () => {
  const param = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(async () => {
    const response = await axiosMovies
      .get(
        `https://api.themoviedb.org/3/movie/${param.id}?api_key=a0217716901568c9c94486471cacad13`
      )
      .catch((err) => console.log(err));
    setMovieDetails(response.data);
  }, []);

  return (
    <div className="d-block mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        alt={movieDetails.original_title}
        className="d-block mx-auto"
      />
      <h1 className="text-center m-4">{movieDetails.original_title}</h1>
      <p className="h6 fw-light m-4">{movieDetails.overview}</p>
      <p className="h5 fw-light m-4">Popularity : {movieDetails.popularity}</p>
      <p className="h5 fw-light m-4">Revenue : {movieDetails.revenue}</p>
    </div>
  );
};

export default MovieDetails;
