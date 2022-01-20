import { axiosMovies } from "../apis/moviesApi";

export const incrementFavs = (movie) => {
  return {
    type: "INCREMENT_FAVS",
    payload: movie,
  };
};
export const decrementFavs = (movie) => {
  return {
    type: "DECREMENT_FAVS",
    payload: movie,
  };
};
export const fetchMovies = (pageNumber, lang) => {
  return async (dispatch) => {
    const response = await axiosMovies
      .get(
        `/movie/popular?api_key=a0217716901568c9c94486471cacad13&page=${pageNumber}&language=${lang}`
      )
      .catch((err) => console.log(err));
    dispatch({
      type: "FETCH_MOVIES",
      payload: response.data.results,
    });
  };
};

export const fetchSearchResults = (lang, queryString) => {
  return async (dispatch) => {
    const response = await axiosMovies
      .get(
        `/search/movie?api_key=a0217716901568c9c94486471cacad13&query=${queryString}&language=${lang}`
      )
      .catch((err) => console.log(err));
    dispatch({
      type: "SEARCH_MOVIES",
      payload: response.data.results,
    });
  };
};
