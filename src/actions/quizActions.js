export const enterUser = (dispatch) => (username) => {
  dispatch({ type: "enterUser", payload: username });
};

export const updateScore = (dispatch) => {
  dispatch({ type: "updateScore" });
};

export const isFinished = (dispatch) =>  {
  dispatch({ type: "updateScore" });
};
