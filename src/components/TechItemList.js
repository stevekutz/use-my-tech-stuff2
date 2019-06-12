import React, { Component } from 'react';
import './App.css';

import Loader from 'react-loader-spinner';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import AddTechForm from './AddTechForm';
import TechItem from './TechItem';


import {
  TechItemListContainer,
  TechTitle,
} from '../styled/TechItemStyles';

class TechItemlist extends Component {

  componentDidMount() {
    this.props.getTech();
  }
        // BUILD modal for AddTechForm 
  render() {

    return (
      <TechItemListContainer>

        <AddTechForm/>

        {this.props.techItems.fetchingData?
          <Loader className = "section" type="Rings" color="deeppink" height="260" width="280" />
          :
          <TechTitle> TechItems for Rent !</TechTitle>
        }

        {this.props.techItems.techItems.map( (techItem, id ) => (

          <TechItem
            techItem = {techItem}
            id = {id}
          />

        ))}

      </TechItemListContainer>

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

