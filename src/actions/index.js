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
