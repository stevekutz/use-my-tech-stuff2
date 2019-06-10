import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addUser, getUsers } from '../actions/___SignUp';
import styled from 'styled-components';
// import UserList from './UserList';


const Wrapper = styled.div`
 // height: 100vh;
  margin-top: 50px; 
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const FormWrapper = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  border: 2px solid dodgerblue;
  padding: 20px 40px;
  background-color: #ffffff;
    background: gainsboro;
`;


const Form = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: none;
`;
const HTwo = styled.div`
  font-size: 2.5rem;
  text-align: center;
  width: 100%;
  color: dodgerblue;
  font-weight: bolder;
      text-shadow: 5px 5px 3px darkgray;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    margin: 20px 0;
`;
const Label = styled.div`
  width:90%;
  font-size: 1.1rem;
  margin-bottom: 0.25em;
  color: #222;
  font-weight: lighter;
  ${'' /* font-family: Oxygen, sans-serif; */}
`;
const Input = styled.input`
  padding: 2%;
  font-size: .85rem;
  border-radius: 5px;
  width: 100%;
  outline: none;
  border: 1px solid #cfcfcf;
`;
const CreateAccountButton = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

const Button = styled.button`
  color: white;
  background: green;
  border: 2px solid darkslategrey;
  border-radius: 10px;
  width: 100%;
  margin: 5px;
  padding: 5px 0px;
  font-size: 1em;
  font-weight: lighter;
  letter-spacing: 1px;
  margin-bottom: 0.25em;
  cursor: pointer;
  &:hover {
  color: white;
  font-weight: bold;
  background-color: seagreen;
  }
`;


const CancelButton = styled(Button)`
  background: lightpink;
  border: 2px solid slategrey;
  width: 80%;
  margin: 0 auto;
  &:hover {
  font-weight: bold;
  background-color: lightcoral;
  }
`;

class SignUpForm extends Component {
  state = {
    users: [],
    newUser: {
      username: "",
      password: "",
      email: "",
    }
  };
  componentDidMount() {
    this.props.getUsers();
  }


  handleChange = e => {
    console.log(e);
    this.setState({
      newUser: {
        ...this.state.newUser,
        [e.target.name]: e.target.value
      }
    })
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addUser(this.state.newUser);
    console.log(this.state);
    this.setState({
      newUser: {
        username: "",
        password: "",
        email: "",
      }
    });
    this.addForm.reset();
  };


  render() {
    return (

      <Wrapper>
        <FormWrapper>
          <HTwo>Create Account</HTwo>
          <Form ref={input => this.addForm = input} onSubmit={this.handleSubmit}>
            <Label> Username:
              <Input
                placeholder="Create a Username"
                type="text"
                name="username"
                value={this.state.newUser.userName}
                onChange={this.handleChange}
              />
            </Label>
            <Label> Password
              <Input
                placeholder="Create a Password"
                type="password"
                name="password"
                value={this.state.newUser.password}
                onChange={this.handleChange}
              />
            </Label>
            <Label> email
              <Input
                placeholder="Email"
                type="email"
                name="email"
                value={this.state.newUser.email}
                onChange={this.handleChange}
              />
            </Label>
            <CreateAccountButton>
              <Button type="submit">Sign Up</Button>
            </CreateAccountButton>

            <CancelButton
              className = "cancelButton"
              onClick = { () => this.props.history.push("/") }
            >  Cancel !!! </CancelButton>

          </Form>
        </FormWrapper>





      </Wrapper>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    fetchingUsers: state.fetchingUsers,
    addingUser: state.addingUser,
  }
}


export default connect(
  mapStateToProps,
  { getUsers, addUser }
)(SignUpForm);


