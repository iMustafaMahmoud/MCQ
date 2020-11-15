import { NavigationActions } from "react-navigation";

let navigator;

export const setNavigator = (nav) => {
  navigator = nav;
};

export const navigate = (routeName, params) => {
  navigator.dispatch(
    // to update our functions as the original navigation
    NavigationActions.navigate({
      routeName: routeName,
      params: params,
    })
  );
};
