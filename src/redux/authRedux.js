const initialstate = {
  user: null,
  isLoading: false,
};

const Reducer = (state = initialstate, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, user: action.payload };
    case "signout":
      return { ...state, user: null };
    case "setUser":
      return { ...state, user: action.payload };
    case "updateIsLoading":
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export default Reducer;
