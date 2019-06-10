import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';

class Itemlist extends Component {




  state = {
    isChecked: true,

  };

  toggleChange = () => {
    console.log("isChecked is ", this.isChecked);
    this.setState({
      isChecked: !this.state.isChecked
    });
  };


  componentDidMount() {


  }

  // handlers

  render() {

    return (
      <div>
        <Loader
          type="Ball-Triangle"
          height={100}
          color="deeppink"
          width={100}
          style={{ border: "4px solid deeppink", margin: "250px" }}
        />

        <h3> Lets go for a <FaBeer />? </h3>
        <h3> Lets go for a <FaBeer />? </h3>
        <h3> Lets go for a <FaBeer />? </h3>
        <h1> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h1>

        <label>
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />{" "}
          {this.props.msgTitle}
        </label>
        <div> {this.state.isChecked.toString()}</div>

        {this.state.isChecked ? (
          <Loader
            type={this.props.loaderType}
            color="blue"
            height={150}
            width={150}
          />
        ) : (
            <Loader
              type="CradleLoader"
              height={10}
              width={10}
              style={{ border: "4px solid deeppink", margin: "50px" }}
            />
          )}


        <h1> HEY asdsadasdasdasdasdasddasdsadasdsaasdadsadsdsdsad </h1>

      </div>



    )
  }

}


/*
const mapStateToProps = ({}) => ({
});
export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(Itemlist)
);
*/

export default Itemlist;