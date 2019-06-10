import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "../Login";
import PrivateRoute from "../PrivateRoute";
import ItemList from '../ItemList';
import TechItemList from '../__TechItemList';



const SignedOutLinks = () => {
  return (
    <Router>
      <ul className="right"
      >
        <li><NavLink to="/login" className="#66bb6a green lighten-1 z-depth-2 waves-effect waves-light btn">Log In</NavLink></li>
        <li>
          <NavLink to="/protected" className="#66bb6a green lighten-1 z-depth-2 waves-effect waves-light btn">Protected Page</NavLink>
        </li>
      </ul>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={TechItemList} />
    </Router>
  )
};

export default SignedOutLinks;
