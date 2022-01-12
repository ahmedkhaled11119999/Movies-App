import MovieCard from "../components/MovieCard";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favMovies = useSelector((state) => state.favArr);

  return (
    <div className="container">
      <div className="row">
        {favMovies.length > 0 ? (
          favMovies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        ) : (
          <h1 className="text-center m-5">
            You have no favourite films! go and add favourite films from Home
            page &#128516;
          </h1>
        )}
      </div>
    </div>
  );
};

export default Favourites;
