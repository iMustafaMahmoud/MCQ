import React from 'react';



const initialstate = {
    token: null
}

const Reducer = (state = initialstate, action ) => {
    switch (action.type) {
    case "signup":
      return { token: action.payload };
    case "signout":
      return { token: null };
    default:
      return state;
  }
}




export default Reducer;