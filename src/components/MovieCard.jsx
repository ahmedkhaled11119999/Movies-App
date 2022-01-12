import "../MovieCard.css";
import { Link } from "react-router-dom";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { incrementFavs, decrementFavs } from "../actions";

const MovieCard = (props) => {
  const favMovies = useSelector((state) => state.favArr);
  const dispatch = useDispatch();
  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="card cardStyling d-block mx-auto">
        <img
          src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
          className="card-img-top"
          alt={props.original_title}
        />
        <div className="shadow-lg starContainer">
          {favMovies.map((movie) => movie.id).indexOf(props.movie.id) > -1 ? (
            <FaStar
              className="starStyling"
              onClick={() => dispatch(decrementFavs(props.movie))}
            />
          ) : (
            <FaRegStar
              className="starStyling"
              onClick={() => dispatch(incrementFavs(props.movie))}
            />
          )}
        </div>
        <div className="card-body">
          <Link to={`/${props.movie.id}/movie_details`}>
            <p className="card-text h3">{props.movie.original_title}</p>
          </Link>
          <p className="card-text line-clamp">{props.movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
