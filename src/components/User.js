import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, updateUser, } from '../actions';

class User extends Component {
  state = {
    users: [],
    activeItem: null,
    updateUser: {
      username: "",
      password: "",
      email: "",
    }
  }
  componentDidMount() {
    this.props.getUsers();
  }

  handleChange = e => {
    console.log(e);
    this.setState({
      updateUser: {
        ...this.state.updateUser,
        [e.target.name]: e.target.value,
      }
    });
  };

  setActiveItem = item => {
    this.setState({ activeItem: item });
  };

  render() {
    return (
      <div>
        <h2>Edit Your Account</h2>
        <div>
          <p>Username: {users.username}</p>
          <p>Password: {users.password}</p>
          <p>Email: {users.email}</p>
        </div>
        <button onClick={e => {
          this.props.updateUser(this.props.id)
        }}></button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.updateUser
  }
}

export default connect(
  mapStateToProps,
  { getUsers, updateUser, }
)(User);
