import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const params = useParams();
  let [pageNumber, setPageNumber] = useState(params.num);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=a0217716901568c9c94486471cacad13&page=${pageNumber}`
      )
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.log(err));
  }, [pageNumber]);

  const nextPage = () => {
    pageNumber = parseInt(pageNumber) + 1;
    setPageNumber(pageNumber);
  };
  const prevPage = () => {
    if (pageNumber > 1) {
      pageNumber = parseInt(pageNumber) - 1;
      setPageNumber(pageNumber);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="d-flex justify-content-center my-4">
        <Link
          className="btn btn-danger"
          to={"/movies/1"}
          onClick={() => window.location.reload()}
        >
          First Page
        </Link>
        <Link
          to={`/movies/${pageNumber}`}
          onClick={prevPage}
          className="btn btn-dark mx-3"
        >
          &#8592; Previous
        </Link>
        <Link
          className="btn btn-dark"
          to={`/movies/${pageNumber}`}
          onClick={nextPage}
        >
          Next &#8594;
        </Link>
      </div>
    </div>
  );
};

export default Home;
