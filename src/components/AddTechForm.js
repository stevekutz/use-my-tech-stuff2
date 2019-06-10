import React, {Component} from 'react';
import './addTechForm.css';


import {connect} from 'react-redux';
import {addTech, getTech, deleteTech} from '../actions';
import { withRouter } from "react-router-dom";

import { Label, Input } from 'reactstrap';



// https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg

class AddTechForm extends Component {
  state = {
    name: '',
    user_id: localStorage.getItem("user_id"),
    category: '',
    description: 'Minions ipsum uuuhhh tulaliloo gelatooo daa. Hahaha aaaaaah para tú la bodaaa gelatooo chasy po kass uuuhhh underweaaar poopayee poulet tikka masala.',
    picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
    cost: '',
    availability: true,
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
    //   this.setState({newTodo: e.target.value})
  };

  handleSubmit = e => {
    const {name, user_id, category, picture, description, cost, availability} = this.state;
    e.preventDefault();

    // must fill in ALL fields !!!
    if(name && category && description && category && cost ) {
      this.props.addTech({name, user_id, category, picture, description, cost, availability});
      this.setState({
        name: '',
        category: '',
        description: 'Minions ipsum uuuhhh tulaliloo gelatooo daa. Hahaha aaaaaah para tú la bodaaa gelatooo chasy po kass uuuhhh underweaaar poopayee poulet tikka masala.',
        picture: "https://www.lightwave3d.com/static/media/uploads/news/louis-du-mont-tedstech/louis-du-mont-tedstech-banner.jpg",
        cost: '',
        availability: false,
      });
    }

  };


  render() {
    return (
      <div className = "addTechItem-container">
        <div className = "buttonContainer">
          <button
            className = "addTechItemButton"
          >Add some "NEW" Tech !!!
          </button>
        </div>


        <form
          className = "addTechItemForm"
          onSubmit = {this.handleSubmit}
        >



          <div className = "addItem-container">

            <div className = "techFormInputs">

              <Label> name
                <Input
                  className= "addInputFieldName"
                  value = {this.state.name}
                  name = "name"
                  type = "text"
                  placeholder = "name"
                  onChange={this.handleChange}
                />
              </Label>

              <Label> category
                <Input
                  className= "addInputField"
                  value = {this.state.category}
                  name = "category"
                  type = "text"
                  placeholder = "category"
                  onChange={this.handleChange}
                />
              </Label>

              <Label> cost
                <Input
                  className= "addInputField"
                  value = {this.state.cost}
                  name = "cost"
                  type = "text"
                  placeholder = "cost"
                  onChange={this.handleChange}
                />
              </Label>

            </div>


            <div className= "addTextAreaField" >picture URL
              <textarea
                value = {this.state.picture}
                name = "picture"
                placeholder = "picture"
                onChange={this.handleChange}
              />
            </div>


            <div className = "addTextAreaField"> description
               <textarea
                 value = {this.state.description}
                  name = "description"
                  wrap="hard"
                  placeholder = "description"
                  onChange={this.handleChange}
               />
            </div>
          </div>

        </form>

      </div>

    );
  }
}



const mapStateToProps = state => ({
  techItems: state.techItems,       // ADDED TODAY, did not resolve
  addingTech: state.addingTech,
  error: state.error,

});


//export default connect(mapStateToProps, {addTech, getTech})(AddTechForm);

export default withRouter(
  connect (
    mapStateToProps,
    {getTech, addTech, deleteTech} ,


  )(AddTechForm)

);