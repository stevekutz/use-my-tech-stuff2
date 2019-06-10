import React from "react";
import { Route, Redirect } from "react-router-dom";


const PrivateRoute = ({ component: Genericomponent, ...therest }) => {
  return (
    <Route
      {...therest} // the props sent in via render prop !!!
      render={() => {
        //  if token exists, we return component passed in (e.g. GasPrices)
        if (localStorage.getItem("token")) {
          return <Genericomponent />;
        } else {
          console.log("redirecting back to Login !!!!");
          console.log("therest ", therest);
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;
