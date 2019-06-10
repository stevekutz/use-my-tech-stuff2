import React from 'react';
import './addTechForm.css';

import {getTech, deleteTech, updateTech, addTech} from '../actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


//     picture: "https://zdnet2.cbsistatic.com/hub/i/r/2018/01/26/b4fe5bfc-6e3b-4575-b8db-f06caadc1a71/thumbnail/770x578/5f810055799b727df363a6e0cfcece38/tech-transport-future-intro.jpg",


import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';

class ModalUpdateTech extends React.Component {
  state = {
    modal: false,
    techItem: this.props.techItem,
    gud_id: this.props.techItem.id,
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({

        techItem: {
         ...this.state.techItem,       // just added  TONIGHT
          [e.target.name]: e.target.value
        }

      })
  };


  handleUpdate  = (e, id) => {

       const {name, user_id, category, picture, description, cost, availability} = this.state.techItem;

       const itemUpdated = {
         name: name,
         category: category,
         picture: picture,
         description: description,
         cost: cost,
         availability: availability,
 //        id: this.state.gud_id,
        id: id,
         user_id: user_id,
       };



    e.preventDefault();

    console.log('>>>>>  $$$$$$   itemUpdated', itemUpdated);

    this.props.updateTech(this.props.techItem.id, itemUpdated);

//    this.props.updateTech(this.state.gud_id, itemUpdated);
    this.handleToggle();
  };

  handleToggle = () => {

    this.setState( {
      modal: !this.state.modal,

    });

  };

  render() {

    const {name, id, category, picture, description, cost} = this.state.techItem;

    return (
      <div>

        <Button color="danger" onClick={this.handleToggle}> Update  </Button>

        <Modal isOpen={this.state.modal}>
          <ModalHeader toggle = {this.handleToggle} > Update {name}</ModalHeader>
          <ModalBody>

            <div >
              <form
                onSubmit = {this.handleUpdate}
              >

                <div >


                  {/*
                    <h4> id: {this.state.gud_id} </h4>
                    <h4> id prop: {this.props.techItem.id}  </h4>
                  */}



                  <div >
                    <Label>Name:
                      <Input
                        value = {name}
                        name = "name"
                        type = "text"
                        placeholder = "name"
                        onChange={this.handleChange}
                      />
                    </Label>

                    <Label> category:
                      <Input
                        value = {category}
                        name = "category"
                        type = "text"
                        placeholder = "category"
                        onChange={this.handleChange}
                      />
                    </Label>

                    <Label> Co$t
                      <Input
                        value = {cost}
                        name = "cost"
                        type = "text"
                        placeholder = "cost"
                        onChange={this.handleChange}
                      />
                    </Label>


                  </div>

                  <div > picture URL
                    <textarea
                      value = {picture}
                      name = "picture"
                      placeholder = "picture"
                      onChange={this.handleChange}
                    />
                  </div>

                  <div> description:

                     <textarea
                       value = {description}
                       name = "description"
                       wrap="hard"
                       placeholder = "description"
                       onChange={this.handleChange}
                     />

                  </div>

                </div>
              </form>
            </div>

          </ModalBody>



          <ModalFooter>
            <Button color="primary" onClick={ (e) => this.handleUpdate(e, this.props.techItem.id)  }> Update</Button>{' '}
            <Button color="secondary" onClick={this.handleToggle}>Cancel</Button>
          </ModalFooter>

        </Modal>

      </div>
    );
  }
}

// <Button color="primary" onClick={ (e) => this.handleUpdate(e, id

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
  )(ModalUpdateTech)

);
