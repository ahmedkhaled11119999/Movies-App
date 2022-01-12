const fetchData = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default fetchData;
