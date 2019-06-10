import React from 'react';
//import logo from '../logo.svg';
import './App.css';


import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Login from "./Login";               // UNCOMMENTED
import PrivateRoute from "./PrivateRoute"; // UNCOMMENTED

// import TechItemList from "./TechItemList";
import SignUpForm from './SignUpForm';
import UserList from './UserList';
import TechItemList from "./TechItemList";

/*
<li>
            <Link to="/protected" activeClassName="activeNavButton"  >Protected Page</Link>
          </li>

 */


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link  to="/login" activeClassName="activeNavButton" >Login</Link>
          </li>

          <li>
            <Link to="/signupform" activeClassName="activeNavButton"  >Join Use My Tech Stuff !</Link>
          </li>
          <li>
            <Link to="/users" activeClassName="activeNavButton"  >Techies</Link>
          </li>
          <li>
            <Link to="/"
              onClick = { () =>  {
                  localStorage.removeItem("token");
                  localStorage.removeItem("user_id");
                  localStorage.removeItem("username");
              }
                  }
            >Logout</Link>
          </li>

        </ul>
      </div>
      <Route
        path="/login"
        // component={Login}
        render={props => <Login {...props} isLoggingIn={false} />}
      />
      <PrivateRoute exact path="/protected" component={TechItemList} />
      <Route
        path='/signupform'
        render={props => <SignUpForm {...props} addingUser={false} />}
      />
      <Route exact path="/users" component={UserList} />

    </Router>

  );
}

export default App;

//  <PrivateRoute exact path="/protected" component={TechItemList} />