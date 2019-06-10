import React, { Component } from 'react'
import { connect } from 'react-redux';
import { updateUser } from '../actions';

class UpdateUserForm extends Component {
  state = {
    user: this.props.activeUser
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'name') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      user: {
        ...prevState.user,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.state.user);
  };

  render() {
    return (
      <div>
        <h2>Update Account</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            name='name'
            onChange={this.changeHandler}
            placeholder='Username'
            value={this.state.item.name}
          />
          <input
            type='password'
            name='password'
            onChange={this.changeHandler}
            placeholder='Password'
            value={this.state.item.name}
          />
          <input
            type='email'
            name='email'
            onChange={this.changeHandler}
            placeholder='Email'
            value={this.state.item.name}
          />
          <button>Update</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    updatingUser: state.updatingUser
  }
}


export default connect(
  mapStateToProps,
  { updateUser }
)(UpdateUserForm);
