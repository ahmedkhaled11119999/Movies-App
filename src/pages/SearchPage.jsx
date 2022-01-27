import MovieCard from "../components/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchResults } from "../actions";
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { languageContext } from "../contexts/langContext";

const SearchPage = () => {
  const dispatch = useDispatch();
  const { lang } = useContext(languageContext);
  const params = useParams();
  const searchResult = useSelector((state) => state.fetchData);
  const queryString = params.queryString;
  useEffect(() => {
    dispatch(fetchSearchResults(lang, queryString));
  }, [lang, queryString]);

  return (
    <div className="container">
      <div className="row">
        {searchResult.length > 0 ? (
          searchResult.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })
        ) : (
          <h1 className="text-center m-5">No results found.</h1>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
