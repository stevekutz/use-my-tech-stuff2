import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
// import { FaBeer } from 'react-icons/fa';
import AddTechForm from './AddTechForm';
// import axios from "axios";
;
class TechItemlist extends Component {


  componentDidMount() {
    this.props.getTech();
  }

  // handlers


  handleDelete = (e, id) => {
    console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);
  };


  handleUpdate  = (e, id, tech) => {

 //   const {name, user_id, category, picture, description, cost, availability} = this.state;


    e.preventDefault();
    this.props.updateTech(id, tech);
  };



// <button className = "renterButton" > Rent Item </button>

  render() {

    console.log("HEY");

    return (
      <div className = "techItemsList-container">

        <AddTechForm/>

        {this.props.techItems.fetchingData?
          <Loader className = "section" type="Rings" color="deeppink" height="260" width="280" />
          :
          <h3 className = "techTitle"> TechItems for Rent !</h3>
        }

        {this.props.techItems.techItems.map( (techItem, id ) => (
          <div className = "techItem-container"   key = {id}       >


            <div className = "buttons-container">
              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick =  { (e) => this.handleDelete(e, techItem.id)}
                  className = "ownerButton"> Delete Item </button>

                : techItem.availability
                  ? <h3 className = "borderFormat avail"> Available </h3>
                  : <h3 className = "borderFormat rented"> Rented </h3>
              }

              {Number(localStorage.getItem('user_id')) !== techItem.user_id &&
                techItem.availability
                ? <button
                    className = "renterButton"
                    onClick = {() => alert(`heyyyyy ${techItem.user}, I want to rent this !!!`)}
                    > Rent Item

                  </button>
                : null
              }

              {Number(localStorage.getItem('user_id')) === techItem.user_id
                ? <button
                  onClick = { (e) => this.handleUpdate(techItem.id, techItem)}
                  className = "ownerButton"> Update Item </button>
                : null
              }
            </div>

            <div className = "img-container">
              <img className = "img_item"
                   src =  {techItem.picture} alt = "alt-img"
              />
            </div>
              <h3 className = "borderFormat"> Owner: {techItem.user} </h3>
              <h4 className = "borderFormat" >ID: {techItem.user_id}</h4>
              <h4 className = "borderFormat"  > {techItem.name} </h4>
              <h4 className = "borderFormat" > Category: {techItem.category} </h4>
              <h4 className = "borderFormat"> Cost: ${techItem.cost} </h4>
              <h4 className = "borderFormat"> Availability: {techItem.availability.toString()} </h4>
              <h4 className = "borderFormat" style = {{fontSize: "12px"}}>  Description: {techItem.description} </h4>
          </div>   // end of techItem-container



        ))}






      </div>

    )
  }
}


const mapStateToProps = ({techItems, fetchingData, deletingTech, updatingTech, addingTech}) => ({
  techItems,
  fetchingData,
  deletingTech,
  updatingTech,
  addingTech,


});

export default withRouter(
  connect(
    mapStateToProps,
    {getTech, deleteTech, updateTech, addTech}

  )(TechItemlist)

);