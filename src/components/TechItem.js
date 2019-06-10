import React, {Component} from 'react';

import './App.css';
import {deleteTech} from "../actions";
import {connect} from 'react-redux';
import ModalUpdateTech from './ModalUpdateTech';
import ModalRentalRequest from './ModalRentalRequest';
import ModalRentalRequest2 from './ModalRentalRequest2';

import {
  TechItemContainer,
  ButtonsContainer,
  ImageContainer,
  ImageItem,
  ItemH4,
  ItemH5,
  ItemDescription,
  ItemAvailable,
  ItemRented,






} from '../styled/TechItemStyles';



class TechItem extends Component {

  handleDelete = (e, id) => {
   console.log(">>>>>>>>>>>>>>>>>>> deleting");
    e.preventDefault();
    this.props.deleteTech(id);

  };


  render()  {

    const {techItem, id} = this.props;

    return (
      <TechItemContainer   key = {id}       >


        <ButtonsContainer>
          {Number(localStorage.getItem('user_id')) === techItem.user_id
            ? <button
              onClick =  { (e) => this.handleDelete(e, techItem.id)}
              className = "ownerButton"> Delete Item </button>

            : techItem.availability
              ? <ItemAvailable> Available </ItemAvailable>
              : <ItemRented> Rented </ItemRented>
          }

          {Number(localStorage.getItem('user_id')) !== techItem.user_id &&
          techItem.availability
            ? <ModalRentalRequest2 techItem = {techItem}/>
            : null
          }

          {Number(localStorage.getItem('user_id')) === techItem.user_id
            ? <ModalUpdateTech
              techItem = {techItem}
              onClick = { (e) => this.handleUpdate(e, techItem.id, techItem)}
              className = "ownerButton"> Update Item </ModalUpdateTech>
            : null
          }
        </ButtonsContainer>

        <ImageContainer>
          <ImageItem
               src =  {techItem.picture} alt = "alt-img"
          />
        </ImageContainer>

        <ItemH4> Owner: {techItem.user} </ItemH4>
        {/* <>       <h4 className = "borderFormat" >ID: {techItem.user_id}</h4>  </> */}
        <ItemH5  > {techItem.name} </ItemH5>
        <ItemH5> Category: {techItem.category} </ItemH5>
        <ItemH5> Cost: ${techItem.cost} </ItemH5>
        <ItemH5> Availability: {techItem.availability.toString()} </ItemH5>
        <ItemDescription>  Description: {techItem.description} </ItemDescription>
      </TechItemContainer>   // end of techItem-container

    )

  }

}

export default connect(
  null, {deleteTech}
)(TechItem);
