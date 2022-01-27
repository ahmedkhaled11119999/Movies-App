import { useState, useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../actions/";
import { languageContext } from "../contexts/langContext";

const Home = () => {
  const movies = useSelector((state) => state.fetchData);
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { lang } = useContext(languageContext);

  let [pageNumber, setPageNumber] = useState(
    params.num === undefined ? 1 : params.num
  );
  useEffect(() => {
    dispatch(fetchMovies(pageNumber, lang));
    window.scrollTo(0, 0);
  }, [pageNumber, lang]);

  const firstPage = () => {
    setPageNumber(1);
    history.push("/Movies-App/movies/1");
  };

  const prevPage = () => {
    if (pageNumber > 1) {
      pageNumber = parseInt(pageNumber) - 1;
      setPageNumber(pageNumber);
      history.push(`/Movies-App/movies/${pageNumber}`);
    }
  };

  const nextPage = () => {
    pageNumber = parseInt(pageNumber) + 1;
    setPageNumber(pageNumber);
    history.push(`/Movies-App/movies/${pageNumber}`);
  };
  return (
    <div className="container">
      <div className="row">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
      <div className="d-flex justify-content-center my-4">
        <button className="btn btn-danger" onClick={() => firstPage()}>
          First Page
        </button>
        <button onClick={() => prevPage()} className="btn btn-dark mx-3">
          &#8592; Previous
        </button>
        <button className="btn btn-dark" onClick={() => nextPage()}>
          Next &#8594;
        </button>
      </div>
    </div>
  );
};

export default Home;
