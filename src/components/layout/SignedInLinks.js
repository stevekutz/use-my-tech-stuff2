import React from 'react';
import { NavLink } from 'react-router-dom';
// import { connect } from 'react-redux';



const SignedInLinks = () => {
  return (
    <ul className="right"

    >
      <li><NavLink to="/">Rentals</NavLink></li>
      <li><NavLink to="/">User Account</NavLink></li>
      <li><NavLink
        onClick={() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user_id");
        }

        }
        to="/" className="#ef5350 red lighten-1 z-depth-2 waves-effect waves-light btn">Log Out</NavLink></li>
    </ul>
  )
}

export default SignedInLinks;
