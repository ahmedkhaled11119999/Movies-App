const favCounter = (state = [], action) => {
  switch (action.type) {
    case "INCREMENT_FAVS":
      state = state.concat(action.payload);
      console.log(state);
      return state;
    case "DECREMENT_FAVS":
      const index = state.map((movie) => movie.id).indexOf(action.payload.id);
      if (index > -1) {
        state = state.filter((item, i) => i !== index);
      }
      console.log(state);
      return state;
    default:
      return state;
  }
};

export default favCounter;
