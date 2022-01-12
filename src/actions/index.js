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
export const fetchMovies = (pageNumber) => {
  return async (dispatch) => {
    const response = await axiosMovies
      .get(
        `/popular?api_key=a0217716901568c9c94486471cacad13&page=${pageNumber}`
      )
      .catch((err) => console.log(err));
    dispatch({
      type: "FETCH_MOVIES",
      payload: response.data.results,
    });
  };
};
